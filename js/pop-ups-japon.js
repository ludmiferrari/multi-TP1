// POOL DE DISTRACTORES — Japón 1945–1952
// Ocupación americana: Hollywood, Pachinko, béisbol, moda estadounidense,
// hula-hoops, revistas, electrodomésticos, cultura pop

const POPUP_POOL = [
    {
        title: "Hollywood llega a Japón",
        html: `
            <div class="popup-img-placeholder">[img: afiche japonés Lo que el viento se llevó 1952]</div>
            <div class="popup-marquee"><span>★ EN CARTELERA EN TOKIO ★ LO QUE EL VIENTO SE LLEVÓ ★ APROBADO POR SCAP ★</span></div>
            <p>Cine americano aprobado por GHQ.<br><span class="blink">Ahora en el Teatro Hibiya — Tokio</span></p>
        `
    },
    {
        title: "Béisbol — Liga de Ocupación",
        html: `
            <div class="popup-img-placeholder">[img: soldados americanos jugando béisbol en Japón 1946]</div>
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
            <div class="popup-img-placeholder">[img: cartel neón sala de pachinko Tokio 1948]</div>
            <div class="popup-marquee"><span>★ PACHINKO ★ パチンコ ★ ABIERTO 24HS ★ GINZA ★</span></div>
            <p>El entretenimiento más nuevo de Tokio.<br><span class="blink">10 yenes por jugada — Ginza</span></p>
        `
    },
    {
        title: "Revista LIFE — Edición Japón",
        html: `
            <div class="popup-img-placeholder">[img: tapa revista LIFE edición Japón 1946]</div>
            <p>
                Revista LIFE — Edición Especial Japón<br>
                "El Nuevo Japón: Reconstrucción bajo MacArthur"<br>
                <span class="blink">En kioscos ahora — 10¢</span>
            </p>
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
            <div class="popup-img-placeholder">[img: publicidad moda estilo americano Japón 1950]</div>
            <p>
                Tienda Mitsukoshi — Tokio<br>
                Nueva colección estilo americano:<br>
                Medias de nylón, faldas de caniche, zapatos saddle.<br>
                <span class="blink">La mujer moderna — estilo americano.</span>
            </p>
        `
    },
    {
        title: "Furor del Hula-Hoop — 1950",
        html: `
            <div class="popup-img-placeholder">[img: niños con hula-hoops en calle de Tokio 1950]</div>
            <p>
                El furor del hula-hoop americano<br>
                llega a los patios de las escuelas japonesas.<br>
                <span class="blink">★ 25 millones vendidos en 4 meses ★</span>
            </p>
        `
    },
    {
        title: "Electrodomésticos GE — Ya Disponibles",
        html: `
            <div class="popup-img-placeholder">[img: publicidad heladera GE Japón 1948]</div>
            <div class="popup-marquee"><span>★ GENERAL ELECTRIC ★ LA COCINA AMERICANA ★ AHORA EN JAPÓN ★</span></div>
            <p>Heladeras y lavarropas GE.<br>Disponibles en tiendas PX.<br><span class="blink">Viví a la americana.</span></p>
        `
    },
    {
        title: "Frank Sinatra — Concierto en Tokio",
        html: `
            <div class="popup-img-placeholder">[img: afiche concierto Frank Sinatra Japón 1950]</div>
            <p>
                Frank Sinatra<br>
                En vivo en el Teatro Ernie Pyle, Tokio<br>
                <span class="blink">★ Presentado por USO ★</span><br>
                Solo para personal aliado e invitados.
            </p>
        `
    },
    {
        title: "Stars and Stripes — Noticias Diarias",
        html: `
            <div class="popup-img-placeholder">[img: diario Stars and Stripes edición Japón 1946]</div>
            <p>
                Stars and Stripes — Edición Pacífico<br>
                Las noticias de tu país, todos los días.<br>
                <span class="blink">MacArthur: "La recuperación de Japón va bien."</span><br>
                Disponible en todos los puestos PX.
            </p>
        `
    },
    {
        title: "Cigarrillos Chesterfield",
        html: `
            <div class="popup-img-placeholder">[img: publicidad Chesterfield 1948 — soldado en Japón]</div>
            <p>
                Chesterfield — el favorito de América.<br>
                "Satisfacen."<br>
                <span class="blink">Disponibles en tiendas PX en todo Japón.</span>
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
        title: "Jeans Levi's — Especial PX",
        html: `
            <div class="popup-img-placeholder">[img: publicidad Levi's 1949 — soldado americano en Japón]</div>
            <p>
                Levi Strauss & Co.<br>
                Denim americano original.<br>
                <span class="blink">Ahora en mercado negro de Tokio — $40 el par.</span>
            </p>
        `
    },
    {
        title: "Reader's Digest — Edición Japón",
        html: `
            <div class="popup-img-placeholder">[img: tapa Reader's Digest edición Japón 1947]</div>
            <div class="popup-marquee"><span>★ READER'S DIGEST ★ RESUMIDO PARA GENTE OCUPADA ★ APROBADO POR GHQ ★</span></div>
            <p>Primera revista extranjera aprobada por SCAP.<br><span class="blink">A la venta en todos los kioscos aliados.</span></p>
        `
    },
    {
        title: "MacArthur — Hombre del Año",
        html: `
            <div class="popup-img-placeholder">[img: tapa TIME Magazine MacArthur Hombre del Año 1950]</div>
            <p>
                Revista TIME<br>
                Hombre del Año: Gral. Douglas MacArthur<br>
                <span class="blink">"El Libertador de Japón."</span><br>
                Edición enero 1951 — 15¢
            </p>
        `
    },
];

// Países para redireccionamiento random (excluyendo japón)
const PAISES = ['argentina', 'corea', 'alemania', 'grecia', 'iran', 'guatemala',
    'cuba', 'libano', 'siria', 'venezuela', 'granada', 'pakistan', 'irak',
    'afganistan', 'panama', 'china', 'libia', 'somalia', 'kuwait',
    'republica-dominicana', 'vietnam', 'cambodia', 'laos', 'haiti', 'yemen',
    'yugoslavia', 'kosovo', 'chile'];

function paisAleatorio() {
    return PAISES[Math.floor(Math.random() * PAISES.length)];
}

function redirigirAleatorio() {
    const pais = paisAleatorio();
    if (document.startViewTransition) {
        document.startViewTransition(() => { window.location.href = `${pais}.html`; });
    } else {
        window.location.href = `${pais}.html`;
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
                redirigirAleatorio();
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
            redirigirAleatorio();
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

    div.innerHTML = `
        <div class="popup-bar">
            <span>${data.title}</span>
            <button class="popup-close">x</button>
        </div>
        <div class="popup-content">${data.html}</div>
    `;

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

    const seleccionados = mezclar(POPUP_POOL).slice(0, 5);
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