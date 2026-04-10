/**
 * Graphiques SVG – Examen National 2013
 * Physique-Chimie · 2ème Bac SP · Maroc
 */

const millimeterGrid = (width, height, xOffset, yOffset) => `
  <defs>
    <pattern id="grid-minor" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--grid-minor)" stroke-width="0.5"/>
    </pattern>
    <pattern id="grid-major" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="url(#grid-minor)"/>
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--grid-major)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="${xOffset}" y="${yOffset}" width="${width}" height="${height}" fill="url(#grid-major)" stroke="var(--grid-border)" stroke-width="1"/>
`;

const GRAPHS = {
  'graph-rc': () => {
    let points = [];
    for(let t = 0; t <= 5; t += 0.05) {
      let u = 6 * (1 - Math.exp(-t / 1.0));
      let x = 50 + t * 100;
      let y = 320 - u * 50;
      points.push(`${x},${y}`);
    }
    return `
      <div style="padding:16px; background: var(--surface); border-radius: 8px;">
        <p style="font-size:0.9rem;font-weight:600;color:var(--text);margin-bottom:12px;text-align:center;">
          Figure 1 : Évolution de la tension u<sub>C</sub>(t)
        </p>
        <svg viewBox="0 0 600 360" style="width:100%;height:auto;font-family:'Inter',sans-serif;">
          ${millimeterGrid(500, 300, 50, 20)}
          <line x1="50" y1="320" x2="570" y2="320" stroke="var(--text)" stroke-width="2" marker-end="url(#arrow)"/>
          <line x1="50" y1="320" x2="50" y2="10" stroke="var(--text)" stroke-width="2" marker-end="url(#arrow)"/>
          <polyline points="${points.join(' ')}" fill="none" stroke="var(--nuclear)" stroke-width="2.5" stroke-linejoin="round"/>
          ${[0,1,2,3,4,5].map(t => `
            <text x="${50 + t*100}" y="338" font-size="12" fill="var(--text)" text-anchor="middle">${t}</text>
            <line x1="${50 + t*100}" y1="320" x2="${50 + t*100}" y2="325" stroke="var(--text)" stroke-width="2"/>
          `).join('')}
          <text x="570" y="340" font-size="12" font-weight="bold" fill="var(--text)">t (ms)</text>
          ${[0,1,2,3,4,5,6].map(v => `
            <text x="40" y="${320 - v*50 + 4}" font-size="12" fill="var(--text)" text-anchor="end">${v}</text>
            <line x1="45" y1="${320 - v*50}" x2="50" y2="${320 - v*50}" stroke="var(--text)" stroke-width="2"/>
          `).join('')}
          <text x="25" y="20" font-size="12" font-weight="bold" fill="var(--text)">uC (V)</text>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text)"/>
            </marker>
          </defs>
        </svg>
      </div>
    `;
  },
  
  'graph-rlc2013': () => {
    let points = [];
    for(let t = 0; t <= 8; t += 0.02) {
      let u = 6 * Math.exp(-t / 20) * Math.cos(2 * Math.PI * t / 2.0);
      let x = 50 + t * 60;
      let y = 170 - u * 25;
      points.push(`${x},${y}`);
    }
    return `
      <div style="padding:16px; background: var(--surface); border-radius: 8px;">
        <p style="font-size:0.9rem;font-weight:600;color:var(--text);margin-bottom:12px;text-align:center;">
          Figure 2 : Oscillations de la tension u<sub>C</sub>(t)
        </p>
        <svg viewBox="0 0 600 340" style="width:100%;height:auto;font-family:'Inter',sans-serif;">
          ${millimeterGrid(480, 300, 50, 20)}
          <line x1="50" y1="170" x2="550" y2="170" stroke="var(--text)" stroke-width="2" marker-end="url(#arrow)"/>
          <line x1="50" y1="320" x2="50" y2="10" stroke="var(--text)" stroke-width="2" marker-end="url(#arrow)"/>
          <polyline points="${points.join(' ')}" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linejoin="round"/>
          ${[0,1,2,3,4,5,6,7,8].map(t => `
            <text x="${50 + t*60}" y="188" font-size="12" fill="var(--text)" text-anchor="middle">${t}</text>
            <line x1="${50 + t*60}" y1="165" x2="${50 + t*60}" y2="175" stroke="var(--text)" stroke-width="2"/>
          `).join('')}
          <text x="560" y="185" font-size="12" font-weight="bold" fill="var(--text)">t (ms)</text>
          ${[-6,-4,-2,2,4,6].map(v => `
            <text x="40" y="${170 - v*25 + 4}" font-size="12" fill="var(--text)" text-anchor="end">${v}</text>
            <line x1="45" y1="${170 - v*25}" x2="50" y2="${170 - v*25}" stroke="var(--text)" stroke-width="2"/>
          `).join('')}
          <text x="25" y="20" font-size="12" font-weight="bold" fill="var(--text)">uC (V)</text>
        </svg>
      </div>
    `;
  },

  'graph-meca': () => {
    let points = [];
    for(let t = 0; t <= 1.5; t += 0.02) {
      let v = t <= 0.6826 ? 4.0 - 5.86 * t : 4.14 * (t - 0.6826);
      let x = 50 + t * 300;
      let y = 270 - v * 60;
      points.push(`${x},${y}`);
    }
    return `
      <div style="padding:16px; background: var(--surface); border-radius: 8px;">
        <p style="font-size:0.9rem;font-weight:600;color:var(--text);margin-bottom:12px;text-align:center;">
          Figure 3 : Évolution de la vitesse v(t) du centre d'inertie G
        </p>
        <svg viewBox="0 0 550 320" style="width:100%;height:auto;font-family:'Inter',sans-serif;">
          ${millimeterGrid(450, 250, 50, 20)}
          <line x1="50" y1="270" x2="520" y2="270" stroke="var(--text)" stroke-width="2" marker-end="url(#arrow)"/>
          <line x1="50" y1="270" x2="50" y2="10" stroke="var(--text)" stroke-width="2" marker-end="url(#arrow)"/>
          <polyline points="${points.join(' ')}" fill="none" stroke="var(--chimie)" stroke-width="2.5" stroke-linejoin="round"/>
          ${[0, 0.5, 1.0, 1.5].map(t => `
            <text x="${50 + t*300}" y="288" font-size="12" fill="var(--text)" text-anchor="middle">${t.toFixed(1)}</text>
            <line x1="${50 + t*300}" y1="270" x2="${50 + t*300}" y2="275" stroke="var(--text)" stroke-width="2"/>
          `).join('')}
          <text x="530" y="285" font-size="12" font-weight="bold" fill="var(--text)">t (s)</text>
          ${[0,1,2,3,4].map(v => `
            <text x="40" y="${270 - v*60 + 4}" font-size="12" fill="var(--text)" text-anchor="end">${v}</text>
            <line x1="45" y1="${270 - v*60}" x2="50" y2="${270 - v*60}" stroke="var(--text)" stroke-width="2"/>
          `).join('')}
          <text x="25" y="20" font-size="12" font-weight="bold" fill="var(--text)">v (m/s)</text>
        </svg>
      </div>
    `;
  },

  'schema-electrolysis': () => `
    <div style="padding:16px; background: var(--surface); border-radius: 8px; text-align: center;">
      <svg viewBox="0 0 400 250" style="width:100%; max-width: 400px; height:auto; font-family:'Inter',sans-serif;">
        <path d="M 100 80 L 100 220 A 10 10 0 0 0 110 230 L 290 230 A 10 10 0 0 0 300 220 L 300 80" fill="none" stroke="var(--text-muted)" stroke-width="3"/>
        <path d="M 102 120 L 102 220 A 8 8 0 0 0 110 228 L 290 228 A 8 8 0 0 0 298 220 L 298 120 Z" fill="var(--ondes-light)" opacity="0.7"/>
        <line x1="102" y1="120" x2="298" y2="120" stroke="var(--ondes)" stroke-width="2" stroke-dasharray="8,4"/>
        <rect x="140" y="90" width="20" height="120" fill="var(--text-muted)" stroke="var(--text)" stroke-width="2"/>
        <rect x="240" y="90" width="20" height="120" fill="var(--border)" stroke="var(--text)" stroke-width="2"/>
        <text x="150" y="225" font-size="12" fill="var(--surface)" text-anchor="middle" font-weight="bold">A</text>
        <text x="250" y="225" font-size="12" fill="var(--text)" text-anchor="middle" font-weight="bold">C</text>
        <text x="200" y="180" font-size="14" fill="var(--primary-dark)" text-anchor="middle">Sn²⁺(aq) + 2Cl⁻(aq)</text>
        <line x1="150" y1="90" x2="150" y2="40" stroke="var(--text)" stroke-width="2"/>
        <line x1="150" y1="40" x2="180" y2="40" stroke="var(--text)" stroke-width="2"/>
        <line x1="250" y1="90" x2="250" y2="40" stroke="var(--text)" stroke-width="2"/>
        <line x1="250" y1="40" x2="220" y2="40" stroke="var(--text)" stroke-width="2"/>
        <circle cx="200" cy="40" r="20" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/>
        <text x="200" y="45" font-size="14" fill="var(--text)" text-anchor="middle" font-weight="bold">G</text>
        <text x="170" y="30" font-size="16" fill="var(--nuclear)" font-weight="bold">+</text>
        <text x="230" y="30" font-size="16" fill="var(--primary)" font-weight="bold">−</text>
      </svg>
    </div>
  `,

  'schema-rc': () => `
    <div style="padding:16px; background: var(--surface); border-radius: 8px; text-align: center;">
      <svg viewBox="0 0 400 200" style="width:100%; max-width: 400px; height:auto; font-family:'Inter',sans-serif;">
        <line x1="80" y1="150" x2="320" y2="150" stroke="var(--text)" stroke-width="2"/>
        <line x1="80" y1="150" x2="80" y2="50" stroke="var(--text)" stroke-width="2"/>
        <line x1="320" y1="150" x2="320" y2="50" stroke="var(--text)" stroke-width="2"/>
        <line x1="80" y1="50" x2="130" y2="50" stroke="var(--text)" stroke-width="2"/>
        <line x1="170" y1="50" x2="320" y2="50" stroke="var(--text)" stroke-width="2"/>
        <circle cx="80" cy="100" r="15" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/>
        <text x="80" y="105" font-size="14" fill="var(--text)" text-anchor="middle" font-weight="bold">E</text>
        <line x1="80" y1="70" x2="80" y2="85" stroke="var(--text)" stroke-width="2"/>
        <line x1="80" y1="115" x2="80" y2="130" stroke="var(--text)" stroke-width="2"/>
        <text x="60" y="80" font-size="14" fill="var(--text)">+</text>
        <circle cx="130" cy="50" r="3" fill="var(--text)"/>
        <circle cx="170" cy="50" r="3" fill="var(--text)"/>
        <line x1="130" y1="50" x2="165" y2="35" stroke="var(--text)" stroke-width="2"/>
        <text x="145" y="30" font-size="14" fill="var(--text)" font-weight="bold">K</text>
        <rect x="220" y="40" width="50" height="20" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/>
        <text x="245" y="55" font-size="14" fill="var(--text)" text-anchor="middle" font-weight="bold">R</text>
        <line x1="305" y1="95" x2="335" y2="95" stroke="var(--text)" stroke-width="3"/>
        <line x1="305" y1="105" x2="335" y2="105" stroke="var(--text)" stroke-width="3"/>
        <line x1="320" y1="50" x2="320" y2="95" stroke="var(--text)" stroke-width="2"/>
        <line x1="320" y1="105" x2="320" y2="150" stroke="var(--text)" stroke-width="2"/>
        <text x="345" y="105" font-size="14" fill="var(--text)" font-weight="bold">C</text>
      </svg>
    </div>
  `,

  'schema-rlc': () => `
    <div style="padding:16px; background: var(--surface); border-radius: 8px; text-align: center;">
      <svg viewBox="0 0 400 200" style="width:100%; max-width: 400px; height:auto; font-family:'Inter',sans-serif;">
        <line x1="100" y1="150" x2="300" y2="150" stroke="var(--text)" stroke-width="2"/>
        <line x1="100" y1="150" x2="100" y2="50" stroke="var(--text)" stroke-width="2"/>
        <line x1="300" y1="150" x2="300" y2="50" stroke="var(--text)" stroke-width="2"/>
        <line x1="100" y1="50" x2="140" y2="50" stroke="var(--text)" stroke-width="2"/>
        <line x1="180" y1="50" x2="300" y2="50" stroke="var(--text)" stroke-width="2"/>
        <line x1="85" y1="95" x2="115" y2="95" stroke="var(--text)" stroke-width="3"/>
        <line x1="85" y1="105" x2="115" y2="105" stroke="var(--text)" stroke-width="3"/>
        <line x1="100" y1="50" x2="100" y2="95" stroke="var(--text)" stroke-width="2"/>
        <line x1="100" y1="105" x2="100" y2="150" stroke="var(--text)" stroke-width="2"/>
        <text x="70" y="105" font-size="14" fill="var(--text)" font-weight="bold">C</text>
        <circle cx="140" cy="50" r="3" fill="var(--text)"/>
        <circle cx="180" cy="50" r="3" fill="var(--text)"/>
        <line x1="140" y1="50" x2="175" y2="35" stroke="var(--text)" stroke-width="2"/>
        <text x="160" y="30" font-size="14" fill="var(--text)" font-weight="bold">K</text>
        <path d="M 220 50 Q 225 30 230 50 T 240 50 T 250 50 T 260 50" fill="none" stroke="var(--text)" stroke-width="2"/>
        <text x="240" y="35" font-size="14" fill="var(--text)" text-anchor="middle" font-weight="bold">(L, r)</text>
      </svg>
    </div>
  `,

  'schema-am-receiver': () => `
    <div style="padding:16px; background: var(--surface); border-radius: 8px; text-align: center;">
      <svg viewBox="0 0 400 200" style="width:100%; max-width: 400px; height:auto; font-family:'Inter',sans-serif;">
        <line x1="80" y1="40" x2="80" y2="160" stroke="var(--text)" stroke-width="2"/>
        <path d="M 80 40 L 60 20 M 80 40 L 80 10 M 80 40 L 100 20" fill="none" stroke="var(--text)" stroke-width="2"/>
        <line x1="60" y1="160" x2="100" y2="160" stroke="var(--text)" stroke-width="2"/>
        <line x1="70" y1="165" x2="90" y2="165" stroke="var(--text)" stroke-width="2"/>
        <line x1="75" y1="170" x2="85" y2="170" stroke="var(--text)" stroke-width="2"/>
        <path d="M 80 80 Q 100 85 80 90 T 80 100 T 80 110 T 80 120" fill="none" stroke="var(--text)" stroke-width="2"/>
        <text x="60" y="105" font-size="14" fill="var(--text)" font-weight="bold">L</text>
        <line x1="80" y1="60" x2="160" y2="60" stroke="var(--text)" stroke-width="2"/>
        <line x1="80" y1="140" x2="160" y2="140" stroke="var(--text)" stroke-width="2"/>
        <line x1="160" y1="60" x2="160" y2="95" stroke="var(--text)" stroke-width="2"/>
        <line x1="160" y1="105" x2="160" y2="140" stroke="var(--text)" stroke-width="2"/>
        <line x1="145" y1="95" x2="175" y2="95" stroke="var(--text)" stroke-width="3"/>
        <line x1="145" y1="105" x2="175" y2="105" stroke="var(--text)" stroke-width="3"/>
        <line x1="140" y1="115" x2="180" y2="85" stroke="var(--text)" stroke-width="1.5" marker-end="url(#arrow)"/>
        <text x="185" y="105" font-size="14" fill="var(--text)" font-weight="bold">C</text>
        <line x1="160" y1="60" x2="220" y2="60" stroke="var(--text)" stroke-width="2"/>
        <line x1="160" y1="140" x2="220" y2="140" stroke="var(--text)" stroke-width="2"/>
        <circle cx="220" cy="60" r="3" fill="var(--text)"/>
        <circle cx="220" cy="140" r="3" fill="var(--text)"/>
        <text x="235" y="105" font-size="12" fill="var(--text)">Vers démodulateur</text>
      </svg>
    </div>
  `,

  'graph-diffraction': () => `
    <div style="padding:16px; background: var(--surface); border-radius: 8px; text-align: center;">
      <svg viewBox="0 0 500 200" style="width:100%; max-width: 500px; height:auto; font-family:'Inter',sans-serif;">
        <rect x="20" y="85" width="60" height="30" fill="var(--nuclear)" rx="4"/>
        <text x="50" y="105" font-size="12" fill="var(--surface)" text-anchor="middle" font-weight="bold">LASER</text>
        <line x1="80" y1="100" x2="200" y2="100" stroke="var(--nuclear)" stroke-width="2"/>
        <rect x="200" y="60" width="4" height="80" fill="var(--text)"/>
        <text x="202" y="50" font-size="12" fill="var(--text)" text-anchor="middle">Cheveu (a)</text>
        <path d="M 204 100 L 400 60 L 400 140 Z" fill="var(--nuclear-light)" opacity="0.5"/>
        <line x1="204" y1="100" x2="400" y2="100" stroke="var(--nuclear)" stroke-width="1" stroke-dasharray="4,2"/>
        <line x1="204" y1="100" x2="400" y2="60" stroke="var(--nuclear)" stroke-width="1"/>
        <line x1="204" y1="100" x2="400" y2="140" stroke="var(--nuclear)" stroke-width="1"/>
        <rect x="400" y="20" width="10" height="160" fill="var(--border)" rx="2"/>
        <text x="405" y="15" font-size="12" fill="var(--text)" text-anchor="middle">Écran</text>
        <rect x="410" y="70" width="10" height="60" fill="var(--nuclear)" rx="2"/>
        <line x1="430" y1="70" x2="430" y2="130" stroke="var(--text)" stroke-width="1"/>
        <line x1="425" y1="70" x2="435" y2="70" stroke="var(--text)" stroke-width="1"/>
        <line x1="425" y1="130" x2="435" y2="130" stroke="var(--text)" stroke-width="1"/>
        <text x="445" y="105" font-size="12" fill="var(--text)" text-anchor="middle">L</text>
        <line x1="200" y1="180" x2="400" y2="180" stroke="var(--text)" stroke-width="1"/>
        <line x1="200" y1="175" x2="200" y2="185" stroke="var(--text)" stroke-width="1"/>
        <line x1="400" y1="175" x2="400" y2="185" stroke="var(--text)" stroke-width="1"/>
        <text x="300" y="195" font-size="12" fill="var(--text)" text-anchor="middle">D</text>
      </svg>
    </div>
  `
};

function getGraph(graphId) {
  if (GRAPHS[graphId]) return GRAPHS[graphId]();
  return '';
}
