// POOL DE DISTRACTORES — Japón 1945–1952
// Ocupación americana: Hollywood, Pachinko, béisbol, moda estadounidense,
// hula-hoops, revistas, electrodomésticos, cultura pop

const POPUP_POOL = [
    {
        title: "Hollywood llega a Japón",
        html: `
            <div class="popup-img-placeholder"></div>
            <div class="popup-marquee"><span>★ EN CARTELERA EN TOKIO ★ LO QUE EL VIENTO SE LLEVÓ ★ APROBADO POR SCAP ★</span></div>
            <p>Cine americano aprobado por GHQ.<br><span class="blink">Ahora en el Teatro Hibiya — Tokio</span></p>
        `
    },
    {
        title: "Beisbol — Liga de Ocupación",
        html: `
            <div class="popup-img-placeholder"><img src="imgs/japan/beisbol.webp"></div>
            <p>
                ¡El béisbol americano llega a Japón!<br>
                GHQ promueve la liga nacional.<br>
                <span class="blink">★ Yomiuri Giants vs. Osaka Tigers ★</span><br>
                Domingo — Estadio Korakuen, Tokio
            </p>
        `
    },
    {
        title: "Pachinko — Ahora Abierto",
        html: `
            <div class="popup-img-placeholder"><img src="imgs/japan/pachinko.jpg"></div>
            <div class="popup-marquee"><span>★ PACHINKO ★ パチンコ ★ ABIERTO 24HS ★ GINZA ★</span></div>
            <p>El entretenimiento más nuevo de Tokio.<br><span class="blink">10 yenes por jugada — Ginza</span></p>
        `
    },
    {
        title: "Coca-Cola — Ahora en Japón",
        html: `
            <div class="popup-img-placeholder">[img: publicidad Coca-Cola Japón 1946 — soldado le da botella a niño]</div>
            <div class="popup-marquee"><span>★ COCA-COLA ★ EL SABOR DE AMERICA ★ AHORA EN JAPÓN ★</span></div>
            <p>Traída a Japón por las fuerzas americanas.<br><span class="blink">Refrescante. Familiar. Americana.</span></p>
        `
    },
    {
        title: "Moda Americana — Mitsukoshi",
        html: `
            <div class="popup-img-placeholder"><img src="imgs/japan/moda.webp"></div>
            <p>
                Tienda Mitsukoshi — Tokio<br>
                Nueva colección de trajes de baño americanos<br>
                <span class="blink">La mujer moderna — estilo americano.</span>
            </p>
        `
    },
    {
        title: "Furor del Hula-Hoop — 1950",
        html: `
            <div class="popup-img-placeholder"><img src="imgs/japan/hula.webp"></div>
            <p>
                El furor del hula-hoop americano<br>
                llega a los patios de las escuelas japonesas.<br>
                <span class="blink">★ 25 millones vendidos en 4 meses ★</span>
            </p>
        `
    },
    {
        title: "Billboard Hot 100 — 1950",
        html: `
            <p>
                #1 — <span class="blink">Goodnight Irene — Gordon Jenkins</span><br>
                #2 — Tennessee Waltz — Patti Page<br>
                #3 — Mona Lisa — Nat King Cole<br>
                #4 — Harbor Lights — Sammy Kaye<br>
                #5 — Music! Music! Music! — Teresa Brewer
            </p>
        `
    },
    {
        title: "Nueva Feria Estadounidense!",
        html: `
            <div class="popup-img-placeholder"><img src="imgs/japan/feria.webp"></div>
            <div class="popup-marquee"><span>★ FERIA USA ★ DONDE PODES VER LO MEJOR DE LA CULTURA AMERICANA ★</span></div>
            <p>Primera revista extranjera aprobada por SCAP.<br><span class="blink">Abierto de Lunes a Viernes</span></p>
        `
    },
    // ── CONEXIÓN CON OTRO PAÍS ─────────────────────────────────────
    {
        title: '⚡ PARALELO — Berlín, 1945',
        link: { href: 'alemania.html', texto: '→ ALEMANIA 1945' },
        html: `
            <div class="popup-marquee"><span>★ OCUPACIÓN ALIADA ★ BERLÍN 1945 ★ ZONA AMERICANA ★</span></div>
            <p>
                Tokio 1945. Berlín 1945.<br>
                Dos ocupaciones. Un mismo manual.<br><br>
                <span class="blink">Censura de prensa. Purga política. Nueva constitución.</span><br><br>
                En Alemania: desnazificación.<br>
                En Japón: desmilitarización.<br>
                En ambos casos — la narrativa, escrita por el vencedor.
            </p>
        `
    },
];

function redirigirTraduccion() {
    if (document.startViewTransition) {
        document.startViewTransition(() => { window.location.href = 'corea.html'; });
    } else {
        window.location.href = 'corea.html';
    }
}

function redirigirConfiscacion() {
    if (document.startViewTransition) {
        document.startViewTransition(() => { window.location.href = 'vietnam.html'; });
    } else {
        window.location.href = 'vietnam.html';
    }
}

let popupsActivos = [];
let intervaloTraduccion = null;

// ── PANTALLA DE TRADUCCIÓN ────────────────────────────────────────

const FRASES_JAPONESAS = ['占領期間', '検閲', '原子爆弾', '降伏文書', '連合国軍', '秘密文書'];
const MENSAJES_LOG = [
    '— Cargando conjunto de caracteres...',
    '— Detectando idioma del documento...',
    '— Cotejando con glosario SCAP...',
    '— Aplicando filtros de censura...',
    '— Verificando habilitación de seguridad...',
    '— Traducción completa. Preparando salida...',
];

