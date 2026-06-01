// POOL DE DISTRACTORES — Alemania 1945–1952
// Ocupación americana: Plan Marshall, Nuremberg, cultura pop años 40–50

const POPUP_POOL = [
    // ── CONEXIÓN CON OTRO PAÍS — siempre aparece ──────────────────
    {
        title: '⚡ PARALELO — Corea, 1945',
        link: { href: 'corea.html', texto: '→ COREA 1950' },
        html: `
            <div class="popup-marquee"><span>★ DIVISIÓN EN ZONAS ★ ALEMANIA 1945 ★ COREA 1945 ★ EL MISMO MANUAL ★</span></div>
            <p>
                Alemania 1945. Corea 1945.<br>
                Dos países. Dos divisiones arbitrarias.<br><br>
                <span class="blink">El paralelo 38 en Corea.<br>El río Elba en Alemania.</span><br><br>
                Trazadas en semanas.<br>
                Las consecuencias: décadas.
            </p>
        `
    },

    // ── DISTRACTORES — cultura pop 1945–1952 ─────────────────────
    {
        title: 'Billboard — 1945',
        html: `
            <p>
                #1 — <span class="blink">Sentimental Journey — Doris Day</span><br>
                #2 — Till the End of Time — Perry Como<br>
                #3 — Rum and Coca-Cola — Andrews Sisters<br>
                #4 — It's Been a Long, Long Time — Harry James<br>
                #5 — On the Atchison, Topeka and the Santa Fe — Judy Garland
            </p>
        `
    },
    {
        title: 'It\'s a Wonderful Life — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/alemania/wonderful-life.jpg" alt="It's a Wonderful Life"></div>
            <p>
                ¡Qué bello es vivir! (1946)<br>
                Frank Capra. James Stewart.<br>
                <span class="blink">El film más navideño de América.<br>Investigado por la FBI por "propaganda comunista".</span>
            </p>
        `
    },
    {
        title: 'Plan Marshall — $13.000 Millones',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/alemania/marshall.webp" alt="Plan Marshall"></div>
            <div class="popup-marquee"><span>★ PLAN MARSHALL ★ RECONSTRUCCIÓN DE EUROPA ★ 1948–1952 ★</span></div>
            <p>
                $13.000 millones para reconstruir Europa.<br>
                Condición no publicitada:<br>
                <span class="blink">excluir partidos comunistas de los gobiernos.</span>
            </p>
        `
    },
    {
        title: 'Tenés un Correo',
        html: `
            <p>
                De: OMGUS_ICD<br>
                Asunto: <span class="blink">LICENCIA DE PRENSA — RENOVACIÓN</span><br><br>
                Su licencia de publicación vence en 30 días.<br>
                Para renovar: presentar contenidos del<br>
                último trimestre para revisión ICD.<br>
                Sin licencia: publicación ilegal bajo<br>
                Ley de Control de Medios OMGUS Art. 3.
            </p>
        `
    },
    {
        title: 'Casablanca — Ahora en Berlín',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/alemania/casablanca.jpg" alt="Casablanca Berlin"></div>
            <p>
                Casablanca (1942) — aprobado por OMGUS.<br>
                Hollywood llega a la Alemania ocupada.<br>
                <span class="blink">Solo películas aprobadas por ICD<br>en todos los cines de la zona americana.</span>
            </p>
        `
    },
    {
        title: 'Coca-Cola — Ahora en Alemania',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/alemania/coca.jpg" alt="Coca-Cola Alemania"></div>
            <div class="popup-marquee"><span>★ COCA-COLA ★ EL SABOR DE AMERICA ★ AHORA EN FRANKFURT ★</span></div>
            <p>
                Coca-Cola reabre su planta en Alemania.<br>
                Primera entrega: para tropas americanas.<br>
                <span class="blink">El capitalismo tiene un sabor reconocible.</span>
            </p>
        `
    },
    {
        title: 'Marlboro — El Cigarrillo Americano',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/alemania/malboro.webp" alt="Marlboro"></div>
            <p>
                Marlboro — el cigarrillo americano.<br>
                En el mercado negro de posguerra:<br>
                moneda de cambio más estable que el marco.<br>
                <span class="blink">Un cartón = una semana de comida.</span>
            </p>
        `
    },
];

// ── PRESSEKONTROLLE — datos de revisión ──────────────────────────

const CRITERIOS_REVISION = [
    { texto: 'Verificando referencias al Tercer Reich...', resultado: 'ok' },
    { texto: 'Escaneando contenido crítico de fuerzas aliadas...', resultado: 'fail' },
    { texto: 'Revisando menciones de desnazificación...', resultado: 'ok' },
    { texto: 'Cotejando con lista de temas prohibidos ICD...', resultado: 'fail' },
    { texto: 'Verificando fuentes de información...', resultado: 'ok' },
    { texto: 'Aplicando directiva OMGUS Art. 4(b)...', resultado: 'fail' },
];

const MATERIALES_REVISION = [
    'Material periodístico — archivo fotográfico',
    'Documento histórico — zona americana',
    'Fotografía de prensa — archivo OMGUS',
    'Registro de archivo — uso periodístico',
    'Material de prensa — revisión obligatoria',
];

let intervaloRevision = null;

// limpiar intervalo pendiente al cargar
window.addEventListener('load', () => {
    if (intervaloRevision) {
        clearInterval(intervaloRevision);
        intervaloRevision = null;
    }
});

function abrirPressekontrolle(etiqueta) {
    const materialEl = document.getElementById('pk-material');
    const checklistEl = document.getElementById('pk-checklist');
    const barFill = document.getElementById('pk-bar-fill');
    const percent = document.getElementById('pk-percent');
    const veredictoEl = document.getElementById('pk-verdict');
    const redirectEl = document.getElementById('pk-redirect');

    // reset
    const mat = etiqueta
        ? `Material bajo revisión: ${etiqueta}`
        : MATERIALES_REVISION[Math.floor(Math.random() * MATERIALES_REVISION.length)];
    materialEl.textContent = mat;
    checklistEl.innerHTML = '';
    barFill.style.width = '0%';
    percent.textContent = '0%';
    veredictoEl.textContent = '';
    veredictoEl.className = 'pk-verdict';
    redirectEl.textContent = '';

    document.getElementById('pk-overlay').classList.add('open');

    // construir items del checklist ocultos
    const items = CRITERIOS_REVISION.map((c, i) => {
        const div = document.createElement('div');
        div.className = 'pk-check-item';

        const icon = document.createElement('span');
        icon.className = 'pk-check-icon wait';
        icon.textContent = '◌';

        const txt = document.createElement('span');
        txt.textContent = c.texto;

        div.appendChild(icon);
        div.appendChild(txt);
        checklistEl.appendChild(div);
        return { div, icon, resultado: c.resultado };
    });

    let paso = 0;
    let porcentaje = 0;
    let hayFalla = false;

    if (intervaloRevision) clearInterval(intervaloRevision);

    intervaloRevision = setInterval(() => {
        // si el overlay se cerró, parar
        if (!document.getElementById('pk-overlay').classList.contains('open')) {
            clearInterval(intervaloRevision);
            return;
        }

        porcentaje += Math.random() * 4 + 1.5;
        if (porcentaje > 99) porcentaje = 99;

        barFill.style.width = porcentaje + '%';
        percent.textContent = Math.floor(porcentaje) + '%';

        const nuevoPaso = Math.floor((porcentaje / 99) * CRITERIOS_REVISION.length);

        while (paso < nuevoPaso && paso < items.length) {
            const item = items[paso];
            item.div.classList.add('visible');

            if (item.resultado === 'ok') {
                item.icon.className = 'pk-check-icon ok';
                item.icon.textContent = '✓';
            } else {
                item.icon.className = 'pk-check-icon fail';
                item.icon.textContent = '✗';
                hayFalla = true;
            }

            paso++;
        }

        if (porcentaje >= 99) {
            clearInterval(intervaloRevision);
            barFill.style.width = '100%';
            percent.textContent = '100%';

            setTimeout(() => {
                if (hayFalla) {
                    veredictoEl.textContent = 'CONFISCADO';
                    veredictoEl.className = 'pk-verdict confiscado';

                    let cuenta = 6;
                    const cuentaAtras = setInterval(() => {
                        redirectEl.textContent = `— Material retenido — Redirigiendo en ${cuenta}s —`;
                        cuenta--;
                        if (cuenta < 0) {
                            clearInterval(cuentaAtras);
                            document.getElementById('pk-overlay').classList.remove('open');
                            if (document.startViewTransition) {
                                document.startViewTransition(() => { window.location.href = 'japon.html'; });
                            } else {
                                window.location.href = 'japon.html';
                            }
                        }
                    }, 1000);
                } else {
                    veredictoEl.textContent = 'APROBADO';
                    veredictoEl.className = 'pk-verdict aprobado';
                    setTimeout(() => {
                        document.getElementById('pk-overlay').classList.remove('open');
                    }, 1800);
                }
            }, 600);
        }
    }, 130);
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

        // 50% Pressekontrolle, 50% popups
        if (Math.random() < 0.5) {
            abrirPressekontrolle(datosFila.label);
        } else {
            abrirVisor(datosFila);
        }
    });
});