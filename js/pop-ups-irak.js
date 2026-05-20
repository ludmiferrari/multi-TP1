// POOL DE DISTRACTORES — Irak 1991
// Guerra del Golfo: primera guerra televisada 24hs, CNN, cultura pop 1991

const POPUP_POOL = [
    // ── CONEXIÓN CON OTRO PAÍS — siempre aparece ──────────────────
    {
        title: '⚡ ANTECEDENTE — Teherán, 1953',
        link: { href: 'iran.html', texto: '→ IRÁN 1953' },
        html: `
            <div class="popup-marquee"><span>★ OPERACIÓN AJAX ★ CIA / MI6 ★ IRÁN 1953 ★ GOLPE DE ESTADO ★</span></div>
            <p>
                Irak 1991. Irán 1953.<br>
                La misma región. La misma lógica.<br><br>
                <span class="blink">Rumsfeld le vendió armas a Saddam en 1983.</span><br>
                En 1991 lo bombardeó.<br>
                En 2003 lo invadió.<br><br>
                El ciclo completo, en el mismo Medio Oriente<br>
                que la CIA reorganizó por primera vez en 1953.
            </p>
        `
    },

    // ── DISTRACTORES — cultura pop 1991 ──────────────────────────
    {
        title: 'CNN — En Vivo desde Bagdad',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/irak/cnn-bagdad.jpg" alt="CNN Bagdad"></div>
            <div class="popup-marquee"><span>★ CNN ★ EN VIVO DESDE BAGDAD ★ PETER ARNETT ★ 24 HORAS ★</span></div>
            <p>
                Peter Arnett transmite desde el Hotel Al-Rashid.<br>
                Primera cobertura de guerra en vivo, 24 horas.<br>
                <span class="blink">El Pentágono selecciona qué imágenes se difunden.</span>
            </p>
        `
    },
    {
        title: 'Billboard Hot 100 — Ene 1991',
        html: `
            <p>
                #1 — <span class="blink">The First Time — Surface</span><br>
                #2 — Love Will Never Do — Janet Jackson<br>
                #3 — Justify My Love — Madonna<br>
                #4 — High Enough — Damn Yankees<br>
                #5 — Gonna Make You Sweat — C+C Music Factory
            </p>
        `
    },
    {
        title: 'Terminator 2 — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/irak/t2.jpg" alt="Terminator 2"></div>
            <p>
                Terminator 2: Judgment Day (1991)<br>
                Arnold Schwarzenegger. James Cameron.<br>
                <span class="blink">★ $520M en taquilla mundial ★</span><br>
                "Hasta la vista, baby."
            </p>
        `
    },
    {
        title: 'Nirvana — Nevermind',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/irak/nevermind.jpg" alt="Nevermind"></div>
            <div class="popup-marquee"><span>★ NIRVANA ★ NEVERMIND ★ DGC RECORDS ★ 24 SEP 1991 ★</span></div>
            <p>
                Nevermind — Nirvana.<br>
                Semana de lanzamiento: desplaza a Michael Jackson del #1.<br>
                <span class="blink">El mundo cambió. Nadie lo vio venir.</span>
            </p>
        `
    },
    {
        title: 'Super Nintendo — Ya Disponible',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/irak/snes.jpg" alt="Super Nintendo"></div>
            <div class="popup-marquee"><span>★ SUPER NINTENDO ★ NOW YOU'RE PLAYING WITH POWER ★ $199 ★</span></div>
            <p>
                Super Nintendo Entertainment System.<br>
                Lanzamiento EE.UU.: 23 de agosto de 1991.<br>
                <span class="blink">Incluye: Super Mario World.</span>
            </p>
        `
    },
    {
        title: 'Tenés un Correo',
        html: `
            <p>
                De: DOD_MediaPool<br>
                Asunto: <span class="blink">SECURITY REVIEW PENDIENTE</span><br><br>
                Su material del día 24/01/91 fue retenido.<br>
                Motivo: "información sensible para la seguridad operacional".<br>
                Tiempo estimado de revisión: 48–72 hs.<br>
                Contacte a su oficial de prensa asignado.
            </p>
        `
    },
    {
        title: 'The Silence of the Lambs — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/irak/silence.jpg" alt="Silence of the Lambs"></div>
            <p>
                El Silencio de los Inocentes (1991)<br>
                Jodie Foster. Anthony Hopkins.<br>
                <span class="blink">★ 5 Premios Oscar ★ incluyendo Mejor Película ★</span>
            </p>
        `
    },
    {
        title: 'Revista TIME — La Guerra en Vivo',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/irak/time-gulf.jpg" alt="TIME Gulf War"></div>
            <p>
                TIME Magazine — Edición Especial Guerra del Golfo<br>
                "La guerra de las imágenes perfectas."<br>
                <span class="blink">Todas las imágenes: suministradas por el Pentágono.</span>
            </p>
        `
    },
    {
        title: "McDonald's — 12.000 Locales en el Mundo",
        html: `
            <div class="popup-img-placeholder"><img src="imgs/irak/mcdonalds91.jpg" alt="McDonalds 1991"></div>
            <div class="popup-marquee"><span>★ McDONALD'S ★ 12.000 RESTAURANTES ★ 59 PAÍSES ★</span></div>
            <p>
                El primer McDonald's en Moscú abre en 1990.<br>
                30.000 clientes el primer día.<br>
                <span class="blink">El fin de la Guerra Fría tiene sabor a Big Mac.</span>
            </p>
        `
    },
    {
        title: 'Home Alone — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/irak/home-alone.jpg" alt="Home Alone"></div>
            <p>
                Mi Pobre Angelito (1990/91)<br>
                Macaulay Culkin.<br>
                <span class="blink">★ $476M — La comedia más taquillera de la historia ★</span><br>
                "¡Esta es MI casa y la voy a defender!"
            </p>
        `
    },
];

// ── MENSAJES DE ERROR DEL FORMULARIO ─────────────────────────────

const PEN_ERRORES = [
    "ERROR DE PROCESAMIENTO — El número de pasaporte no figura en la base de datos de periodistas acreditados del CENTCOM. Verifique los datos e intente nuevamente. Referencia: USCENTCOM REG 360-1, Art. 4(b).",
    "VERIFICACIÓN FALLIDA — Su historial de cobertura no pudo ser confirmado con los medios declarados. Un oficial de prensa del CENTCOM se pondrá en contacto en las próximas 48–72 horas. No intente ingresar al teatro de operaciones hasta recibir confirmación.",
    "ACREDITACIÓN DENEGADA — Su solicitud fue marcada para revisión especial por el Departamento de Defensa. Siendo redirigido.",
];

let penIntentos = 0;
let popupsActivos = [];

// ── FORMULARIO DE ACREDITACIÓN ────────────────────────────────────

function abrirFormularioPen() {
    penIntentos = 0;
    document.getElementById('pen-error').textContent = '';
    document.getElementById('pen-stamp').textContent = '';
    document.getElementById('pen-stamp').classList.remove('visible');
    document.getElementById('pen-overlay').classList.add('open');
}

document.getElementById('pen-submit').addEventListener('click', () => {
    penIntentos++;
    const errorEl = document.getElementById('pen-error');
    const selloEl = document.getElementById('pen-stamp');

    if (penIntentos < 3) {
        errorEl.textContent = PEN_ERRORES[penIntentos - 1];
        selloEl.textContent = '';
        selloEl.classList.remove('visible');
    } else {
        errorEl.textContent = PEN_ERRORES[2];
        selloEl.textContent = 'DENEGADO';
        selloEl.classList.add('visible');
        setTimeout(() => {
            document.getElementById('pen-overlay').classList.remove('open');
            if (document.startViewTransition) {
                document.startViewTransition(() => { window.location.href = 'japon.html'; });
            } else {
                window.location.href = 'japon.html';
            }
        }, 2200);
    }
});

// ── LÓGICA DE POPUPS ──────────────────────────────────────────────

function mezclar(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function construirPopup(data, posicion, indice) {
    const div = document.createElement('div');
    div.className = 'popup';
    div.id = 'popup-dyn-' + indice;
    div.style.top = posicion.top;
    div.style.left = posicion.left;

    const linkHtml = data.link
        ? `<a href="${data.link.href}" style="
            display:inline-block;
            margin-top:10px;
            color:#c1121f;
            border:1px solid #c1121f;
            padding:6px 14px;
            font-size:0.72rem;
            letter-spacing:2px;
            text-decoration:none;
            text-transform:uppercase;
          ">${data.link.texto}</a>`
        : '';

    div.innerHTML = `
        <div class="popup-bar">
            <span>${data.title}</span>
            <button class="popup-close">x</button>
        </div>
        <div class="popup-content">${data.html}${linkHtml}</div>
    `;

    if (data.link) div.style.zIndex = 500;

    div.querySelector('.popup-close').addEventListener('click', () => cerrarPopup(div, posicion));
    hacerArrastrable(div, posicion);
    return div;
}

function cerrarPopup(el, posicionInicial) {
    el.classList.remove('visible');
    setTimeout(() => {
        el.classList.add('returning');
        el.style.top = posicionInicial.top;
        el.style.left = posicionInicial.left;
        el.style.right = 'auto';
        el.style.transform = 'none';
        setTimeout(() => {
            el.classList.remove('returning');
            el.classList.add('visible');
        }, 500);
    }, 500);
}

function hacerArrastrable(popup, posicionInicial) {
    const barra = popup.querySelector('.popup-bar');
    let arrastrando = false, sx, sy, ox, oy;

    barra.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('popup-close')) return;
        popup.classList.remove('returning');
        arrastrando = true;
        sx = e.clientX; sy = e.clientY;
        const r = popup.getBoundingClientRect();
        ox = r.left; oy = r.top;
        popup.style.left = ox + 'px';
        popup.style.right = 'auto';
        popup.style.top = oy + 'px';
        popup.style.transform = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!arrastrando) return;
        popup.style.left = (ox + e.clientX - sx) + 'px';
        popup.style.top = (oy + e.clientY - sy) + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (!arrastrando) return;
        arrastrando = false;
        popup.classList.add('returning');
        popup.style.top = posicionInicial.top;
        popup.style.left = posicionInicial.left;
        popup.style.right = 'auto';
        popup.style.transform = 'none';
        setTimeout(() => popup.classList.remove('returning'), 600);
    });
}

