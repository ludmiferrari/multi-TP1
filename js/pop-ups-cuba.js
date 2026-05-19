// POOL DE DISTRACTORES — Cuba 1961
const POPUP_POOL = [
    {
        title: "The Ed Sullivan Show — Tonight",
        html: `
            <div class="popup-img-placeholder">[img: Ed Sullivan Show promo 1961]</div>
            <div class="popup-marquee"><span>★ LIVE TONIGHT ★ THE ED SULLIVAN SHOW ★ CBS ★ 8/7c ★</span></div>
            <p>TONIGHT: Elvis Presley returns from the Army.<br><span class="blink">Don't miss it — CBS, 8pm</span></p>
        `
    },
    {
        title: "Blue Hawaii — Now Playing",
        html: `
            <div class="popup-img-placeholder">[img: Blue Hawaii movie poster 1961 — Elvis Presley]</div>
            <p>Blue Hawaii (1961)<br>Starring Elvis Presley<br><span class="blink">★ #1 at the box office ★</span><br>Soundtrack: 20 weeks at #1</p>
        `
    },
    {
        title: "Lucky Strike — It's Toasted",
        html: `
            <div class="popup-img-placeholder">[img: Lucky Strike cigarette ad 1961 — doctor endorsement]</div>
            <div class="popup-marquee"><span>★ MORE DOCTORS SMOKE LUCKY STRIKE ★ IT'S TOASTED ★</span></div>
            <p>Lucky Strike — <span class="blink">the cigarette of champions.</span><br>Mild, smooth, satisfying.</p>
        `
    },
    {
        title: "Camel Cigarettes",
        html: `
            <div class="popup-img-placeholder">[img: Camel cigarettes ad 1961]</div>
            <p>"I'd walk a mile for a Camel."<br><span class="blink">The best tobacco money can buy.</span><br>Available at your local drugstore.</p>
        `
    },
    {
        title: "NASA — Project Mercury",
        html: `
            <div class="popup-img-placeholder">[img: Alan Shepard Freedom 7 launch May 1961]</div>
            <div class="popup-marquee"><span>★ AMERICA REACHES FOR THE STARS ★ PROJECT MERCURY ★ NASA ★</span></div>
            <p>Alan Shepard — first American in space.<br><span class="blink">Freedom 7 — May 5, 1961</span></p>
        `
    },
    {
        title: "Kennedy — We Choose the Moon",
        html: `
            <div class="popup-img-placeholder">[img: Kennedy Rice University speech 1962]</div>
            <p>"We choose to go to the Moon."<br>— President Kennedy, Sept 12 1962<br><span class="blink">★ Apollo Program — $25 billion ★</span></p>
        `
    },
    {
        title: "Leave It to Beaver — CBS",
        html: `
            <div class="popup-img-placeholder">[img: Leave It to Beaver TV still 1961]</div>
            <p>Leave It to Beaver<br>America's favorite family — every week on CBS.<br><span class="blink">TONIGHT: Beaver gets in trouble again.</span></p>
        `
    },
    {
        title: "The Flintstones — ABC",
        html: `
            <div class="popup-img-placeholder">[img: The Flintstones promo art 1961]</div>
            <div class="popup-marquee"><span>★ YABBA DABBA DOO ★ THE FLINTSTONES ★ FRIDAYS ON ABC ★</span></div>
            <p>America's modern stone-age family.<br><span class="blink">New episode TONIGHT — 8:30/7:30c</span></p>
        `
    },
    {
        title: "GE — Live Better Electrically",
        html: `
            <div class="popup-img-placeholder">[img: GE appliance ad 1961 — kitchen]</div>
            <p>General Electric — "Live Better Electrically"<br>New refrigerator, washer, and range sets.<br><span class="blink">The modern American kitchen — now affordable.</span></p>
        `
    },
    {
        title: "Chevrolet Impala — 1961",
        html: `
            <div class="popup-img-placeholder">[img: Chevrolet Impala ad 1961]</div>
            <div class="popup-marquee"><span>★ SEE THE USA IN YOUR CHEVROLET ★ 1961 IMPALA ★</span></div>
            <p>The 1961 Chevrolet Impala.<br>More style. More power.<br><span class="blink">Starting at $2,597.</span></p>
        `
    },
    {
        title: "Mel's Diner — Open 24hrs",
        html: `
            <div class="popup-img-placeholder">[img: American diner neon sign 1961]</div>
            <p>MEL'S DRIVE-IN<br>Burgers — Shakes — Pie<br><span class="blink">★ OPEN 24 HOURS ★</span><br>Route 66 — Exit 14</p>
        `
    },
    {
        title: "TV Guide — This Week",
        html: `
            <div class="popup-img-placeholder">[img: TV Guide cover April 1961]</div>
            <p>THIS WEEK ON TV:<br>Mon — Gunsmoke (CBS)<br>Wed — Perry Mason (CBS)<br>Fri — <span class="blink">The Flintstones (ABC)</span><br>Sun — Ed Sullivan Show (CBS)</p>
        `
    },
    {
        title: "Coca-Cola — Have a Coke",
        html: `
            <div class="popup-img-placeholder">[img: Coca-Cola ad 1961 — diner counter]</div>
            <div class="popup-marquee"><span>★ THINGS GO BETTER WITH COKE ★ COCA-COLA ★</span></div>
            <p><span class="blink">Refresh yourself.</span><br>Ice-cold Coca-Cola — 5¢ at your local soda fountain.</p>
        `
    },
    {
        title: "Billboard Hot 100 — Apr 1961",
        html: `
            <p>#1 — <span class="blink">Runaway — Del Shannon</span><br>#2 — Mother-In-Law — Ernie K-Doe<br>#3 — Blue Moon — The Marcels<br>#4 — Surrender — Elvis Presley<br>#5 — Portrait of my Love — Steve Lawrence</p>
        `
    },
    {
        title: "Protect Your Family — Fallout Shelter",
        html: `
            <div class="popup-img-placeholder">[img: fallout shelter ad 1961 — backyard bunker]</div>
            <p>PROTECT YOUR FAMILY.<br>Pre-built fallout shelters — from $1,995.<br><span class="blink">The Soviets are watching. Are you ready?</span></p>
        `
    },
];

