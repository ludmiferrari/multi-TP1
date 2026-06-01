// ── DESBLOQUEO ───────────────────────────────────────────────────
if (typeof window.estaDesbloqueado === 'undefined') {
    window.estaDesbloqueado = function() {
        return window.ACCESO_DESBLOQUEADO === true;
    };
}

// POOL DE DISTRACTORES — Grecia 1947–1949
// Guerra Civil griega, Doctrina Truman, cultura pop años 40

const POPUP_POOL = [
    // ── CONEXIÓN CON OTRO PAÍS — siempre aparece ──────────────────
    {
        title: '⚡ PARALELO — Teherán, 1953',
        link: { href: 'iran.html', texto: '→ IRÁN 1953' },
        html: `
            <div class="popup-marquee"><span>★ DOCTRINA TRUMAN ★ GRECIA 1947 ★ IRÁN 1953 ★ EL MISMO MANUAL ★</span></div>
            <p>
                Grecia 1947. Irán 1953.<br>
                La misma doctrina. El mismo presidente.<br><br>
                <span class="blink">En Grecia: apoyo militar directo.<br>En Irán: golpe de estado encubierto.</span><br><br>
                Truman definió el marco.<br>
                La CIA ejecutó la doctrina.
            </p>
        `
    },

    // ── DISTRACTORES — cultura pop 1947–1949 ─────────────────────
    {
        title: 'Billboard — Ene 1947',
        html: `
            <p>
                #1 — <span class="blink">Peg o' My Heart — The Harmonicats</span><br>
                #2 — Managua, Nicaragua — Freddy Martin<br>
                #3 — Chi-Baba Chi-Baba — Perry Como<br>
                #4 — Near You — Francis Craig<br>
                #5 — Smoke! Smoke! Smoke! — Tex Williams
            </p>
        `
    },
    {
        title: 'Gentleman\'s Agreement — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/grecia/gentlemans.jpg" alt="Gentleman's Agreement"></div>
            <p>
                Gentleman's Agreement (1947)<br>
                Gregory Peck. Elia Kazan.<br>
                Oscar a Mejor Película.<br>
                <span class="blink">El antisemitismo en América — finalmente en la pantalla.</span>
            </p>
        `
    },

    {
        title: 'Jackie Robinson — Primera Base',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/grecia/robinson.jpg" alt="Jackie Robinson"></div>
            <div class="popup-marquee"><span>★ JACKIE ROBINSON ★ BROOKLYN DODGERS ★ 15 ABR 1947 ★ HISTORIA ★</span></div>
            <p>
                Jackie Robinson rompe la barrera racial<br>
                en las Grandes Ligas de Béisbol.<br>
                <span class="blink">15 de abril de 1947 — Ebbets Field, Brooklyn.</span>
            </p>
        `
    },
    {
        title: 'Tenés un Correo',
        html: `
            <p>
                De: STATE_DEPT<br>
                Asunto: <span class="blink">DOCTRINA TRUMAN — IMPLEMENTACIÓN</span><br><br>
                Grecia requiere asistencia inmediata.<br>
                Presupuesto aprobado: $400 millones.<br>
                $300M para Grecia. $100M para Turquía.<br>
                Justificación pública: "amenaza comunista."
            </p>
        `
    },
    {
        title: 'Radio Free Europe — En el Aire',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/grecia/radio-free.jpeg" alt="Radio Free Europe"></div>
            <div class="popup-marquee"><span>★ RADIO FREE EUROPE ★ FINANCIADA POR LA CIA ★ DESDE 1949 ★</span></div>
            <p>
                Radio Free Europe — fundada 1949.<br>
                Financiación real: CIA.<br>
                <span class="blink">Presentada al público como organización privada.</span>
            </p>
        `
    },
    {
        title: 'Casablanca — Ahora en TV',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/grecia/casablanca.jpg" alt="Casablanca"></div>
            <p>
                Casablanca (1942) — Ahora en televisión.<br>
                Humphrey Bogart. Ingrid Bergman.<br>
                <span class="blink">"De todos los bares del mundo..."</span><br>
                CBS — Domingo, 9pm
            </p>
        `
    },
    {
        title: 'HUAC — Lista Negra de Hollywood',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/grecia/huac.gif" alt="HUAC"></div>
            <div class="popup-marquee"><span>★ HUAC ★ LOS DIEZ DE HOLLYWOOD ★ LISTA NEGRA ★ 1947 ★</span></div>
            <p>
                El Comité de Actividades Antiamericanas<br>
                investiga Hollywood.<br>
                <span class="blink">10 guionistas y directores encarcelados<br>por negarse a declarar.</span>
            </p>
        `
    },
];

// ── DESPACHOS DEL TELEGRAMA TRUMAN ───────────────────────────────

const DESPACHOS_TRUMAN = [
    `WASHINGTON, 12 MAR 1947

LA EXISTENCIA DEL ESTADO GRIEGO SE ENCUENTRA
HOY BAJO AMENAZA DE LAS ACTIVIDADES TERRORISTAS
DE VARIOS MILES DE HOMBRES ARMADOS, DIRIGIDOS
POR COMUNISTAS.

EL GOBIERNO GRIEGO HA SOLICITADO ASISTENCIA
FINANCIERA Y ECONOMICA. ADEMAS, NECESITA
UNA CANTIDAD REDUCIDA DE PERSONAL MILITAR
AMERICANO PARA ASISTIR EN LA RESTAURACION
DE LA SEGURIDAD.

CREO QUE ESTADOS UNIDOS DEBE APOYAR A LOS
PUEBLOS LIBRES QUE RESISTEN LA SUBYUGACION
POR PARTE DE MINORIAS ARMADAS O POR PRESIONES
EXTERNAS.

RECOMIENDO QUE EL CONGRESO PROVEA ASISTENCIA
POR UN VALOR DE 400 MILLONES DE DOLARES
A GRECIA Y TURQUIA.

[FIN DE TRANSMISION — REDIRIGIENDO AL ARCHIVO]`,

    `CABLE CLASIFICADO — REF: GRC-1947-0003
DE: EMBAJADA ATENAS
PARA: SECRETARIO DE ESTADO

LA SITUACION EN GRECIA ES CRITICA.
LAS FUERZAS GUBERNAMENTALES NO PUEDEN
CONTENER AL EJERCITO DEMOCRATICO SIN
APOYO DIRECTO AMERICANO.

RECOMENDACION: ENVIO INMEDIATO DE
ASESORES MILITARES Y EQUIPAMIENTO.
EL RETIRO BRITANICO DEJA UN VACIO
QUE SOLO ESTADOS UNIDOS PUEDE LLENAR.

NOTA: LA OPOSICION INCLUYE ELEMENTOS
QUE NO SON EXCLUSIVAMENTE COMUNISTAS.
ESTA INFORMACION NO DEBE SER DIVULGADA.

[TRANSMISION INTERRUMPIDA — ACCESO DENEGADO]`,

    `INFORME — MISION AMERICANA EN GRECIA
JULIO 1948 — USO OFICIAL EXCLUSIVO

450 ASESORES MILITARES AMERICANOS
OPERANDO EN ZONA DE COMBATE.

APOYO AEREO: PROPORCIONADO POR FUERZA
AEREA DE EE.UU. CON PERSONAL GRIEGO
COMO TRIPULACION NOMINAL.

NAPALM UTILIZADO POR PRIMERA VEZ
EN OPERACIONES CONTRA POBLACIONES
CIVILES EN ZONAS GUERRILLERAS.

ESTIMADO DE BAJAS CIVILES: [REDACTADO]

CONCLUSION: LA INTERVENCION ES EXITOSA.
EL MODELO PUEDE REPLICARSE EN...

[SEÑAL PERDIDA — REDIRIGIENDO]`,
];

let intervaloTruman = null;

function abrirTelegrama() {
    const despacho = DESPACHOS_TRUMAN[Math.floor(Math.random() * DESPACHOS_TRUMAN.length)];

    const horaEl = document.getElementById('truman-hora');
    const textoEl = document.getElementById('truman-text');
    const cursorEl = document.getElementById('truman-cursor');
    const statusEl = document.getElementById('truman-status');

    const h = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const m = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    horaEl.textContent = h + ':' + m + ' EST';

    textoEl.textContent = '';
    statusEl.className = 'truman-status';
    statusEl.textContent = '— TRANSMITIENDO —';
    cursorEl.style.display = 'inline';

    const tov = document.getElementById('truman-overlay'); tov.style.display = 'flex'; tov.classList.add('open');

    let i = 0;
    if (intervaloTruman) clearInterval(intervaloTruman);

    intervaloTruman = setInterval(() => {
        if (i < despacho.length) {
            textoEl.textContent += despacho[i];
            i++;

            const textoActual = textoEl.textContent;
            if (
                textoActual.includes('[FIN DE TRANSMISION') ||
                textoActual.includes('[TRANSMISION INTERRUMPIDA') ||
                textoActual.includes('[SEÑAL PERDIDA')
            ) {
                clearInterval(intervaloTruman);
                cursorEl.style.display = 'none';
                statusEl.className = 'truman-status error';
                statusEl.textContent = '— ERROR — ARCHIVO CLASIFICADO — REDIRIGIENDO —';

                setTimeout(() => {
                    const tov2 = document.getElementById('truman-overlay'); tov2.classList.remove('open'); tov2.style.display = 'none';
                    if (document.startViewTransition) {
                        document.startViewTransition(() => { window.location.href = 'corea.html'; });
                    } else {
                        window.location.href = 'corea.html';
                    }
                }, 2800);
            }
        }
    }, 22);
}

// ── LÓGICA DE POPUPS ──────────────────────────────────────────────

let popupsActivos = [];

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
            btn.href = 'corea.html';
            btn.className = 'next-btn';
            btn.textContent = 'COREA 1950 →';
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

        // 50% telegrama, 50% popups
        if (Math.random() < 0.5) {
            abrirTelegrama();
        } else {
            abrirVisor(datosFila);
        }
    });
});