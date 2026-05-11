/**
 * QuestionEngine: Motor central de renderizado educativo
 * Separa la lógica de la pregunta de su visualización
 */
const QuestionEngine = {
  /**
   * Genera el HTML completo para una pregunta
   * @param {Object} qData - Receta de la pregunta
   */
  render(qData) {
    if (!qData) return '<div class="error">Pregunta no encontrada</div>';

    const { id, text, type, data, options, explanation } = qData;
    
    return `
      <div class="q-container animate-popIn" id="q-${id}">
        <!-- TEXTO DE LA PREGUNTA -->
        <div class="q-header">
          <h2 class="q-text">${text}</h2>
        </div>
        
        <!-- AREA VISUAL (ANIMACIONES, GRAFICOS, HTML) -->
        <div class="q-visual-area">
          ${this.renderVisual(type, data)}
        </div>

        <!-- LISTA DE OPCIONES -->
        <div class="q-options-grid">
          ${options.map((opt, i) => `
            <button class="quiz-option" onclick="app.checkAnswer(${i})">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span class="option-text">${opt}</span>
            </button>
          `).join('')}
        </div>

        <!-- SISTEMA DE FEEDBACK PASO A PASO -->
        <div id="feedback-panel" class="q-feedback hidden">
          <div class="feedback-content">
            <h3><span class="icon">💡</span> Explicación Matemática</h3>
            <div class="steps-container">
              ${explanation ? explanation.map((step, i) => `
                <div class="f-step animate-slideIn" style="animation-delay: ${i * 0.2}s">
                  <div class="step-num">${i + 1}</div>
                  <div class="step-text">${step}</div>
                </div>
              `).join('') : '<p>No hay explicación disponible para esta pregunta.</p>'}
            </div>
            <button class="btn-primary" onclick="app.nextQuestion()">Continuar</button>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Determina qué componente renderizar en el área visual
   */
  renderVisual(type, data) {
    if (!type) return '';

    switch (type) {
      case 'balance':
      case 'balance-challenge':
        return Components.createBalance(data.balances || data);
      
      case 'grid':
      case 'grid-challenge':
        return Components.createGrid(data.points || [], data.lines || [], data.size || 8);
      
      case 'fraction':
      case 'visual-fraction':
        return Components.createFraction(data.n, data.d, data.style || 'square');
      
      case 'html':
        // Permite insertar código HTML/CSS/SVG puro desde el banco de preguntas
        return `<div class="custom-html-visual">${data.html}</div>`;
      
      case 'icon':
        return `<div class="q-icon-visual">${data.icon}</div>`;
      
      default:
        return `<div class="q-placeholder">Visualización de tipo "${type}" en desarrollo</div>`;
    }
  }
};
