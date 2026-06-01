// POOL DE DISTRACTORES — Vietnam 1955–1975
// Movimiento hippie, Woodstock, alunizaje, cultura pop años 60–70

const POPUP_POOL = [
    // ── CONEXIÓN CON OTRO PAÍS — siempre aparece ──────────────────
    {
        title: '⚡ PARALELO — Corea, 1950',
        link: { href: 'corea.html', texto: '→ COREA 1950' },
        html: `
            <div class="popup-marquee"><span>★ GUERRA DE COREA ★ 1950–1953 ★ EL ENSAYO GENERAL ★</span></div>
            <p>
                Vietnam 1955. Corea 1950.<br>
                El mismo argumento. La misma región.<br><br>
                <span class="blink">Contener el comunismo a cualquier precio.</span><br><br>
                Corea: 36.000 americanos muertos.<br>
                Vietnam: 58.000 americanos muertos.<br>
                Civiles: no contabilizados de la misma manera.
            </p>
        `
    },

    // ── DISTRACTORES — cultura pop 1964–1975 ─────────────────────
    {
        title: 'Woodstock — 15 Ago 1969',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/vietnam/woodstock-1969.jpg" alt="Woodstock"></div>
            <div class="popup-marquee"><span>★ 3 DAYS OF PEACE & MUSIC ★ WOODSTOCK ★ WHITE LAKE, NY ★</span></div>
            <p>
                500.000 personas. 32 artistas.<br>
                Jimi Hendrix. Janis Joplin. The Who.<br>
                <span class="blink">El movimiento contra la guerra llega a su pico.</span>
            </p>
        `
    },
    {
        title: 'Alunizaje — Apollo 11',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/vietnam/alunizaje.jpg" alt="Apollo 11"></div>
            <div class="popup-marquee"><span>★ APOLLO 11 ★ LUNA ★ 20 JUL 1969 ★ EN VIVO POR CBS ★</span></div>
            <p>
                Neil Armstrong pisa la Luna.<br>
                600 millones de personas lo ven en vivo.<br>
                <span class="blink">El mismo año: 11.780 soldados americanos<br>muertos en Vietnam.</span>
            </p>
        `
    },
    {
        title: 'Billboard Hot 100 — 1969',
        html: `
            <p>
                #1 — <span class="blink">In the Year 2525 — Zager & Evans</span><br>
                #2 — Honky Tonk Women — Rolling Stones<br>
                #3 — Get Back — The Beatles<br>
                #4 — Aquarius / Let the Sunshine In — 5th Dimension<br>
                #5 — I Can't Get Next to You — Temptations
            </p>
        `
    },
    {
        title: 'Easy Rider — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/vietnam/easy-rider.jpg" alt="Easy Rider"></div>
            <p>
                Easy Rider (1969)<br>
                Peter Fonda. Dennis Hopper. Jack Nicholson.<br>
                Presupuesto: $360.000. Recaudación: $60M.<br>
                <span class="blink">"Buscábamos América y no pudimos encontrarla."</span>
            </p>
        `
    },
    {
        title: 'Tenés un Correo',
        html: `
            <p>
                De: DRAFT_BOARD_Local_47<br>
                Asunto: <span class="blink">NOTIFICACIÓN DE SORTEO — SELECTIVE SERVICE</span><br><br>
                Número de lotería asignado: 127<br>
                Estado: ELEGIBLE PARA LLAMADO<br>
                Fecha límite de presentación: 30 días<br>
                Evasión del servicio: delito federal — 5 años.
            </p>
        `
    },
    {
        title: 'The Beatles — Abbey Road',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/vietnam/abbey-road.jpg" alt="Abbey Road"></div>
            <div class="popup-marquee"><span>★ THE BEATLES ★ ABBEY ROAD ★ 26 SEP 1969 ★ APPLE RECORDS ★</span></div>
            <p>
                Abbey Road — The Beatles.<br>
                El último álbum grabado por la banda.<br>
                <span class="blink">"And in the end, the love you take<br>is equal to the love you make."</span>
            </p>
        `
    },
    {
        title: 'Apocalypse Now — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/vietnam/apocalypse.jpg" alt="Apocalypse Now"></div>
            <p>
                Apocalypse Now (1979) — Francis Ford Coppola<br>
                Palma de Oro — Cannes 1979.<br>
                <span class="blink">"Me encanta el olor a napalm por la mañana."</span><br>
                Producción: 3 años. Presupuesto: $31M.
            </p>
        `
    },
    {
        title: 'Revista LIFE — My Lai',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/vietnam/life-mylai.jpg" alt="My Lai LIFE"></div>
            <div class="popup-marquee"><span>★ LIFE MAGAZINE ★ MASACRE DE MY LAI ★ NOV 1969 ★</span></div>
            <p>
                LIFE publica las fotos de My Lai.<br>
                504 civiles asesinados. 16 Mar 1968.<br>
                <span class="blink">La noticia tardó 20 meses en salir.</span>
            </p>
        `
    },
    
];

// ── DOCUMENTOS DE LOS PAPELES DEL PENTÁGONO ──────────────────────

