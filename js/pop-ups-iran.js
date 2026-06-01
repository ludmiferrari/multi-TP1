// ── DESBLOQUEO ───────────────────────────────────────────────────
if (typeof window.estaDesbloqueado === 'undefined') {
    window.estaDesbloqueado = function() {
        return window.ACCESO_DESBLOQUEADO === true;
    };
}

// POOL DE DISTRACTORES — Irán 1953
// Operación Ajax, Guerra Fría, cultura pop años 50

const POPUP_POOL = [
    // ── CONEXIÓN CON OTRO PAÍS — siempre aparece ──────────────────
    {
        title: '⚡ PARALELO — Atenas, 1947',
        link: { href: 'grecia.html', texto: '→ GRECIA 1947' },
        html: `
            <div class="popup-marquee"><span>★ DOCTRINA TRUMAN ★ GRECIA 1947 ★ IRÁN 1953 ★ EL MISMO MANUAL ★</span></div>
            <p>
                Irán 1953. Grecia 1947.<br>
                La misma lógica. El mismo presidente.<br><br>
                <span class="blink">En Grecia: apoyo militar directo.<br>En Irán: golpe de estado encubierto.</span><br><br>
                Truman trazó el marco.<br>
                La CIA perfeccionó el método.<br>
                El petróleo, el motivo real.
            </p>
        `
    },

    // ── DISTRACTORES — cultura pop 1953 ──────────────────────────
    {
        title: 'Billboard Hot 100 — 1953',
        html: `
            <p>
                #1 — <span class="blink">Vaya con Dios — Les Paul & Mary Ford</span><br>
                #2 — Song from Moulin Rouge — Percy Faith<br>
                #3 — The Doggie in the Window — Patti Page<br>
                #4 — Till I Waltz Again with You — Teresa Brewer<br>
                #5 — How Much Is That Doggie — Bob Merrill
            </p>
        `
    },
    {
        title: 'Roman Holiday — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/iran/roman-holiday.jpg" alt="Roman Holiday"></div>
            <p>
                Roman Holiday (1953)<br>
                Audrey Hepburn. Gregory Peck.<br>
                Oscar a Mejor Actriz — Hepburn.<br>
                <span class="blink">El mismo año que la CIA derroca a Mossadegh.</span>
            </p>
        `
    },
    {
        title: 'Tenés un Correo',
        html: `
            <p>
                De: CIA_TEHRAN_STATION<br>
                Asunto: <span class="blink">AJAX — FASE FINAL</span><br><br>
                Operativo Kermit Roosevelt confirma:<br>
                manifestantes contratados en posición.<br>
                Tanques del Sha: en movimiento.<br>
                Radio Teherán: bajo control.<br>
                Mossadegh: aislado.<br><br>
                Costo total de la operación: $100.000.
            </p>
        `
    },
    {
        title: 'From Here to Eternity — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/iran/eternity.jpg" alt="From Here to Eternity"></div>
            <p>
                De Aquí a la Eternidad (1953)<br>
                8 Premios Oscar — incluyendo Mejor Película.<br>
                Burt Lancaster. Frank Sinatra.<br>
                <span class="blink">La película del año — mientras la CIA trabaja en Teherán.</span>
            </p>
        `
    },
    {
        title: 'Coronación de Isabel II — BBC',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/iran/coronacion.jpg" alt="Coronacion Isabel II"></div>
            <div class="popup-marquee"><span>★ CORONACIÓN ISABEL II ★ 2 JUN 1953 ★ BBC EN VIVO ★</span></div>
            <p>
                Isabel II coronada en Westminster.<br>
                Primera coronación transmitida por televisión.<br>
                <span class="blink">El MI6 coordina con la CIA el golpe en Irán<br>77 días después.</span>
            </p>
        `
    },
    {
        title: 'Chevrolet 1953 — Lo Mejor de América',
        html: `
            <div class="popup-img-placeholder">
            <video width="640" height="360" controls autoplay muted loop>
                    <source src="imgs/iran/chevrolet53.mp4" type="video/mp4">
                </video>
            </div>
            <div class="popup-marquee"><span>★ CHEVROLET 1953 ★ EL AUTO DE AMERICA ★ DESDE $1.613 ★</span></div>
            <p>
                El nuevo Chevrolet 1953.<br>
                Primer año con motor V8 disponible.<br>
                <span class="blink">América prospera. El petróleo iraní, también.</span>
            </p>
        `
    },
    {
        title: 'I Love Lucy — CBS',
        html: `
            <div class="popup-img-placeholder">
            <video width="640" height="360" controls autoplay muted loop>
                <source src="imgs/iran/chevrolet53.mp4" type="video/mp4">
            </video>
            </div>
            <p>
                I Love Lucy — CBS<br>
                El programa más visto de América en 1953.<br>
                <span class="blink">Lucille Ball es investigada por el HUAC<br>por supuestas simpatías comunistas.</span><br>
                Sale victoriosa. Mossadegh, no.
            </p>
        `
    },
];

// ── LÓGICA DE VERIFICACIÓN SAVAK ─────────────────────────────────

let pasoActual = 1;
let dialInterval = null;
let dialSegundos = 0;
let dialEnZona = false;

function abrirSAVAK() {
    pasoActual = 1;

    // reset todos los pasos
    document.getElementById('savak-paso-1').style.display = 'block';
    document.getElementById('savak-paso-2').style.display = 'none';
    document.getElementById('savak-paso-3').style.display = 'none';
    document.getElementById('savak-stamp').style.display = 'none';
    document.getElementById('savak-redirect').textContent = '';
    document.getElementById('savak-msg-1').textContent = '';

    // reset grid selecciones
    document.querySelectorAll('.savak-img-item').forEach(item => {
        item.classList.remove('seleccionado');
    });

    // reset dial
    document.getElementById('savak-dial').value = 50;
    document.getElementById('savak-dial-status').textContent = '— Mové el control —';
    document.getElementById('savak-dial-timer').textContent = '';
    dialSegundos = 0;
    dialEnZona = false;
    if (dialInterval) clearInterval(dialInterval);

    // reset paso 3
    document.getElementById('savak-q1').value = '';
    document.getElementById('savak-q2').value = '';
    document.getElementById('savak-q3').value = '';
    document.getElementById('savak-msg-3').textContent = '';

    document.getElementById('savak-overlay').style.display = 'none';
    void document.getElementById('savak-overlay').offsetWidth;
    document.getElementById('savak-overlay').classList.add('open');
    document.getElementById('savak-overlay').style.display = '';
}

// toggle selección en grid
document.querySelectorAll('.savak-img-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('seleccionado');
    });
});

// botón paso 1
document.getElementById('savak-btn-1').addEventListener('click', () => {
    const seleccionados = document.querySelectorAll('.savak-img-item.seleccionado');
    const msgEl = document.getElementById('savak-msg-1');

    if (seleccionados.length === 0) {
        msgEl.textContent = 'ERROR — Debés seleccionar al menos una imagen para continuar.';
        return;
    }

    // siempre falla — cualquier selección es incorrecta según la SAVAK
    const mensajesFallo = [
        'VERIFICACIÓN FALLIDA — Las imágenes seleccionadas no coinciden con los patrones subversivos registrados en la base de datos SAVAK. Intento registrado.',
        'RESPUESTA INCORRECTA — Su criterio de identificación no cumple los estándares de seguridad imperial. Continuando con verificación adicional.',
        'RESULTADO AMBIGUO — Su selección requiere análisis adicional. Procediendo al siguiente paso de verificación.',
    ];
    msgEl.textContent = mensajesFallo[Math.floor(Math.random() * mensajesFallo.length)];

    setTimeout(() => {
        document.getElementById('savak-paso-1').style.display = 'none';
        document.getElementById('savak-paso-2').style.display = 'block';
        iniciarDial();
    }, 1800);
});

// lógica del dial
function iniciarDial() {
    const dial = document.getElementById('savak-dial');
    const status = document.getElementById('savak-dial-status');
    const timer = document.getElementById('savak-dial-timer');

    dialSegundos = 0;
    dialEnZona = false;

    dial.addEventListener('input', actualizarDial);

    function actualizarDial() {
        const val = parseInt(dial.value);

        if (val >= 70) {
            status.textContent = '▶ ZONA LEAL — MANTENÉ AQUÍ';
            status.style.color = '#2a6a2a';
            if (!dialEnZona) {
                dialEnZona = true;
                dialSegundos = 0;
                if (dialInterval) clearInterval(dialInterval);
                dialInterval = setInterval(() => {
                    dialSegundos++;
                    timer.textContent = `Tiempo en zona leal: ${dialSegundos}s / 3s requeridos`;
                    // el dial "resbala" solo hacia zona neutral
                    const nuevaPos = parseInt(dial.value) - (Math.random() * 8 + 2);
                    if (nuevaPos < 70) {
                        dial.value = Math.max(nuevaPos, 0);
                        actualizarDial();
                    }
                    if (dialSegundos >= 3) {
                        clearInterval(dialInterval);
                        timer.textContent = '✓ 3 segundos alcanzados';
                        // igual falla
                        document.getElementById('savak-msg-2').textContent =
                            'CALIBRACIÓN RECHAZADA — El sistema detectó fluctuaciones en su patrón de respuesta. Lealtad no verificable por métodos automatizados. Continuando.';
                        setTimeout(() => {
                            document.getElementById('savak-paso-2').style.display = 'none';
                            document.getElementById('savak-paso-3').style.display = 'block';
                        }, 1800);
                    }
                }, 1000);
            }
        } else if (val >= 35) {
            dialEnZona = false;
            if (dialInterval) clearInterval(dialInterval);
            dialSegundos = 0;
            timer.textContent = '';
            status.textContent = '— Zona neutral — Movete hacia LEAL —';
            status.style.color = '#8a6030';
        } else {
            dialEnZona = false;
            if (dialInterval) clearInterval(dialInterval);
            dialSegundos = 0;
            timer.textContent = '';
            status.textContent = '⚠ ZONA SUBVERSIVA — PELIGRO';
            status.style.color = '#8b0000';
        }
    }
}

// botón paso 3
document.getElementById('savak-btn-3').addEventListener('click', () => {
    const q1 = document.getElementById('savak-q1').value;
    const q2 = document.getElementById('savak-q2').value;
    const q3 = document.getElementById('savak-q3').value;
    const msgEl = document.getElementById('savak-msg-3');

    if (!q1 || !q2 || !q3) {
        msgEl.textContent = 'ERROR — Todos los campos son obligatorios. Completá la declaración.';
        return;
    }

    // siempre denegado
    msgEl.textContent = 'PROCESANDO DECLARACIÓN...';

    setTimeout(() => {
        msgEl.textContent = '';
        document.getElementById('savak-stamp').style.display = 'inline-block';

        let cuenta = 6;
        const cuentaAtras = setInterval(() => {
            document.getElementById('savak-redirect').textContent =
                `— Expediente abierto — Redirigiendo en ${cuenta}s —`;
            cuenta--;
            if (cuenta < 0) {
                clearInterval(cuentaAtras);
                document.getElementById('savak-overlay').classList.remove('open');
                document.getElementById('savak-overlay').style.display = 'none';
                if (document.startViewTransition) {
                    document.startViewTransition(() => { window.location.href = 'irak.html'; });
                } else {
                    window.location.href = 'irak.html';
                }
            }
        }, 1000);
    }, 1400);
});

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
            btn.href = 'irak.html';
            btn.className = 'next-btn';
            btn.textContent = 'IRAK 1991 →';
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

        // 50% verificación SAVAK, 50% popups
        if (Math.random() < 0.5) {
            abrirSAVAK();
        } else {
            abrirVisor(datosFila);
        }
    });
});