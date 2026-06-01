// ── DESBLOQUEO ───────────────────────────────────────────────────
if (typeof window.estaDesbloqueado === 'undefined') {
    window.estaDesbloqueado = function() {
        return window.ACCESO_DESBLOQUEADO === true;
    };
}

// POOL DE DISTRACTORES — Corea 1950–1953
// "La guerra olvidada" — cultura pop años 50, boom de posguerra, inicio Guerra Fría

const POPUP_POOL = [
    // ── CONEXIÓN CON OTRO PAÍS — siempre aparece ──────────────────
    {
        title: '⚡ CONTINUACIÓN — Vietnam, 1955',
        link: { href: 'vietnam.html', texto: '→ VIETNAM 1955' },
        html: `
            <div class="popup-marquee"><span>★ CONTENCIÓN DEL COMUNISMO ★ COREA 1950 ★ VIETNAM 1955 ★ EL MISMO ARGUMENTO ★</span></div>
            <p>
                Corea 1950. Vietnam 1955.<br>
                La misma doctrina. El mismo continente.<br><br>
                <span class="blink">MacArthur en Corea.<br>Westmoreland en Vietnam.</span><br><br>
                36.000 americanos muertos en Corea.<br>
                58.000 en Vietnam.<br>
                La lección no fue aprendida.
            </p>
        `
    },

    // ── DISTRACTORES — cultura pop 1950–1953 ─────────────────────
    {
        title: 'Billboard Hot 100 — 1950',
        html: `
            <p>
                #1 — <span class="blink">Goodnight Irene — Gordon Jenkins & The Weavers</span><br>
                #2 — Tennessee Waltz — Patti Page<br>
                #3 — Mona Lisa — Nat King Cole<br>
                #4 — Harbor Lights — Sammy Kaye<br>
                #5 — Music! Music! Music! — Teresa Brewer
            </p>
        `
    },
    {
        title: 'M*A*S*H — La Serie',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/mash-finale.jpg" alt="MASH"></div>
            <div class="popup-marquee"><span>★ M*A*S*H ★ CBS ★ 1972–1983 ★ 121 MILLONES EN EL FINAL ★</span></div>
            <p>
                La guerra de Corea contada 20 años después.<br>
                11 temporadas. 251 episodios.<br>
                <span class="blink">El final más visto en la historia de la TV americana.</span><br>
                Ambientada en Corea. Hablando de Vietnam.
            </p>
        `
    },
    {
        title: 'Sunset Boulevard — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/corea/sunset-blvd.jpg" alt="Sunset Boulevard"></div>
            <p>
                Sunset Boulevard (1950)<br>
                Billy Wilder. Gloria Swanson. William Holden.<br>
                <span class="blink">3 Premios Oscar.</span><br>
                "Estoy lista para mi primer plano, Sr. DeMille."
            </p>
        `
    },
    {
        title: 'Tenés un Correo',
        html: `
            <p>
                De: PENTAGON_INFO<br>
                Asunto: <span class="blink">BAJAS — CLASIFICADO</span><br><br>
                Bajas americanas confirmadas: 36.574<br>
                Bajas coreanas (norte + sur): estimado 3 millones<br>
                Bajas chinas: estimado 180.000–400.000<br><br>
                Esta información no será divulgada<br>
                en la cobertura de prensa oficial.
            </p>
        `
    },
    {
        title: 'All About Eve — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/corea/all-about-eve.jpg" alt="All About Eve"></div>
            <p>
                All About Eve (1950)<br>
                Bette Davis. Anne Baxter.<br>
                14 nominaciones al Oscar — récord hasta 1997.<br>
                <span class="blink">"Abrochate el cinturón, será una noche agitada."</span>
            </p>
        `
    },
    {
        title: 'Televisión — El Nuevo Entretenimiento',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/corea/tv-1950.jpg" alt="TV 1950"></div>
            <div class="popup-marquee"><span>★ TELEVISIÓN ★ EL FUTURO DEL ENTRETENIMIENTO ★ YA EN TU HOGAR ★</span></div>
            <p>
                1950: 9 millones de televisores en EE.UU.<br>
                1953: 20 millones.<br>
                <span class="blink">La guerra de Corea — la primera guerra<br>cubierta parcialmente por televisión.</span>
            </p>
        `
    },
    {
        title: 'Revista LIFE',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/corea/life-corea.jpg" alt="LIFE Corea"></div>
            <p>
                Revista LIFE — Septiembre 1950<br>
            </p>
        `
    },
    {
        title: 'Camel — Lo Fuma el Ejército',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/corea/camel-army.jpg" alt="Camel Army"></div>
            <p>
                Camel — el cigarrillo del soldado americano.<br>
                Incluido en las raciones de campaña K.<br>
                <span class="blink">"Más médicos fuman Camel<br>que cualquier otra marca."</span>
            </p>
        `
    },
];