// FBI FORM — mensajes de error secuenciales
const FBI_ERRORS = [
    "INCOMPLETE SUBMISSION — All fields in Section I must be completed before processing. Resubmit in full.",
    "VERIFICATION FAILURE — One or more references could not be confirmed by our field office. Review and resubmit.",
    "ACCESS DENIED — Your file has been flagged for further investigation. Please stand by for contact from your local FBI field office.",
];

let fbiAttempts = 0;
let activePopups = [];

// ── FBI FORM LOGIC ────────────────────────────────────────────────

function openFbiForm() {
    fbiAttempts = 0;
    document.getElementById('fbi-error').textContent = '';
    document.getElementById('fbi-stamp').textContent = '';
    document.getElementById('fbi-overlay').classList.add('open');
}

document.getElementById('fbi-submit').addEventListener('click', () => {
    fbiAttempts++;
    const errorEl = document.getElementById('fbi-error');
    const stampEl = document.getElementById('fbi-stamp');

    if (fbiAttempts < 3) {
        errorEl.textContent = FBI_ERRORS[fbiAttempts - 1];
        stampEl.textContent = '';
    } else {
        errorEl.textContent = FBI_ERRORS[2];
        stampEl.textContent = 'DENIED';
        setTimeout(() => {
            document.getElementById('fbi-overlay').classList.remove('open');
            if (document.startViewTransition) {
                document.startViewTransition(() => { window.location.href = 'index.html'; });
            } else {
                window.location.href = 'index.html';
            }
        }, 2200);
    }
});

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

        // CAMBIAR href al siguiente país
        let btn = document.getElementById('audio-next-btn');
        if (!btn) {
            btn = document.createElement('a');
            btn.id = 'audio-next-btn';
            btn.href = 'guatemala.html';
            btn.className = 'next-btn';
            btn.textContent = 'NEXT — GUATEMALA 1954 →';
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

        // audio y placeholder: nunca formulario
        if (rowData.type === 'audio' || !rowData.img) {
            openViewer(rowData);
            return;
        }

        // 50% chance: formulario FBI o popups
        if (Math.random() < 0.5) {
            openFbiForm();
        } else {
            openViewer(rowData);
        }
    });
});