const PAPELES = [
    {
        titulo: 'Historia de las Decisiones de EE.UU. en Vietnam — Vol. IV',
        docid: 'OSD-HIS-67-001 / SECRETO — SENSIBLE',
        parrafos: [
            {
                texto: 'El objetivo real de los bombardeos en el norte de Vietnam era ',
                redactado: 'demostrar la determinación americana, no lograr objetivos militares específicos',
                resto: '. Los análisis internos del Pentágono indicaban desde 1965 que la campaña de bombardeos no detendría la infiltración del norte.'
            },
            {
                texto: 'En reunión del ',
                redactado: '14 de febrero de 1968',
                resto: ', el Secretario McNamara reconoció ante el Presidente que ',
                redactado2: 'la guerra era esencialmente imposible de ganar con los medios disponibles',
                resto2: '. Esta evaluación nunca fue comunicada al público.'
            },
            {
                texto: 'El incidente del Golfo de Tonkín del ',
                redactado: '4 de agosto de 1964',
                resto: ' — el segundo ataque que justificó la escalada — ',
                redactado2: 'probablemente no ocurrió',
                resto2: '. Los registros de inteligencia de la NSA así lo indicaban al momento de la resolución del Congreso.'
            },
        ]
    },
    {
        titulo: 'Evaluación de Inteligencia — Capacidad Militar NVA/VC',
        docid: 'CIA-SE-68-447 / SECRETO',
        parrafos: [
            {
                texto: 'Las bajas estimadas del enemigo reportadas al público por el MACV eran ',
                redactado: 'sistemáticamente infladas entre un 30% y un 50%',
                resto: '. El procedimiento de conteo de cuerpos incluía ',
                redactado2: 'civiles no combatientes en las cifras de bajas enemigas',
                resto2: '.'
            },
            {
                texto: 'Los programas de pacificación en el Delta del Mekong mostraban ',
                redactado: 'resultados negativos consistentes',
                resto: ' en todos los indicadores internos, contradiciendo los informes públicos del Departamento de Estado.'
            },
            {
                texto: 'Conclusión de esta evaluación: ',
                redactado: 'la estrategia actual no puede producir un resultado militar favorable en ningún horizonte temporal realista',
                resto: '. Recomendación: ',
                redactado2: '[REDACTADO — CLASIFICACIÓN MÁXIMA]',
                resto2: ''
            },
        ]
    },
];

let intentosDesclasificar = 0;
let documentoActual = null;

const MENSAJES_DESCLASIFICAR = [
    'ACCESO DENEGADO — Clasificación superior requerida.',
    'SOLICITUD RECHAZADA — Archivo bajo revisión de seguridad del DOD.',
    'ADVERTENCIA — Este intento ha sido registrado. Redirigiendo.',
];

function construirDocumento(papel) {
    const body = document.getElementById('penpapers-body');
    body.innerHTML = '';

    document.getElementById('penpapers-title').textContent = papel.titulo;
    document.getElementById('penpapers-docid').textContent = papel.docid;

    papel.parrafos.forEach((p, idx) => {
        const div = document.createElement('div');
        div.className = 'penpapers-p';

        let html = p.texto;
        html += `<span class="redacted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
        if (p.resto) html += p.resto;
        if (p.redactado2) {
            html += `<span class="redacted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
        }
        if (p.resto2) html += p.resto2;

        div.innerHTML = html;
        body.appendChild(div);

        setTimeout(() => div.classList.add('visible'), idx * 400);
    });

    // botón de desclasificar
    const btnWrap = document.createElement('div');
    btnWrap.style.marginTop = '20px';

    const btn = document.createElement('button');
    btn.className = 'penpapers-btn';
    btn.textContent = '— SOLICITAR DESCLASIFICACIÓN —';
    btn.addEventListener('click', intentarDesclasificar);

    const msg = document.createElement('div');
    msg.className = 'penpapers-msg';
    msg.id = 'penpapers-msg';

    btnWrap.appendChild(btn);
    btnWrap.appendChild(msg);
    body.appendChild(btnWrap);
}

function intentarDesclasificar() {
    intentosDesclasificar++;
    const msgEl = document.getElementById('penpapers-msg');
    const footer = document.getElementById('penpapers-footer');

    if (intentosDesclasificar < 3) {
        msgEl.textContent = MENSAJES_DESCLASIFICAR[intentosDesclasificar - 1];
    } else {
        msgEl.textContent = MENSAJES_DESCLASIFICAR[2];
        footer.className = 'penpapers-footer error';
        footer.textContent = '— ACCESO REVOCADO — REDIRIGIENDO —';
        setTimeout(() => {
            document.getElementById('penpapers-overlay').classList.remove('open');
            if (document.startViewTransition) {
                document.startViewTransition(() => { window.location.href = 'cuba.html'; });
            } else {
                window.location.href = 'cuba.html';
            }
        }, 2200);
    }
}

function abrirPapelesDelPentagono() {
    intentosDesclasificar = 0;
    documentoActual = PAPELES[Math.floor(Math.random() * PAPELES.length)];

    document.getElementById('penpapers-footer').className = 'penpapers-footer';
    document.getElementById('penpapers-footer').textContent = '— DOCUMENTO CLASIFICADO — DEPARTAMENTO DE DEFENSA EE.UU. —';

    document.getElementById('penpapers-overlay').classList.add('open');
    construirDocumento(documentoActual);
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
            btn.href = 'cuba.html';
            btn.className = 'next-btn';
            btn.textContent = 'CUBA 1961 →';
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

        // 50% papeles del pentágono, 50% popups
        if (Math.random() < 0.5) {
            abrirPapelesDelPentagono();
        } else {
            abrirVisor(datosFila);
        }
    });
});