function lanzarPopups() {
    popupsActivos.forEach(p => p.remove());
    popupsActivos = [];

    const contenedor = document.getElementById('popup-container');

    const POSICIONES = [
        { top: '40vh', left: '2vw' },
        { top: '50vh', left: '45vw' },
        { top: '40vh', left: '2vw' },
        { top: '40vh', left: '45vw' },
        { top: '68vh', left: '2vw' },
        { top: '68vh', left: '45vw' },
        { top: '45vh', left: '25vw' },
    ];

    const conexion = POPUP_POOL.find(p => p.link);
    const resto = mezclar(POPUP_POOL.filter(p => !p.link)).slice(0, 4);
    const seleccionados = mezclar([conexion, ...resto]);
    const posiciones = mezclar(POSICIONES).slice(0, 5);

    seleccionados.forEach((data, i) => {
        const popup = construirPopup(data, posiciones[i], i);
        contenedor.appendChild(popup);
        popupsActivos.push(popup);
        setTimeout(() => popup.classList.add('visible'), i * 1000);
    });
}

// ── VISOR ─────────────────────────────────────────────────────────

function abrirVisor(datosFila) {
    const { img, audio, caption, label, type } = datosFila;

    document.getElementById('viewer-label').textContent = '— ' + label + ' —';
    document.getElementById('viewer-caption').textContent = caption;

    const visor = document.getElementById('viewer');
    const imgVisor = document.getElementById('viewer-img');
    const placeholder = document.getElementById('viewer-placeholder');

    visor.classList.add('open');

    if (type === 'audio') {
        imgVisor.style.display = 'none';
        placeholder.style.display = 'none';

        let audioEl = document.getElementById('viewer-audio');
        if (!audioEl) {
            audioEl = document.createElement('audio');
            audioEl.id = 'viewer-audio';
            audioEl.controls = true;
            audioEl.style.cssText = 'display:block; margin:0 auto; width:100%; max-width:800px; margin-top:12px;';
            visor.querySelector('.db-container').appendChild(audioEl);
        }
        audioEl.src = audio;
        audioEl.style.display = 'block';

        let btn = document.getElementById('audio-next-btn');
        if (!btn) {
            btn = document.createElement('a');
            btn.id = 'audio-next-btn';
            btn.href = 'japon.html';
            btn.className = 'next-btn';
            btn.textContent = 'JAPÓN 1945 →';
            visor.querySelector('.db-container').appendChild(btn);
        }
        btn.style.display = 'inline-block';

    } else if (img) {
        const audioEl = document.getElementById('viewer-audio');
        if (audioEl) audioEl.style.display = 'none';
        const btnSig = document.getElementById('audio-next-btn');
        if (btnSig) btnSig.style.display = 'none';
        imgVisor.src = img;
        imgVisor.style.display = 'block';
        placeholder.style.display = 'none';

    } else {
        const audioEl = document.getElementById('viewer-audio');
        if (audioEl) audioEl.style.display = 'none';
        const btnSig = document.getElementById('audio-next-btn');
        if (btnSig) btnSig.style.display = 'none';
        imgVisor.style.display = 'none';
        placeholder.style.display = 'flex';
        placeholder.textContent = '[IMAGEN — ' + label + ']';
    }

    visor.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (type !== 'audio' && img) {
        lanzarPopups();
    } else {
        popupsActivos.forEach(p => p.remove());
        popupsActivos = [];
    }
}

// ── CLICK EN RENGLÓN ──────────────────────────────────────────────

document.querySelectorAll('.db-row').forEach(fila => {
    fila.addEventListener('click', () => {
        document.querySelectorAll('.db-row').forEach(f => f.classList.remove('active'));
        fila.classList.add('active');

        const datosFila = {
            type: fila.dataset.type || 'img',
            img: fila.dataset.img,
            audio: fila.dataset.audio,
            caption: fila.dataset.caption,
            label: fila.dataset.label,
        };

        if (datosFila.type === 'audio' || !datosFila.img) {
            abrirVisor(datosFila);
            return;
        }

        // 50% formulario de acreditación, 50% popups
        if (Math.random() < 0.5) {
            abrirFormularioPen();
        } else {
            abrirVisor(datosFila);
        }
    });
});