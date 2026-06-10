// Game state
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
const QUESTIONS_PER_ROUND = 10;

// DOM elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');

// Show question counts on start screen
function updateQuestionCounts() {
    const easy = QUESTIONS.filter(q => q.difficulty === 'easy').length;
    const medium = QUESTIONS.filter(q => q.difficulty === 'medium').length;
    const hard = QUESTIONS.filter(q => q.difficulty === 'hard').length;
    document.getElementById('question-count').textContent =
        `${QUESTIONS.length} questions available (${easy} easy, ${medium} medium, ${hard} hard)`;
}
updateQuestionCounts();

function startGame(difficulty) {
    let pool;
    if (difficulty === 'all') {
        pool = [...QUESTIONS];
    } else {
        pool = QUESTIONS.filter(q => q.difficulty === difficulty);
    }

    // Shuffle and pick questions for this round
    shuffleArray(pool);
    currentQuestions = pool.slice(0, Math.min(QUESTIONS_PER_ROUND, pool.length));
    currentIndex = 0;
    score = 0;
    answered = false;

    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    document.getElementById('total-questions').textContent = currentQuestions.length;
    document.getElementById('score').textContent = '0';

    showQuestion();
}

function showQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];

    // Update header
    document.getElementById('question-number').textContent = currentIndex + 1;
    document.getElementById('score').textContent = score;

    // Progress bar
    const progress = ((currentIndex) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    // Difficulty badge
    const badge = document.getElementById('difficulty-badge');
    badge.textContent = q.difficulty;
    badge.className = 'difficulty-badge ' + q.difficulty;

    // Category
    document.getElementById('category-tag').textContent = q.category;

    // Question text
    document.getElementById('question-text').textContent = q.question;

    // Options
    const optionsEl = document.getElementById('options');
    optionsEl.replaceChildren();
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.setAttribute('aria-label', `Option ${index + 1}: ${option}`);
        btn.onclick = () => selectAnswer(btn, option, q);
        optionsEl.appendChild(btn);
    });

    // Hide fact and next button
    document.getElementById('fact-box').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
}

function selectAnswer(selectedBtn, selectedAnswer, question) {
    if (answered) return;
    answered = true;

    const isCorrect = String(selectedAnswer) === String(question.answer);
    if (isCorrect) score++;

    // Mark all buttons
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        if (String(btn.textContent) === String(question.answer)) {
            btn.classList.add('correct');
        }
    });

    if (!isCorrect) {
        selectedBtn.classList.add('wrong');
    }

    // Show fact
    if (question.fact) {
        document.getElementById('fact-text').textContent =
            (isCorrect ? '✅ Correct! ' : '❌ Wrong! ') + question.fact;
        document.getElementById('fact-box').classList.remove('hidden');
    }

    // Show next button
    const nextBtn = document.getElementById('next-btn');
    if (currentIndex < currentQuestions.length - 1) {
        nextBtn.textContent = 'Next Question →';
    } else {
        nextBtn.textContent = 'See Results 🏆';
    }
    nextBtn.classList.remove('hidden');

    // Update score display
    document.getElementById('score').textContent = score;
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentQuestions.length) {
        showResults();
    } else {
        showQuestion();
    }
}

function showResults() {
    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    const total = currentQuestions.length;
    const pct = Math.round((score / total) * 100);

    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total').textContent = total;

    // Emoji and title based on score
    let emoji, title, message;
    if (pct === 100) {
        emoji = '🏆'; title = 'Perfect Score!';
        message = 'You\'re a true World Cup expert!';
    } else if (pct >= 80) {
        emoji = '🥇'; title = 'Excellent!';
        message = 'You really know your World Cup history!';
    } else if (pct >= 60) {
        emoji = '🥈'; title = 'Well Done!';
        message = 'Solid knowledge — keep learning!';
    } else if (pct >= 40) {
        emoji = '🥉'; title = 'Not Bad!';
        message = 'Room for improvement — try again?';
    } else {
        emoji = '📚'; title = 'Keep Learning!';
        message = 'The beautiful game has lots to discover!';
    }

    document.getElementById('results-emoji').textContent = emoji;
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-message').textContent = message;

    // Show random insight card
    const insightCard = document.getElementById('insight-card');
    if (typeof INSIGHTS !== 'undefined' && INSIGHTS.length > 0) {
        const insight = INSIGHTS[Math.floor(Math.random() * INSIGHTS.length)];
        document.getElementById('insight-title').textContent = '📊 ' + insight.title;
        document.getElementById('insight-image').src = insight.image;
        document.getElementById('insight-image').alt = insight.title;
        document.getElementById('insight-text').textContent = insight.insight;
        insightCard.classList.remove('hidden');
    } else {
        insightCard.classList.add('hidden');
    }

    // Stats — safe DOM construction (no innerHTML)
    const statsEl = document.getElementById('results-stats');
    statsEl.replaceChildren(
        createStatCard(score, 'Correct'),
        createStatCard(total - score, 'Wrong'),
        createStatCard(`${pct}%`, 'Accuracy')
    );
}

