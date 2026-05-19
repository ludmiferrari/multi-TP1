// POOL DE DISTRACTORES — vietnam 1955–1975
// Ocupación americana:  Movimiento Hippie; Woodstock Alunizaje (1969)

const POPUP_POOL = [
    {
        title: "Woodstock 1969",
        html: `
            <div class="popup-img-placeholder">
                <img src="imgs/vietnam/woodstock-1969.jpg" alt="Woodstock Music Festival 1969">
            </div>
            <div class="popup-marquee"><span>★ 3 DAYS OF PEACE & MUSIC ★ WOODSTOCK FESTIVAL ★ ALTERNATIVE CULTURE ★</span></div>
            <p>The counterculture movement reaches its peak.<br><span class="blink">Live from White Lake, New York</span></p>
        `
    },
    {
        title: "Woodstock 1969",
        html: `
            <div class="popup-img-placeholder">
                <img src="imgs/vietnam/woodstock-1969.jpg" alt="Woodstock Music Festival 1969">
            </div>
            <div class="popup-marquee"><span>★ 3 DAYS OF PEACE & MUSIC ★ WOODSTOCK FESTIVAL ★ ALTERNATIVE CULTURE ★</span></div>
            <p>The counterculture movement reaches its peak.<br><span class="blink">Live from White Lake, New York</span></p>
        `
    },
    {
        title: "Woodstock 1969",
        html: `
            <div class="popup-img-placeholder">
                <img src="imgs/vietnam/woodstock-1969.jpg" alt="Woodstock Music Festival 1969">
            </div>
            <div class="popup-marquee"><span>★ 3 DAYS OF PEACE & MUSIC ★ WOODSTOCK FESTIVAL ★ ALTERNATIVE CULTURE ★</span></div>
            <p>The counterculture movement reaches its peak.<br><span class="blink">Live from White Lake, New York</span></p>
        `
    },
    {
        title: "Woodstock 1969",
        html: `
            <div class="popup-img-placeholder">
                <img src="imgs/vietnam/woodstock-1969.jpg" alt="Woodstock Music Festival 1969">
            </div>
            <div class="popup-marquee"><span>★ 3 DAYS OF PEACE & MUSIC ★ WOODSTOCK FESTIVAL ★ ALTERNATIVE CULTURE ★</span></div>
            <p>The counterculture movement reaches its peak.<br><span class="blink">Live from White Lake, New York</span></p>
        `
    },
    {
        title: "Woodstock 1969",
        html: `
            <div class="popup-img-placeholder">
                <img src="imgs/vietnam/woodstock-1969.jpg" alt="Woodstock Music Festival 1969">
            </div>
            <div class="popup-marquee"><span>★ 3 DAYS OF PEACE & MUSIC ★ WOODSTOCK FESTIVAL ★ ALTERNATIVE CULTURE ★</span></div>
            <p>The counterculture movement reaches its peak.<br><span class="blink">Live from White Lake, New York</span></p>
        `
    },
    {
        title: "Woodstock 1969",
        html: `
            <div class="popup-img-placeholder">
                <img src="imgs/vietnam/woodstock-1969.jpg" alt="Woodstock Music Festival 1969">
            </div>
            <div class="popup-marquee"><span>★ 3 DAYS OF PEACE & MUSIC ★ WOODSTOCK FESTIVAL ★ ALTERNATIVE CULTURE ★</span></div>
            <p>The counterculture movement reaches its peak.<br><span class="blink">Live from White Lake, New York</span></p>
        `
    },
    
];

// Países para redirect random (excluyendo japon)
const PAISES = ['argentina', 'corea', 'alemania', 'grecia', 'iran', 'guatemala',
    'cuba', 'libano', 'siria', 'venezuela', 'granada', 'pakistan', 'irak',
    'afganistan', 'panama', 'china', 'libia', 'somalia', 'kuwait',
    'republica-dominicana', 'vietnam', 'cambodia', 'laos', 'haiti', 'yemen',
    'yugoslavia', 'kosovo', 'chile'];

function randomPais() {
    return PAISES[Math.floor(Math.random() * PAISES.length)];
}

function redirectRandom() {
    const pais = randomPais();
    if (document.startViewTransition) {
        document.startViewTransition(() => { window.location.href = `${pais}.html`; });
    } else {
        window.location.href = `${pais}.html`;
    }
}

let activePopups = [];
let translationInterval = null;
let currentRowLabel = '';

// ── TRANSLATION SCREEN ────────────────────────────────────────────

const JAPANESE_PHRASES = ['占領期間', '検閲', '原子爆弾', '降伏文書', '連合国軍', '秘密文書'];
const LOG_MESSAGES = [
    '— Loading character set...',
    '— Detecting document language...',
    '— Cross-referencing SCAP glossary...',
    '— Applying censorship filters...',
    '— Verifying security clearance...',
    '— Translation complete. Preparing output...',
];

function openTranslation() {
    document.getElementById('translation-overlay').classList.add('open');
    runTranslationLoop();
}

