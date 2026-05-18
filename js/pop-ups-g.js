// POOL DE DISTRACTORES
// Cada objeto: { title, html }
// html: contenido interno del popup (placeholder, iframe, imagen, texto, etc.)

const POPUP_POOL = [
    {
        title: 'MTV — Now Playing',
        html: `
            <div class="popup-img-placeholder"><a href="https://www.youtube.com/watch?v=sOnqjkJTMaA&list=RDsOnqjkJTMaA&start_radio=1"><img src="imgs/granada/thriller-michael-jackson.gif"></a></div>
            <div class="popup-marquee"><span>★ WORLD PREMIERE ★ MICHAEL JACKSON — THRILLER ★ DIRECTED BY JOHN LANDIS ★</span></div>
            <p><span class="blink">▶ NOW PLAYING</span> — Thriller (14 min. version)</p>
        `
    },
    {
        title: 'Billboard Hot 100 — Oct. 29 1983',
        html: `
            <p>
                #1 — <span class="blink">Thriller — Michael Jackson</span><br>
                #2 — Billy Jean - Michael Jackson<br>
                #3 — Every breath you take - The Police <br>
                #4 — Hungry like the wolf — Duran Duran<br>
                #5 — Girls Just Want to Have Fun - Cindy Lauper
            </p>
        `
    },
    {
        title: 'REWATCH THE SERIES FINALE - M*A*S*H ',
        html: `
            <div class="popup-content">
                <div class="popup-img-placeholder"><img src="imgs/granada/mash-finale.jpg"></div>
                <p>TONIGHT on CBS: M*A*S*H season finale<br><span class="blink">121.6 MILLION VIWERS ALREADY WATCHED IT</span></p>
            </div>
        `
    },
    {
        title: 'Now In Stores',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/star-wars.jpeg"></div>
            <p>Return of the Jedi — Now on VHS!<br><span class="blink">★ At your local video store ★</span></p>
        `
    },
    {
        title: "You've Got Mail",
        html: `
            <p>
                From: MTV_Newsletter<br>
                Subj: <span class="blink">MJ BREAKS RECORDS!</span><br><br>
                Thriller: 21 weeks at #1.<br>
                First artist — 5 top-10 singles<br>
                from a single album. History made.
            </p>
        `
    },
    {
        title: 'Pepsi Challenge — 1983',
        html: `
            <div class="popup-img-placeholder">
            <video width="640" height="360" controls autoplay muted loop>
            <source src="imgs/granada/pepsi.mp4" type="video/mp4">
            </video>
            </div>
            <div class="popup-marquee"><span>★ THE PEPSI CHALLENGE ★ CAN YOU TELL THE DIFFERENCE? ★</span></div>
            <p>Michael Jackson signs $5M deal with Pepsi.<br><span class="blink">The choice of a new generation.</span></p>
        `
    },
    {
        title: 'Atari 2600 — Holiday 1983',
        html: `
            <div class="popup-img-placeholder">[img: Atari 2600 Christmas ad 1983]</div>
            <p>
                NEW: Pac-Man for Atari 2600!<br>
                E.T. The Game — available now.<br>
                <span class="blink">★ The perfect gift ★</span>
            </p>
        `
    },
    {
        title: 'Jane Fonda Workout — VHS',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/jane-fonda.jpg"></div>
            <p>
                Jane Fonda's Workout<br>
                Best-selling VHS of 1983.<br>
                <span class="blink">Feel the burn!</span>
            </p>
        `
    },
    {
        title: "McDonald's — 1983",
        html: `
            <div class="popup-img-placeholder">
            <video width="640" height="360" controls autoplay muted loop>
            <source src="imgs/granada/nuggets.mp4" type="video/mp4">
            </video>
            </div>
            <div class="popup-marquee"><span>★ YOU DESERVE A BREAK TODAY ★ McDONALD'S ★</span></div>
            <p><span class="blink">Introducing: McNuggets!</span><br>Now at a McDonald's near you.</p>
        `
    },
    {
        title: 'Flashdance — Now Playing',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/flashdance.jpg"></div>
            <p>
                Flashdance (1983)<br>
                Soundtrack: 6x Platinum<br>
                <span class="blink">What a feeling!</span> — Irene Cara
            </p>
        `
    },
    {
        title: 'Cabbage Patch Kids — Sold Out!',
        html: `
            <div class="popup-img-placeholder">[img: Cabbage Patch Kids ad 1983]</div>
            <p>
                Christmas 1983 — Store riots reported.<br>
                Cabbage Patch Kids: <span class="blink">SOLD OUT nationwide.</span><br>
                Order now for January delivery.
            </p>
        `
    },
    {
        title: 'Sony Walkman — New Model',
        html: `
            <div class="popup-img-placeholder">[img: Sony Walkman WM-20 ad 1983]</div>
            <p>
                Sony Walkman WM-20<br>
                Now lighter. Now smaller.<br>
                <span class="blink">Take your music anywhere.</span>
            </p>
        `
    },
    {
        title: 'Pac-Man Fever!',
        html: `
            <div class="popup-img-placeholder">[img: Pac-Man arcade flyer 1983]</div>
            <div class="popup-marquee"><span>★ PAC-MAN ★ DONKEY KONG ★ FROGGER ★ GALAGA ★ ARCADE HITS ★</span></div>
            <p>America's #1 obsession.<br><span class="blink">Insert coin to continue.</span></p>
        `
    },
    {
        title: 'Olivia Newton-John — Physical',
        html: `
            <div class="popup-img-placeholder">[img: Olivia Newton-John Physical music video still]</div>
            <p>
                Physical — Olivia Newton-John<br>
                10 weeks at #1 — still charting.<br>
                <span class="blink">▶ On heavy rotation on MTV</span>
            </p>
        `
    },
];

let activePopups = [];
let popupsStarted = false;

function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function buildPopup(data, position, index) {
    const id = 'popup-dyn-' + index;
    const div = document.createElement('div');
    div.className = 'popup';
    div.id = id;
    div.style.top = position.top;
    div.style.left = position.left;

    div.innerHTML = `
        <div class="popup-bar">
            <span>${data.title}</span>
            <button class="popup-close">x</button>
        </div>
        <div class="popup-content">${data.html}</div>
    `;

    div.querySelector('.popup-close').addEventListener('click', () => {
        closePopup(div, position);
    });

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

        setTimeout(() => {
            popup.classList.add('visible');
        }, i * 1000);
    });
}

// trigger al clickear fila
document.querySelectorAll('.db-row').forEach(row => {
    row.addEventListener('click', () => {
        document.querySelectorAll('.db-row').forEach(r => r.classList.remove('active'));
        row.classList.add('active');

        const img = row.dataset.img;
        const caption = row.dataset.caption;
        const label = row.dataset.label;

        document.getElementById('viewer-label').textContent = '— ' + label + ' —';
        document.getElementById('viewer-caption').textContent = caption;

        const viewer = document.getElementById('viewer');
        const viewerImg = document.getElementById('viewer-img');
        const placeholder = document.getElementById('viewer-placeholder');

        viewer.classList.add('open');

        if (img) {
            viewerImg.src = img;
            viewerImg.style.display = 'block';
            placeholder.style.display = 'none';
        } else {
            viewerImg.style.display = 'none';
            placeholder.style.display = 'flex';
            placeholder.textContent = '[IMAGE — ' + label + ']';
        }

        viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        spawnPopups();
    });
});