function createStatCard(value, label) {
    const card = document.createElement('div');
    card.className = 'stat-card';
    const valSpan = document.createElement('span');
    valSpan.className = 'stat-value';
    valSpan.textContent = value;
    const labSpan = document.createElement('span');
    labSpan.className = 'stat-label';
    labSpan.textContent = label;
    card.appendChild(valSpan);
    card.appendChild(labSpan);
    return card;
}

function showStart() {
    resultsScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    document.getElementById('data-screen').classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (gameScreen.classList.contains('hidden')) return;

    const key = e.key;
    if (['1', '2', '3', '4'].includes(key) && !answered) {
        const buttons = document.querySelectorAll('.option-btn');
        const idx = parseInt(key) - 1;
        if (buttons[idx]) buttons[idx].click();
    } else if (key === 'Enter' && answered) {
        nextQuestion();
    }
});

// Fisher-Yates shuffle
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Event listeners (no inline handlers)
document.getElementById('btn-easy').addEventListener('click', () => startGame('easy'));
document.getElementById('btn-medium').addEventListener('click', () => startGame('medium'));
document.getElementById('btn-hard').addEventListener('click', () => startGame('hard'));
document.getElementById('btn-all').addEventListener('click', () => startGame('all'));
document.getElementById('btn-home').addEventListener('click', showStart);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('btn-play-again').addEventListener('click', showStart);

// Data analysis screen
function showDataScreen() {
    startScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    dataScreen.classList.remove('hidden');
    renderDataCharts();
}

function renderDataCharts() {
    const container = document.getElementById('data-charts');
    if (container.children.length > 0) return; // already rendered

    if (typeof INSIGHTS === 'undefined' || INSIGHTS.length === 0) {
        const msg = document.createElement('p');
        msg.textContent = 'No data analysis available yet.';
        container.appendChild(msg);
        return;
    }

    INSIGHTS.forEach((insight, index) => {
        const card = document.createElement('div');
        card.className = 'data-card';

        const number = document.createElement('span');
        number.className = 'data-card-number';
        number.textContent = index + 1;

        const title = document.createElement('h3');
        title.textContent = insight.title;

        const img = document.createElement('img');
        img.src = insight.image;
        img.alt = insight.title;
        img.loading = 'lazy';

        const text = document.createElement('p');
        text.textContent = insight.insight;

        card.appendChild(number);
        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(text);
        container.appendChild(card);
    });

    // Host countries table
    if (typeof HOST_COUNTRIES !== 'undefined' && HOST_COUNTRIES.length > 0) {
        const card = document.createElement('div');
        card.className = 'data-card';

        const number = document.createElement('span');
        number.className = 'data-card-number';
        number.textContent = INSIGHTS.length + 1;

        const title = document.createElement('h3');
        title.textContent = '🏟️ World Cup Host Countries';

        const subtitle = document.createElement('p');
        subtitle.className = 'host-table-subtitle';
        const hostWins = HOST_COUNTRIES.filter(h => h.country === h.winner).length;
        subtitle.textContent = `${HOST_COUNTRIES.length} tournaments across ${new Set(HOST_COUNTRIES.map(h => h.country)).size} countries — hosts won ${hostWins} times!`;

        const table = document.createElement('table');
        table.className = 'host-table';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        ['Year', 'Host Country', 'Winner'].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        HOST_COUNTRIES.forEach(entry => {
            const tr = document.createElement('tr');
            if (entry.country === entry.winner) {
                tr.className = 'host-winner';
            }
            [entry.year, entry.country, entry.winner].forEach(val => {
                const td = document.createElement('td');
                td.textContent = val;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        card.appendChild(number);
        card.appendChild(title);
        card.appendChild(subtitle);
        card.appendChild(table);
        container.appendChild(card);
    }
}

const dataScreen = document.getElementById('data-screen');
document.getElementById('btn-data-start').addEventListener('click', showDataScreen);
document.getElementById('btn-data-results').addEventListener('click', showDataScreen);
document.getElementById('btn-data-home').addEventListener('click', showStart);
document.getElementById('btn-data-back').addEventListener('click', showStart);