function runTranslationLoop() {
    let percent = 0;
    let logStep = 0;

    // reset
    document.getElementById('t-bar-fill').style.width = '0%';
    document.getElementById('t-percent').textContent = '0%';
    document.getElementById('t-status-text').textContent = 'Initializing...';
    document.getElementById('tlog-7').style.display = 'none';
    for (let i = 1; i <= 6; i++) {
        document.getElementById('tlog-' + i).classList.remove('active');
    }

    // random japanese phrase
    document.getElementById('t-japanese').textContent =
        JAPANESE_PHRASES[Math.floor(Math.random() * JAPANESE_PHRASES.length)];

    if (translationInterval) clearInterval(translationInterval);

    translationInterval = setInterval(() => {
        percent += Math.random() * 3 + 0.5;

        if (percent > 99) percent = 99;

        document.getElementById('t-bar-fill').style.width = percent + '%';
        document.getElementById('t-percent').textContent = Math.floor(percent) + '%';

        // activate log lines progressively
        const step = Math.floor((percent / 99) * 6);
        if (step > logStep && step <= 6) {
            logStep = step;
            document.getElementById('tlog-' + logStep).classList.add('active');
            document.getElementById('t-status-text').textContent = LOG_MESSAGES[logStep - 1].replace('— ', '');
        }

        // when reaching 99, restart
        if (percent >= 99) {
            clearInterval(translationInterval);
            setTimeout(() => {
                document.getElementById('tlog-7').style.display = 'block';
                document.getElementById('t-status-text').textContent = 'ERROR — Restarting...';

                setTimeout(() => {
                    // after 2 restarts, redirect
                    runTranslationLoopFinal();
                }, 2000);
            }, 800);
        }
    }, 120);
}

function runTranslationLoopFinal() {
    let percent = 0;
    document.getElementById('t-bar-fill').style.width = '0%';
    document.getElementById('t-percent').textContent = '0%';
    document.getElementById('tlog-7').style.display = 'none';
    document.getElementById('t-status-text').textContent = 'Reinitializing...';
    for (let i = 1; i <= 6; i++) {
        document.getElementById('tlog-' + i).classList.remove('active');
    }

    translationInterval = setInterval(() => {
        percent += Math.random() * 4 + 1;
        if (percent > 99) percent = 99;

        document.getElementById('t-bar-fill').style.width = percent + '%';
        document.getElementById('t-percent').textContent = Math.floor(percent) + '%';

        if (percent >= 99) {
            clearInterval(translationInterval);
            document.getElementById('tlog-7').style.display = 'block';
            document.getElementById('t-status-text').textContent = 'ACCESS DENIED — REDIRECTING';

            setTimeout(() => {
                document.getElementById('translation-overlay').classList.remove('open');
                redirectRandom();
            }, 2000);
        }
    }, 100);
}

// ── CONFISCATION NOTICE ───────────────────────────────────────────

const CONFISCATION_GROUNDS = [
    "Content references atomic bomb casualties — prohibited under Article 4(f) SCAPIN-33.",
    "Material critical of Allied Occupation policy — prohibited under Article 4(a) SCAPIN-33.",
    "Document contains suppressed testimony from civilian population — Article 2(d).",
    "References to pre-Occupation Japanese government — Article 6(b) SCAPIN-33.",
    "Material originated from organization on SCAP prohibited list — Article 9.",
];

function openConfiscation(label) {
    const orderNum = Math.floor(Math.random() * 90000) + 10000;
    const grounds = CONFISCATION_GROUNDS[Math.floor(Math.random() * CONFISCATION_GROUNDS.length)];

    document.getElementById('conf-order-num').textContent = orderNum;
    document.getElementById('conf-date').textContent = 'October 1946 — Tokyo';
    document.getElementById('conf-material').textContent = label;
    document.getElementById('conf-grounds').textContent = grounds;
    document.getElementById('conf-redirect-msg').textContent = '';

    document.getElementById('confiscation-overlay').classList.add('open');

    // auto-redirect after 8 seconds
    let countdown = 8;
    const countInterval = setInterval(() => {
        countdown--;
        document.getElementById('conf-redirect-msg').textContent =
            `Redirecting in ${countdown}s...`;
        if (countdown <= 0) {
            clearInterval(countInterval);
            document.getElementById('confiscation-overlay').classList.remove('open');
            redirectRandom();
        }
    }, 1000);
}

// ── POPUP LOGIC ───────────────────────────────────────────────────

function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function buildPopup(data, position, index) {
    const div = document.createElement('div');
    div.className = 'popup';
    div.id = 'popup-dyn-' + index;
    div.style.top = position.top;
    div.style.left = position.left;

    div.innerHTML = `
        <div class="popup-bar">
            <span>${data.title}</span>
            <button class="popup-close">x</button>
        </div>
        <div class="popup-content">${data.html}</div>
    `;

    div.querySelector('.popup-close').addEventListener('click', () => closePopup(div, position));
    makeDraggable(div, position);
    return div;
}

function closePopup(el, homePosition) {
    el.classList.remove('visible');
    setTimeout(() => {
        el.classList.add('returning');
        el.style.top = homePosition.top;
        el.style.left = homePosition.left;
        el.style.right = 'auto';
        el.style.transform = 'none';
        setTimeout(() => {
            el.classList.remove('returning');
            el.classList.add('visible');
        }, 500);
    }, 500);
}