// ── MENSAJES DE ERROR DEL FORMULARIO POW ─────────────────────────

const POW_ERRORES = [
    "ERROR DE PROCESAMIENTO — El número de prisionero no figura en el registro del Comando de las Naciones Unidas. Verifique los datos con el oficial de campo asignado a su campo de internamiento.",
    "VERIFICACIÓN FALLIDA — Sus datos no coinciden con los registros de captura del UNC. Su caso ha sido derivado a la Comisión Neutral de Supervisión de Repatriación para revisión. Tiempo estimado: 180 días.",
    "SOLICITUD DENEGADA — Su expediente fue marcado para investigación especial. El procesamiento de su repatriación queda suspendido indefinidamente. Siendo redirigido.",
];

let powIntentos = 0;
let popupsActivos = [];

// ── FORMULARIO POW ────────────────────────────────────────────────

function abrirFormularioPOW() {
    powIntentos = 0;
    document.getElementById('pow-error').textContent = '';
    document.getElementById('pow-stamp').textContent = '';
    document.getElementById('pow-stamp').classList.remove('visible');
    const pov = document.getElementById('pow-overlay'); pov.style.display = 'block'; pov.classList.add('open');
}

document.getElementById('pow-submit').addEventListener('click', () => {
    powIntentos++;
    const errorEl = document.getElementById('pow-error');
    const selloEl = document.getElementById('pow-stamp');

    if (powIntentos < 3) {
        errorEl.textContent = POW_ERRORES[powIntentos - 1];
        selloEl.textContent = '';
        selloEl.classList.remove('visible');
    } else {
        errorEl.textContent = POW_ERRORES[2];
        selloEl.textContent = 'DENEGADO';
        selloEl.classList.add('visible');
        setTimeout(() => {
            const pov2 = document.getElementById('pow-overlay'); pov2.classList.remove('open'); pov2.style.display = 'none';
            if (document.startViewTransition) {
                document.startViewTransition(() => { window.location.href = 'grecia.html'; });
            } else {
                window.location.href = 'grecia.html';
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
        { top: '10vh', left: '2vw' },
        { top: '10vh', left: '45vw' },
        { top: '40vh', left: '2vw' },
        { top: '40vh', left: '45vw' },
        { top: '68vh', left: '2vw' },
        { top: '68vh', left: '45vw' },
        { top: '25vh', left: '25vw' },
    ];

    const conexion = POPUP_POOL.find(p => p.link);
    const resto = mezclar(POPUP_POOL.filter(p => !p.link)).slice(0, 4);
    const seleccionados = mezclar([conexion, ...resto]);
    const posiciones = mezclar(POSICIONES).slice(0, 5);

    seleccionados.forEach((data, i) => {
        const popup = construirPopup(data, posiciones[i], i);
        contenedor.appendChild(popup);
        popupsActivos.push(popup);
        setTimeout(() => popup.classList.add('visible'), i * 400);
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
            btn.href = 'grecia.html';
            btn.className = 'next-btn';
            btn.textContent = 'GRECIA 1947 →';
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

    if (type !== 'audio' && img && !window.estaDesbloqueado()) {
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

        // si está desbloqueado: visor directo
        if (window.estaDesbloqueado()) {
            abrirVisor(datosFila);
            return;
        }

        // 50% formulario POW, 50% popups
        if (Math.random() < 0.5) {
            abrirFormularioPOW();
        } else {
            abrirVisor(datosFila);
        }
    });
});