function abrirTraduccion() {
    document.getElementById('translation-overlay').classList.add('open');
    ejecutarBucleTraduccion();
}

function ejecutarBucleTraduccion() {
    let porcentaje = 0;
    let pasoLog = 0;

    document.getElementById('t-bar-fill').style.width = '0%';
    document.getElementById('t-percent').textContent = '0%';
    document.getElementById('t-status-text').textContent = 'Inicializando...';
    document.getElementById('tlog-7').style.display = 'none';
    for (let i = 1; i <= 6; i++) {
        document.getElementById('tlog-' + i).classList.remove('active');
    }

    document.getElementById('t-japanese').textContent =
        FRASES_JAPONESAS[Math.floor(Math.random() * FRASES_JAPONESAS.length)];

    if (intervaloTraduccion) clearInterval(intervaloTraduccion);

    intervaloTraduccion = setInterval(() => {
        porcentaje += Math.random() * 3 + 0.5;
        if (porcentaje > 99) porcentaje = 99;

        document.getElementById('t-bar-fill').style.width = porcentaje + '%';
        document.getElementById('t-percent').textContent = Math.floor(porcentaje) + '%';

        const paso = Math.floor((porcentaje / 99) * 6);
        if (paso > pasoLog && paso <= 6) {
            pasoLog = paso;
            document.getElementById('tlog-' + pasoLog).classList.add('active');
            document.getElementById('t-status-text').textContent = MENSAJES_LOG[pasoLog - 1].replace('— ', '');
        }

        if (porcentaje >= 99) {
            clearInterval(intervaloTraduccion);
            setTimeout(() => {
                document.getElementById('tlog-7').style.display = 'block';
                document.getElementById('t-status-text').textContent = 'ERROR — Reiniciando...';
                setTimeout(() => {
                    ejecutarBucleTraduccionFinal();
                }, 2000);
            }, 800);
        }
    }, 120);
}

function ejecutarBucleTraduccionFinal() {
    let porcentaje = 0;
    document.getElementById('t-bar-fill').style.width = '0%';
    document.getElementById('t-percent').textContent = '0%';
    document.getElementById('tlog-7').style.display = 'none';
    document.getElementById('t-status-text').textContent = 'Reinicializando...';
    for (let i = 1; i <= 6; i++) {
        document.getElementById('tlog-' + i).classList.remove('active');
    }

    intervaloTraduccion = setInterval(() => {
        porcentaje += Math.random() * 4 + 1;
        if (porcentaje > 99) porcentaje = 99;

        document.getElementById('t-bar-fill').style.width = porcentaje + '%';
        document.getElementById('t-percent').textContent = Math.floor(porcentaje) + '%';

        if (porcentaje >= 99) {
            clearInterval(intervaloTraduccion);
            document.getElementById('tlog-7').style.display = 'block';
            document.getElementById('t-status-text').textContent = 'ACCESO DENEGADO — REDIRIGIENDO';

            setTimeout(() => {
                document.getElementById('translation-overlay').classList.remove('open');
                redirigirTraduccion();
            }, 2000);
        }
    }, 100);
}

// ── AVISO DE CONFISCACIÓN ─────────────────────────────────────────

const MOTIVOS_CONFISCACION = [
    "El contenido hace referencia a bajas de la bomba atómica — prohibido bajo el Artículo 4(f) SCAPIN-33.",
    "Material crítico de la política de Ocupación Aliada — prohibido bajo el Artículo 4(a) SCAPIN-33.",
    "El documento contiene testimonios suprimidos de la población civil — Artículo 2(d).",
    "Referencias al gobierno japonés de pre-Ocupación — Artículo 6(b) SCAPIN-33.",
    "Material originado en organización de la lista prohibida del SCAP — Artículo 9.",
];

function abrirConfiscacion(etiqueta) {
    const numeroOrden = Math.floor(Math.random() * 90000) + 10000;
    const motivo = MOTIVOS_CONFISCACION[Math.floor(Math.random() * MOTIVOS_CONFISCACION.length)];

    document.getElementById('conf-order-num').textContent = numeroOrden;
    document.getElementById('conf-date').textContent = 'Octubre 1946 — Tokio';
    document.getElementById('conf-material').textContent = etiqueta;
    document.getElementById('conf-grounds').textContent = motivo;
    document.getElementById('conf-redirect-msg').textContent = '';

    document.getElementById('confiscation-overlay').classList.add('open');

    let cuenta = 8;
    const intervaloContador = setInterval(() => {
        cuenta--;
        document.getElementById('conf-redirect-msg').textContent =
            `Redirigiendo en ${cuenta}s...`;
        if (cuenta <= 0) {
            clearInterval(intervaloContador);
            document.getElementById('confiscation-overlay').classList.remove('open');
            redirigirConfiscacion();
        }
    }, 1000);
}

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
        setTimeout(() => popup.classList.add('visible'), i * 1000);
    });
}

// ── CLICK EN RENGLÓN ──────────────────────────────────────────────

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
            audioEl.style.cssText = 'display:block; margin: 0 auto; width:100%; max-width:800px; margin-top:12px;';
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

    if (type === 'img' && img) {
        lanzarPopups();
    } else {
        popupsActivos.forEach(p => p.remove());
        popupsActivos = [];
    }
}

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

        // audio y placeholder: nunca interrupciones
        if (datosFila.type === 'audio' || !datosFila.img) {
            abrirVisor(datosFila);
            return;
        }

        // random entre 3 opciones
        const sorteo = Math.random();
        if (sorteo < 0.33) {
            abrirTraduccion();
        } else if (sorteo < 0.66) {
            abrirConfiscacion(datosFila.label);
        } else {
            abrirVisor(datosFila);
        }
    });
});