function makeDraggable(popup, homePosition) {
    const bar = popup.querySelector('.popup-bar');
    let dragging = false, sx, sy, ox, oy;

    bar.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('popup-close')) return;
        popup.classList.remove('returning');
        dragging = true;
        sx = e.clientX; sy = e.clientY;
        const r = popup.getBoundingClientRect();
        ox = r.left; oy = r.top;
        popup.style.left = ox + 'px';
        popup.style.right = 'auto';
        popup.style.top = oy + 'px';
        popup.style.transform = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        popup.style.left = (ox + e.clientX - sx) + 'px';
        popup.style.top = (oy + e.clientY - sy) + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (!dragging) return;
        dragging = false;
        popup.classList.add('returning');
        popup.style.top = homePosition.top;
        popup.style.left = homePosition.left;
        popup.style.right = 'auto';
        popup.style.transform = 'none';
        setTimeout(() => popup.classList.remove('returning'), 600);
    });
}

function spawnPopups() {
    activePopups.forEach(p => p.remove());
    activePopups = [];

    const container = document.getElementById('popup-container');

    const POSITIONS = [
        { top: '10vh', left: '5vw' },
        { top: '15vh', left: '55vw' },
        { top: '40vh', left: '8vw' },
        { top: '35vh', left: '50vw' },
        { top: '65vh', left: '15vw' },
        { top: '60vh', left: '58vw' },
        { top: '80vh', left: '35vw' },
    ];

    const selected = shuffle(POPUP_POOL).slice(0, 5);
    const positions = shuffle(POSITIONS).slice(0, 5);

    selected.forEach((data, i) => {
        const popup = buildPopup(data, positions[i], i);
        container.appendChild(popup);
        activePopups.push(popup);
        setTimeout(() => popup.classList.add('visible'), i * 1000);
    });
}

// ── ROW CLICK ─────────────────────────────────────────────────────

function openViewer(rowData) {
    const { img, audio, caption, label, type } = rowData;

    document.getElementById('viewer-label').textContent = '— ' + label + ' —';
    document.getElementById('viewer-caption').textContent = caption;

    const viewer = document.getElementById('viewer');
    const viewerImg = document.getElementById('viewer-img');
    const placeholder = document.getElementById('viewer-placeholder');

    viewer.classList.add('open');

    if (type === 'audio') {
        viewerImg.style.display = 'none';
        placeholder.style.display = 'none';

        let audioEl = document.getElementById('viewer-audio');
        if (!audioEl) {
            audioEl = document.createElement('audio');
            audioEl.id = 'viewer-audio';
            audioEl.controls = true;
            audioEl.style.cssText = 'display:block; margin: 0 auto; width:100%; max-width:800px; margin-top:12px;';
            viewer.querySelector('.db-container').appendChild(audioEl);
        }
        audioEl.src = audio;
        audioEl.style.display = 'block';

        let btn = document.getElementById('audio-next-btn');
        if (!btn) {
            btn = document.createElement('a');
            btn.id = 'audio-next-btn';
            btn.href = 'corea.html';
            btn.className = 'next-btn';
            btn.textContent = 'NEXT — KOREA 1950 →';
            viewer.querySelector('.db-container').appendChild(btn);
        }
        btn.style.display = 'inline-block';

    } else if (img) {
        const audioEl = document.getElementById('viewer-audio');
        if (audioEl) audioEl.style.display = 'none';
        const nextBtn = document.getElementById('audio-next-btn');
        if (nextBtn) nextBtn.style.display = 'none';
        viewerImg.src = img;
        viewerImg.style.display = 'block';
        placeholder.style.display = 'none';

    } else {
        const audioEl = document.getElementById('viewer-audio');
        if (audioEl) audioEl.style.display = 'none';
        const nextBtn = document.getElementById('audio-next-btn');
        if (nextBtn) nextBtn.style.display = 'none';
        viewerImg.style.display = 'none';
        placeholder.style.display = 'flex';
        placeholder.textContent = '[IMAGE — ' + label + ']';
    }

    viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (type === 'img' && img) {
        spawnPopups();
    } else {
        activePopups.forEach(p => p.remove());
        activePopups = [];
    }
}

document.querySelectorAll('.db-row').forEach(row => {
    row.addEventListener('click', () => {
        document.querySelectorAll('.db-row').forEach(r => r.classList.remove('active'));
        row.classList.add('active');

        const rowData = {
            type: row.dataset.type || 'img',
            img: row.dataset.img,
            audio: row.dataset.audio,
            caption: row.dataset.caption,
            label: row.dataset.label,
        };

        // audio y placeholder: nunca interrupciones
        if (rowData.type === 'audio' || !rowData.img) {
            openViewer(rowData);
            return;
        }

        // random entre 3 opciones
        const roll = Math.random();
        if (roll < 0.33) {
            openTranslation();
        } else if (roll < 0.66) {
            openConfiscation(rowData.label);
        } else {
            openViewer(rowData);
        }
    });
});