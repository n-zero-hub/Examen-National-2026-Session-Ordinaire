/**
 * QCM Examen National 2013 – Physique-Chimie SP Maroc
 * Logique applicative : navigation, score, correction, export
 */

const state = {
  currentQ: 0,
  answers: new Array(40).fill(null),
  started: false,
  finished: false,
  startTime: null,
  timerInterval: null
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  buildQuestionGrid();
  window.addEventListener('scroll', handleScroll);
  createBackTopButton();
});

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeToSet = savedTheme || 'dark'; // Web3 defaults to dark
  document.documentElement.setAttribute('data-theme', themeToSet);
  updateThemeIcon(themeToSet);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

function startExam() {
  state.started = true;
  state.startTime = Date.now();
  showScreen('screen-exam');
  renderQuestion(0);
  updateProgress();
  startTimer();
  document.getElementById('timer-widget').style.display = 'flex';
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startTimer() {
  state.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    const m = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const s = (elapsed % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').textContent = `${m}:${s}`;
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
}

function buildQuestionGrid() {
  const grid = document.getElementById('q-grid');
  grid.innerHTML = '';
  let lastSection = '';

  QUESTIONS.forEach((q, i) => {
    if (q.section !== lastSection) {
      const label = document.createElement('div');
      label.className = 'q-section-label';
      label.textContent = q.section === 'chimie' ? '⚗️ Chimie (1–14)' : '⚡ Physique (15–40)';
      grid.appendChild(label);
      lastSection = q.section;
    }
    const dot = document.createElement('button');
    dot.className = `q-dot${q.section === 'physique' ? ' physique-dot' : ''}`;
    dot.id = `dot-${i}`;
    dot.textContent = i + 1;
    dot.title = `Q${i + 1} – ${q.subsection}`;
    dot.onclick = () => goToQuestion(i);
    grid.appendChild(dot);
  });
}

function updateGrid() {
  QUESTIONS.forEach((_, i) => {
    const dot = document.getElementById(`dot-${i}`);
    if (!dot) return;
    dot.classList.remove('current', 'answered');
    if (i === state.currentQ) {
      dot.classList.add('current');
      // Auto-scroll the active dot into view for mobile horizontal scrolling
      dot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    else if (state.answers[i] !== null) dot.classList.add('answered');
  });
}

function renderQuestion(index) {
  state.currentQ = index;
  const q = QUESTIONS[index];
  const card = document.getElementById('question-card');
  let html = '';

  html += `<div class="q-header">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <span class="q-badge badge-${q.badge}">${q.badgeLabel}</span>
      ${q.subsection ? `<span style="font-size:0.78rem;color:var(--text-muted);">${q.subsection}</span>` : ''}
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <span class="q-number">Question ${index + 1} / 40</span>
      <span class="q-points">0,5 pt</span>
    </div>
  </div>`;

  if (q.context) {
    html += `<div class="q-context">${q.context}</div>`;
  }

  if (q.schemaSvg) {
    html += `<div class="q-graph schema-graph">${getGraph(q.schemaSvg)}</div>
             <div class="q-graph-hint"><i class="fas fa-arrows-alt-h"></i> Glissez pour voir le schéma complet</div>`;
  }

  if (q.graphSvg) {
    html += `<div class="q-graph">${getGraph(q.graphSvg)}</div>
             <div class="q-graph-hint"><i class="fas fa-arrows-alt-h"></i> Glissez pour explorer le graphique</div>`;
  }

  if (q.tableHtml) {
    html += `<div class="q-table">${q.tableHtml}</div>`;
  }

  html += `<div class="q-body">`;
  if (q.given) {
    html += `<div class="q-given"><strong><i class="fas fa-database" style="margin-right:5px;"></i>Données :</strong> ${q.given}</div>`;
  }
  html += `<p class="q-text">${q.question}</p>`;
  html += `</div>`;

  html += `<div class="q-options">`;
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const isSelected = state.answers[index] === i;
    html += `<button class="option-btn ${isSelected ? 'selected' : ''}"
              onclick="selectOption(${i})" data-opt="${i}">
      <span class="opt-letter">${letters[i]}</span>
      <span class="opt-text">${opt}</span>
    </button>`;
  });
  html += `</div>`;

  card.innerHTML = html;

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  btnPrev.disabled = index === 0;

  if (index === 39) {
    btnNext.innerHTML = '<i class="fas fa-flag-checkered"></i> Terminer';
    btnNext.onclick = confirmFinish;
    btnNext.disabled = false;
  } else {
    btnNext.innerHTML = 'Suivant <i class="fas fa-chevron-right"></i>';
    btnNext.onclick = nextQuestion;
    btnNext.disabled = false;
  }

  updateGrid();
  updateSectionBadges();
  updateProgress();
  updateSectionTabs();
}

function selectOption(optIndex) {
  state.answers[state.currentQ] = optIndex;

  document.querySelectorAll('.option-btn').forEach(btn => {
    const i = parseInt(btn.dataset.opt);
    const isSelected = i === optIndex;
    btn.classList.toggle('selected', isSelected);
    const letter = btn.querySelector('.opt-letter');
    if (isSelected) {
      letter.style.background = 'var(--primary)';
      letter.style.color = '#fff';
      letter.style.borderColor = 'var(--primary)';
    } else {
      letter.style.background = '';
      letter.style.color = '';
      letter.style.borderColor = '';
    }
  });

  updateGrid();
  updateSectionBadges();
  updateProgress();
}

function nextQuestion() {
  if (state.currentQ < 39) renderQuestion(state.currentQ + 1);
}

function prevQuestion() {
  if (state.currentQ > 0) renderQuestion(state.currentQ - 1);
}

function goToQuestion(i) {
  renderQuestion(i);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToSection(section) {
  const idx = QUESTIONS.findIndex(q => q.section === section);
  if (idx !== -1) goToQuestion(idx);
  updateSectionTabs(section);
}

function updateSectionTabs(active) {
  const cur = active || QUESTIONS[state.currentQ]?.section;
  document.getElementById('tab-chimie').classList.toggle('active', cur === 'chimie');
  document.getElementById('tab-physique').classList.toggle('active', cur === 'physique');
}

function updateProgress() {
  const answered = state.answers.filter(a => a !== null).length;
  const pct = (answered / 40) * 100;
  document.getElementById('main-progress').style.width = pct + '%';
  document.getElementById('progress-label').textContent = `${answered} / 40`;
}

function updateSectionBadges() {
  const chDone = QUESTIONS.slice(0, 14).filter((_, i) => state.answers[i] !== null).length;
  const phDone = QUESTIONS.slice(14).filter((_, i) => state.answers[i + 14] !== null).length;
  document.getElementById('chimie-done').textContent = `${chDone}/14`;
  document.getElementById('physique-done').textContent = `${phDone}/26`;
}

function confirmFinish() {
  const unanswered = state.answers.filter(a => a === null).length;
  const msg = unanswered > 0
    ? `⚠️ Vous avez <strong>${unanswered} question(s) sans réponse</strong>. Confirmer la soumission ?`
    : `Vous avez répondu à toutes les questions. Confirmer ?`;
  document.getElementById('modal-msg').innerHTML = msg;
  document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

function finishExam() {
  closeModal();
  stopTimer();
  state.finished = true;
  computeAndShowResults();
}

function computeAndShowResults() {
  let correct = 0, wrong = 0, skip = 0;
  let chimieCorrect = 0, physiqueCorrect = 0;

  QUESTIONS.forEach((q, i) => {
    const ans = state.answers[i];
    if (ans === null) { skip++; }
    else if (ans === q.correct) {
      correct++;
      if (q.section === 'chimie') chimieCorrect++;
      else physiqueCorrect++;
    } else { wrong++; }
  });

  const score = (correct * 0.5).toFixed(1);
  const scoreNum = parseFloat(score);
  const chimieScore = (chimieCorrect * 0.5).toFixed(1);
  const physScore = (physiqueCorrect * 0.5).toFixed(1);

  showScreen('screen-results');
  document.getElementById('timer-widget').style.display = 'none';

  document.getElementById('score-num').textContent = score;

  const arc = document.getElementById('score-arc');
  const offset = 339.3 - (scoreNum / 20) * 339.3;
  setTimeout(() => {
    arc.style.transition = 'stroke-dashoffset 1.2s ease';
    arc.style.strokeDashoffset = offset;
  }, 200);

  const icon = document.getElementById('results-icon');
  icon.className = 'results-icon';
  if (scoreNum >= 16) {
    icon.innerHTML = '<i class="fas fa-star"></i>'; icon.classList.add('excellent');
  } else if (scoreNum >= 12) {
    icon.innerHTML = '<i class="fas fa-trophy"></i>'; icon.classList.add('good');
  } else if (scoreNum >= 8) {
    icon.innerHTML = '<i class="fas fa-thumbs-up"></i>'; icon.classList.add('average');
  } else {
    icon.innerHTML = '<i class="fas fa-book"></i>'; icon.classList.add('low');
  }

  const mention = getMention(scoreNum);
  document.getElementById('score-details').innerHTML = `
    <div class="score-detail-card">
      <div class="label">Score global</div>
      <div class="value" style="color:var(--primary);">${score} / 20</div>
    </div>
    <div class="score-detail-card">
      <div class="label">⚗️ Chimie</div>
      <div class="value correct-count">${chimieScore} / 7</div>
    </div>
    <div class="score-detail-card">
      <div class="label">⚡ Physique</div>
      <div class="value correct-count">${physScore} / 13</div>
    </div>
    <div class="score-detail-card">
      <div class="label">Bonnes réponses</div>
      <div class="value correct-count">${correct} / 40</div>
    </div>
    <div class="score-detail-card">
      <div class="label">Mauvaises</div>
      <div class="value wrong-count">${wrong}</div>
    </div>
    <div class="score-detail-card">
      <div class="label">Non répondues</div>
      <div class="value skip-count">${skip}</div>
    </div>
    <div class="score-detail-card" style="grid-column:1/-1;">
      <div class="label">Mention</div>
      <div class="value" style="color:${mention.color};font-size:1rem;">${mention.label}</div>
    </div>
  `;
}

function getMention(score) {
  if (score >= 18) return { label: '✨ Excellent',       color: '#ca8a04' };
  if (score >= 16) return { label: '🏆 Très bien',       color: '#059669' };
  if (score >= 14) return { label: '👍 Bien',            color: '#0891b2' };
  if (score >= 12) return { label: '📚 Assez bien',      color: '#7c3aed' };
  if (score >= 10) return { label: '📖 Passable',        color: '#d97706' };
  return             { label: '📝 À retravailler',       color: '#dc2626' };
}

function showCorrection() {
  const section = document.getElementById('correction-section');
  section.style.display = 'block';
  const content = document.getElementById('correction-content');
  const letters = ['A', 'B', 'C', 'D'];

  const subsections = {};
  QUESTIONS.forEach((q, i) => {
    if (!subsections[q.subsection]) subsections[q.subsection] = { section: q.section, qs: [] };
    subsections[q.subsection].qs.push({ q, i });
  });

  let html = '';
  let lastSection = '';

  QUESTIONS.forEach((q, i) => {
    const userAns = state.answers[i];
    const isCorrect = userAns === q.correct;
    const isSkipped = userAns === null;

    if (q.section !== lastSection) {
      const label = q.section === 'chimie'
        ? '<i class="fas fa-flask"></i> CHIMIE — Exercice 1'
        : '<i class="fas fa-atom"></i> PHYSIQUE';
      html += `<div class="corr-section-title corr-${q.section}">${label}</div>`;
      lastSection = q.section;
    }

    if (i === 0 || QUESTIONS[i - 1].subsection !== q.subsection) {
      html += `<div class="corr-subsection">
        <span class="q-badge badge-${q.badge}" style="font-size:0.8rem;padding:4px 14px;">${q.subsection}</span>
      </div>`;
    }

    const statusClass = isSkipped ? 'status-skip' : (isCorrect ? 'status-correct' : 'status-wrong');
    const statusIcon  = isSkipped ? 'fa-minus'    : (isCorrect ? 'fa-check'       : 'fa-times');

    html += `<div class="corr-item">
      <div class="corr-item-header">
        <div class="corr-status-icon ${statusClass}">
          <i class="fas ${statusIcon}"></i>
        </div>
        <p class="corr-q-text">
          <span class="corr-q-num">Q${i + 1}.</span> ${q.question}
        </p>
      </div>
      <div class="corr-answers">`;

    q.options.forEach((opt, oi) => {
      let cls = '';
      if (oi === q.correct) cls = 'correct-ans';
      else if (oi === userAns && !isCorrect) cls = 'wrong-ans';

      if (oi === q.correct || oi === userAns) {
        const tag = oi === q.correct
          ? `<span style="margin-left:auto;font-size:0.78rem;"><i class="fas fa-check"></i> Bonne réponse</span>`
          : `<span style="margin-left:auto;font-size:0.78rem;"><i class="fas fa-times"></i> Votre réponse</span>`;

        html += `<div class="corr-answer ${cls}">
          <strong>${letters[oi]}.</strong>
          <span>${opt}</span>
          ${tag}
        </div>`;
      }
    });

    html += `</div>`;

    if (q.explanation) {
      html += `<div class="corr-explanation">
        <strong><i class="fas fa-lightbulb"></i> Explication :</strong> ${q.explanation}
      </div>`;
    }
    html += `</div>`;
  });

  content.innerHTML = html;
  section.scrollIntoView({ behavior: 'smooth' });
}

function retryExam() {
  state.answers.fill(null);
  state.currentQ = 0;
  state.finished = false;
  state.started = false;
  stopTimer();
  document.getElementById('timer-display').textContent = '00:00';
  document.getElementById('correction-section').style.display = 'none';
  const arc = document.getElementById('score-arc');
  arc.style.transition = 'none';
  arc.style.strokeDashoffset = '339.3';
  buildQuestionGrid();
  showScreen('screen-landing');
}

function exportJSON() {
  const data = {
    timestamp: new Date().toISOString(),
    score: document.getElementById('score-num').textContent + '/20',
    answers: state.answers.map((ans, i) => ({
      questionId: i + 1,
      userAnswer: ans !== null ? String.fromCharCode(65 + ans) : 'Skipped',
      correctAnswer: String.fromCharCode(65 + QUESTIONS[i].correct),
      isCorrect: ans === QUESTIONS[i].correct
    }))
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `resultats_physique_chimie_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportCSV() {
  let csv = 'Question,Votre Reponse,Bonne Reponse,Correct\n';
  state.answers.forEach((ans, i) => {
    const userAns = ans !== null ? String.fromCharCode(65 + ans) : 'Skipped';
    const correctAns = String.fromCharCode(65 + QUESTIONS[i].correct);
    const isCorrect = ans === QUESTIONS[i].correct ? 'Oui' : 'Non';
    csv += `${i + 1},${userAns},${correctAns},${isCorrect}\n`;
  });
  csv += `\nScore,${document.getElementById('score-num').textContent}/20\n`;
  csv += `Date,${new Date().toLocaleString()}\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `resultats_physique_chimie_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function createBackTopButton() {
  const btn = document.createElement('button');
  btn.className = 'back-top';
  btn.id = 'back-top';
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.title = 'Retour en haut';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);
}

function handleScroll() {
  const btn = document.getElementById('back-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
