/**
 * Components: Motor de renderizado visual de alta precisión
 */
const Components = {
  createBalance(data) {
    const balances = Array.isArray(data) ? data : [data];
    return `
      <div class="balances-wrapper">
        ${balances.map((b, i) => `
          <div class="balance-container">
            <div class="balance-label">${b.title || `Balanza ${i + 1}`}</div>
            <div class="balance-system">
              <div class="balance-beam-modern"></div>
              <div class="balance-trays">
                <div class="tray-container">
                  <div class="tray-wire"></div>
                  <div class="tray-box left-tray">${this.renderItems(b.left || {})}</div>
                </div>
                <div class="tray-container">
                  <div class="tray-wire"></div>
                  <div class="tray-box right-tray">${this.renderItems(b.right || {})}</div>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderItems(data) {
    let html = '';
    if (data.cubes) {
      for(let i=0; i<data.cubes; i++) html += `<div class="item cube"></div>`;
    }
    if (data.triangles) {
      for(let i=0; i<data.triangles; i++) html += `<div class="item triangle"></div>`;
    }
    if (data.weight) {
      html += `<div class="weight-mass">${data.weight}<span>kg</span></div>`;
    }
    return html;
  },

  createGrid(points = [], lines = [], size = 8) {
    let gridHtml = `<div class="math-grid" style="grid-template-columns: repeat(${size + 1}, 1fr);">`;
    for (let y = size; y >= 0; y--) {
      for (let x = 0; x <= size; x++) {
        const isPoint = points.find(p => p.x === x && p.y === y);
        gridHtml += `
          <div class="grid-cell">
            ${x === 0 ? `<span class="axis-label y">${y}</span>` : ''}
            ${y === 0 ? `<span class="axis-label x">${x}</span>` : ''}
            ${isPoint ? `<div class="grid-point"></div>` : ''}
          </div>`;
      }
    }
    gridHtml += '</div>';
    return gridHtml;
  },

  createFraction(numerator, denominator, type = 'square') {
    if (type === 'circle' || type === 'fraction-circle') {
      let svg = `<svg viewBox="0 0 100 100" class="fraction-svg" style="width:120px; height:120px; display:block; margin:auto;">`;
      
      // Background circle (empty)
      svg += `<circle cx="50" cy="50" r="48" fill="#fff" stroke="#2d3436" stroke-width="3"/>`;
      
      if (numerator > 0) {
        if (numerator === denominator) {
           svg += `<circle cx="50" cy="50" r="48" fill="var(--primary-sage)"/>`;
        } else {
           const angle = (numerator / denominator) * 360;
           const x = 50 + 48 * Math.cos((angle - 90) * Math.PI / 180);
           const y = 50 + 48 * Math.sin((angle - 90) * Math.PI / 180);
           const largeArc = angle > 180 ? 1 : 0;
           svg += `<path d="M50,50 L50,2 A48,48 0 ${largeArc},1 ${x},${y} Z" fill="var(--primary-sage)" />`;
        }
      }
      
      // Draw slice lines
      for(let i = 0; i < denominator; i++) {
        const angle = (i / denominator) * 360;
        const x = 50 + 48 * Math.cos((angle - 90) * Math.PI / 180);
        const y = 50 + 48 * Math.sin((angle - 90) * Math.PI / 180);
        svg += `<line x1="50" y1="50" x2="${x}" y2="${y}" stroke="#2d3436" stroke-width="3"/>`;
      }
      
      svg += `</svg>`;
      return svg;
    } else {
      let cells = '';
      for (let i = 0; i < denominator; i++) {
        cells += `<div class="fraction-cell ${i < numerator ? 'filled' : ''}"></div>`;
      }
      const cols = Math.ceil(Math.sqrt(denominator));
      // By setting background to dark and gap to 2px, we get clear dark grid lines
      return `<div class="fraction-square" style="grid-template-columns: repeat(${cols}, 1fr); background: #2d3436; gap: 3px; padding: 3px;">${cells}</div>`;
    }
  }
};
