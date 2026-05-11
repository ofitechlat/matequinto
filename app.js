const app = {
  // GitHub Config
  ghConfig: {
    token: localStorage.getItem('math_gh_token') || '',
    owner: 'ofitechlat',
    repo: 'matequinto',
    path: 'data/progreso.json'
  },
  
  userName: localStorage.getItem('math_user') || '',
  stars: parseInt(localStorage.getItem('math_stars')) || 0,
  unlockedLevels: JSON.parse(localStorage.getItem('math_levels')) || ['level1'],
  history: JSON.parse(localStorage.getItem('math_history')) || [],
  currentLevel: null,
  selectedLevelId: '',
  currentQuestionIndex: 0,
  questions: [],
  score: 0,
  isSyncing: false,

  async init() {
    this.updateUI();
    this.renderRoadmap();
    if (!this.userName) {
      document.getElementById('welcome-modal').classList.add('active');
    } else {
      // Intentar sincronizar al inicio si ya hay usuario
      this.syncWithGitHub();
    }
    window.app = this;
  },

  updateUI() {
    document.getElementById('user-name').innerText = this.userName ? `Hola, ${this.userName}` : 'Hola, Explorador';
    document.getElementById('stars').innerText = this.stars;
    localStorage.setItem('math_stars', this.stars);
    localStorage.setItem('math_levels', JSON.stringify(this.unlockedLevels));
    localStorage.setItem('math_history', JSON.stringify(this.history));
    
    const dot = document.getElementById('sync-dot');
    const text = document.getElementById('sync-text');
    if (dot && text) {
        dot.className = `sync-dot ${this.isSyncing ? 'syncing' : (this.userName ? 'online' : '')}`;
        text.innerText = this.isSyncing ? 'Sincronizando...' : (this.userName ? 'Nube' : 'Local');
    }
  },

  async syncWithGitHub() {
    if (!this.userName || this.isSyncing) return;
    this.isSyncing = true;
    this.updateUI();

    try {
        const url = `https://api.github.com/repos/${this.ghConfig.owner}/${this.ghConfig.repo}/contents/${this.ghConfig.path}`;
        const headers = {
            'Authorization': `token ${this.ghConfig.token}`,
            'Accept': 'application/vnd.github.v3+json'
        };

        // 1. Obtener datos actuales
        const res = await fetch(url, { headers });
        let currentData = { usuarios: {} };
        let sha = null;

        if (res.ok) {
            const fileInfo = await res.json();
            sha = fileInfo.sha;
            currentData = JSON.parse(atob(fileInfo.content));
        }

        // 2. Fusionar datos (Priorizar nube si el usuario existe, o subir local si es nuevo)
        if (currentData.usuarios[this.userName]) {
            const cloudUser = currentData.usuarios[this.userName];
            // Solo actualizamos local si la nube tiene más estrellas o niveles (o está vacío local)
            if (cloudUser.estrellas > this.stars || cloudUser.nivelesDesbloqueados.length > this.unlockedLevels.length) {
                this.stars = cloudUser.estrellas;
                this.unlockedLevels = cloudUser.nivelesDesbloqueados;
                this.history = cloudUser.historial || [];
                this.updateUI();
                this.renderRoadmap();
            }
        }

        // 3. Preparar actualización para la nube
        currentData.usuarios[this.userName] = {
            estrellas: this.stars,
            nivelesDesbloqueados: this.unlockedLevels,
            historial: this.history,
            ultimaSincronizacion: new Date().toISOString()
        };

        const body = {
            message: `Actualización de progreso: ${this.userName}`,
            content: btoa(unescape(encodeURIComponent(JSON.stringify(currentData, null, 2)))),
            sha: sha
        };

        const putRes = await fetch(url, {
            method: 'PUT',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!putRes.ok) console.error("Error al subir datos:", await putRes.text());

    } catch (e) {
        console.error("Error de sincronización:", e);
    } finally {
        this.isSyncing = false;
        this.updateUI();
    }
  },

  async saveName() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();
    if (name) {
      this.userName = name;
      localStorage.setItem('math_user', name);
      nameInput.disabled = true;
      document.querySelector('#welcome-modal button').innerText = 'Cargando...';
      
      await this.syncWithGitHub();
      
      this.updateUI();
      document.getElementById('welcome-modal').classList.remove('active');
    }
  },

  renderRoadmap() {
    const list = document.getElementById('nodes-list');
    if (!list) return;
    list.innerHTML = '';
    
    mathContent.levels.forEach((level, index) => {
      const isUnlocked = this.unlockedLevels.includes(level.id);
      const node = document.createElement('div');
      node.className = `node ${isUnlocked ? '' : 'locked'}`;
      
      let icon = '🌱';
      if (index > 1) icon = '🌿';
      if (index > 3) icon = '🌳';
      if (index === 5) icon = '🏆';

      node.innerHTML = `
        <div class="node-icon">${icon}</div>
        <h3>${level.title}</h3>
        <p>${level.description}</p>
      `;
      if (isUnlocked) {
        node.onclick = () => this.startLevel(level);
      }
      list.appendChild(node);
    });
  },

  startLevel(level) {
    this.currentLevel = level;
    this.selectedLevelId = level.id;
    this.showSection('lesson-view');
    const content = document.getElementById('lesson-content');
    content.innerHTML = `
      <h2 style="color: var(--primary-sage); margin-bottom: 20px;">${level.title}</h2>
      <div class="lessons-container">
        ${level.lessons.map(lesson => `
          <div class="lesson-step" style="background: #fff; padding: 20px; border-radius: var(--radius-md); margin-bottom: 20px; box-shadow: var(--shadow-sm);">
            <h3 style="margin-bottom: 10px;">${lesson.title}</h3>
            <p style="margin-bottom: 15px;">${lesson.explanation}</p>
            <div class="examples-list">
              ${lesson.examples.map(ex => `
                <div class="example-box">
                  <div style="margin-bottom: 10px;">${ex.text}</div>
                  ${this.renderDiagram(ex)}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <button class="btn-primary" style="width: 100%; margin-top: 10px;" onclick="app.startQuiz()">¡Comenzar Reto!</button>
    `;
  },

  renderDiagram(data) {
    if (!data.type) return data.icon ? `<div style="font-size: 3rem; text-align: center;">${data.icon}</div>` : '';
    let html = '';
    switch (data.type) {
      case 'visual-fraction':
      case 'fraction-square': html = Components.createFraction(data.n, data.d, 'square'); break;
      case 'fraction-circle': html = Components.createFraction(data.n, data.d, 'circle'); break;
      case 'balance': 
      case 'balance-challenge': html = Components.createBalance(data.balances || data); break;
      case 'grid': 
      case 'grid-challenge': html = Components.createGrid(data.points || [], data.lines || [], data.size || 8); break;
      case 'icon': html = `<div style="font-size: 3rem; text-align: center;">${data.icon}</div>`; break;
      default: html = '';
    }
    return `<div class="diagram-wrapper" style="margin: 20px 0;">${html}</div>`;
  },

  startQuiz() {
    this.questions = QuestionsBank[this.selectedLevelId] || [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.showSection('quiz-view');
    this.showQuestion();
  },

  showQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    if (!question) {
      this.finishLevel();
      return;
    }

    const container = document.getElementById('quiz-question-container');
    container.innerHTML = QuestionEngine.render(question);
    
    this.updateProgress();
  },

  checkAnswer(selectedIndex) {
    const question = this.questions[this.currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedbackPanel = document.getElementById('feedback-panel');
    
    if (selectedIndex === question.answer) {
      options[selectedIndex].classList.add('correct');
      this.score += 10;
      this.stars += 5;
      this.updateUI();
    } else {
      options[selectedIndex].classList.add('wrong');
      options[question.answer].classList.add('correct');
    }

    // Disable all options
    options.forEach(opt => opt.disabled = true);

    // Show step-by-step feedback
    setTimeout(() => {
      if (feedbackPanel) {
        feedbackPanel.classList.remove('hidden');
        feedbackPanel.classList.add('active');
      }
    }, 600);
  },

  nextQuestion() {
    this.currentQuestionIndex++;
    this.showQuestion();
  },

  updateProgress() {
    const progress = ((this.currentQuestionIndex) / this.questions.length) * 100;
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = `${progress}%`;
  },

  finishLevel() {
    const nextLevelIndex = mathContent.levels.findIndex(l => l.id === this.selectedLevelId) + 1;
    if (nextLevelIndex < mathContent.levels.length) {
      const nextLevel = mathContent.levels[nextLevelIndex];
      if (!this.unlockedLevels.includes(nextLevel.id)) {
        this.unlockedLevels.push(nextLevel.id);
      }
    }

    this.history.push({
      levelId: this.selectedLevelId,
      levelTitle: mathContent.levels.find(l => l.id === this.selectedLevelId)?.title || this.selectedLevelId,
      score: this.score,
      total: this.questions.length,
      date: new Date().toLocaleDateString()
    });

    this.updateUI();
    this.renderRoadmap();
    this.syncWithGitHub();
    
    const container = document.getElementById('quiz-question-container');
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 0;">
        <div style="font-size: 5rem; margin-bottom: 20px; animation: bounce 1s infinite;">🏆</div>
        <h2 style="font-size: 2rem; color: var(--primary-sage);">¡Nivel Superado!</h2>
        <p style="margin: 15px 0; color: #666;">Has demostrado gran habilidad matemática.</p>
        <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-gold); margin-bottom: 30px;">+${this.questions.length * 5} ⭐</div>
        <button class="btn-primary" onclick="app.showRoadmap()">Volver al Mapa</button>
      </div>
    `;
  },

  showSection(id) {
    ['roadmap', 'lesson-view', 'quiz-view', 'training-view'].forEach(section => {
      const el = document.getElementById(section);
      if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');
  },

  showRoadmap() {
    this.showSection('roadmap');
    this.renderRoadmap();
  },

  showResults() {
    this.showSection('results-view');
    const list = document.getElementById('results-list');
    if (!list) return;

    if (this.history.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding: 20px; color: #999;">Aún no tienes resultados. ¡Completa un nivel!</p>`;
        return;
    }

    // Agrupar por tema (último resultado de cada nivel)
    const latestResults = {};
    this.history.forEach(entry => {
        latestResults[entry.levelId] = entry;
    });

    list.innerHTML = Object.values(latestResults).map(entry => `
        <div class="result-card animate-popIn">
            <div class="result-info">
                <h4>${entry.levelTitle}</h4>
                <p>Fecha: ${entry.date}</p>
            </div>
            <div class="result-score">
                ${entry.score}/${entry.total * 10}
            </div>
        </div>
    `).join('');
  },

  showTraining() {
    this.showSection('lesson-view');
    const content = document.getElementById('lesson-content');
    content.innerHTML = `
      <h2 style="color: var(--primary-sage); margin-bottom: 10px;">🧪 Laboratorio PEMDAS</h2>
      <p style="margin-bottom: 20px;">Escribe una operación para ver el orden de resolución:</p>
      
      <div class="training-card" style="background: white; padding: 25px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
        <input type="text" id="pemdas-input" placeholder="Ej: (10 + 2) * 5" style="width: 100%; padding: 15px; border: 2px solid #eee; border-radius: var(--radius-md); font-size: 1.2rem; margin-bottom: 15px; font-family: monospace;">
        <button class="btn-primary" style="width: 100%; background: var(--secondary-clay);" onclick="app.solvePemdas()">Resolver Paso a Paso</button>
        
        <div id="pemdas-result" style="margin-top: 25px;"></div>
      </div>
    `;
  },

  async solvePemdas() {
    const input = document.getElementById('pemdas-input').value;
    const resultDiv = document.getElementById('pemdas-result');
    if (!input) return;

    resultDiv.innerHTML = '';
    let current = input.replace(/\s/g, '');
    
    const addStep = (text, formula) => {
      const stepEl = document.createElement('div');
      stepEl.className = 'pemdas-step';
      stepEl.innerHTML = `${text}: <b>${formula}</b>`;
      resultDiv.appendChild(stepEl);
    };

    addStep('Inicio', current);
    await new Promise(r => setTimeout(r, 600));

    // Handle Parentheses
    while (current.includes('(')) {
      const match = current.match(/\(([^()]+)\)/);
      if (!match) break;
      const inner = match[1];
      const res = eval(inner.replace(/x/g, '*'));
      current = current.replace(match[0], res);
      addStep(`Paréntesis (${inner})`, current);
      await new Promise(r => setTimeout(r, 600));
    }

    // Handle Mult/Div
    if (current.toString().match(/[*/x]/)) {
      const res = eval(current.replace(/x/g, '*'));
      current = res;
      addStep('Multiplicación / División', current);
      await new Promise(r => setTimeout(r, 600));
    }

    // Handle Add/Sub
    if (current.toString().match(/[+-]/) && !current.toString().match(/^-?\d+$/)) {
      const res = eval(current);
      current = res;
      addStep('Suma / Resta', current);
    }
  },

  showSettings() {
    if (confirm("¿Quieres reiniciar todo tu progreso?")) {
      localStorage.clear();
      location.reload();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => app.init());
