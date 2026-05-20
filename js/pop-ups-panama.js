// POOL DE DISTRACTORES — Panamá 1989
// Primera guerra televisada en vivo por CNN
// Cultura pop: fin de la Guerra Fría, caída del Muro, MTV, blockbusters

const POPUP_POOL = [
    // ── CONEXIÓN CON OTRO PAÍS — siempre aparece ──────────────────
    {
        title: '⚡ ANTECEDENTE — La Habana, 1961',
        link: { href: 'cuba.html', texto: '→ CUBA 1961' },
        html: `
            <div class="popup-marquee"><span>★ BAHÍA DE COCHINOS ★ CIA ★ 1961 ★ EL MISMO ARGUMENTO ★</span></div>
            <p>
                Panamá 1989. Cuba 1961.<br>
                Noriega: agente CIA por 16 años.<br>
                Castro: objetivo CIA por décadas.<br><br>
                <span class="blink">Cuando el activo se vuelve inconveniente,<br>se convierte en el enemigo.</span><br><br>
                El mismo Caribe. El mismo manual.
            </p>
        `
    },

    // ── DISTRACTORES — cultura pop 1989 ──────────────────────────
    {
        title: 'MTV — En Reproducción',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/like-a-prayer.jpg" alt="Like a Prayer"></div>
            <div class="popup-marquee"><span>★ POLÉMICA ★ MADONNA — LIKE A PRAYER ★ VIDEO PROHIBIDO ★ MTV ★</span></div>
            <p>
                Pepsi cancela contrato de $5M con Madonna.<br>
                <span class="blink">▶ EN ROTACIÓN PESADA — MTV</span>
            </p>
        `
    },
    {
        title: 'Billboard Hot 100 — Dic 1989',
        html: `
            <p>
                #1 — <span class="blink">Another Day in Paradise — Phil Collins</span><br>
                #2 — We Didn't Start the Fire — Billy Joel<br>
                #3 — Don't Know Much — Linda Ronstadt<br>
                #4 — When I See You Smile — Bad English<br>
                #5 — Girl I'm Gonna Miss You — Milli Vanilli
            </p>
        `
    },
    {
        title: 'Batman — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/batman.jpg" alt="Batman 1989"></div>
            <p>
                Batman (1989) — Tim Burton<br>
                Michael Keaton. Jack Nicholson.<br>
                <span class="blink">★ $411M en taquilla mundial ★</span><br>
                "¿Ya escuchaste la buena nueva?"
            </p>
        `
    },
    {
        title: 'Caída del Muro — Berlín, 9 Nov',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/muro-berlin.jpg" alt="Muro de Berlin"></div>
            <div class="popup-marquee"><span>★ URGENTE ★ BERLÍN ★ EL MURO CAE ★ 9 NOV 1989 ★ CNN EN VIVO ★</span></div>
            <p>
                El Muro de Berlín cae.<br>
                CNN transmite en vivo 24 horas.<br>
                <span class="blink">41 días después — EE.UU. invade Panamá.</span>
            </p>
        `
    },
    {
        title: 'Nintendo Game Boy — Ya Disponible',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/gameboy.jpg" alt="Game Boy"></div>
            <div class="popup-marquee"><span>★ NINTENDO GAME BOY ★ LLEVALO A TODAS PARTES ★ $89.99 ★</span></div>
            <p>
                El futuro del entretenimiento portátil.<br>
                Incluye: Tetris.<br>
                <span class="blink">Ya en todas las jugueterías.</span>
            </p>
        `
    },
    {
        title: 'Seinfeld — Piloto en NBC',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/seinfeld.jpg" alt="Seinfeld"></div>
            <p>
                "The Seinfeld Chronicles"<br>
                Piloto — NBC, 5 de julio de 1989.<br>
                <span class="blink">Calificación del ejecutivo de NBC:<br>"No tiene ningún elemento dramático."</span>
            </p>
        `
    },
    {
        title: 'Tenés un Correo',
        html: `
            <p>
                De: CNN_Breaking<br>
                Asunto: <span class="blink">OPERACIÓN EN CURSO — PANAMÁ</span><br><br>
                Periodistas excluidos de la zona de operaciones.<br>
                El Pentágono controla todas las imágenes.<br>
                Pool de prensa: acceso denegado 12 horas.<br>
                Primera guerra "en vivo" — según el Pentágono.
            </p>
        `
    },
    {
        title: 'Back to the Future II — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/bttf2.jpg" alt="Back to the Future II"></div>
            <p>
                Volver al Futuro II (1989)<br>
                22 de noviembre — estreno mundial.<br>
                <span class="blink">El año 2015: autos voladores, tablas levitadoras.<br>Sin presidentes dictadores.</span>
            </p>
        `
    },
    {
        title: "McDonald's — ¿Estás Listo para el Mac Tonight?",
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/mcdonalds89.jpg" alt="McDonalds 1989"></div>
            <div class="popup-marquee"><span>★ McDONALD'S ★ MÁS DE 50 BILLONES SERVIDOS ★</span></div>
            <p>
                La primera cadena de comida rápida<br>
                en abrir en Moscú — enero 1990.<br>
                <span class="blink">30.000 clientes el primer día.</span><br>
                El capitalismo llegó.
            </p>
        `
    },
    {
        title: 'The Simpsons — Estreno Fox',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/simpsons.jpg" alt="The Simpsons"></div>
            <div class="popup-marquee"><span>★ ESTRENO ★ THE SIMPSONS ★ FOX ★ 17 DIC 1989 ★</span></div>
            <p>
                Primer episodio: "Simpsons Roasting on an Open Fire"<br>
                Fox. 17 de diciembre de 1989.<br>
                <span class="blink">3 días antes de la invasión de Panamá.</span>
            </p>
        `
    },
    {
        title: 'Walkman Sony — Modelo WM-101',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/panama/walkman.jpg" alt="Sony Walkman"></div>
            <p>
                Sony Walkman WM-101<br>
                El más delgado jamás fabricado.<br>
                <span class="blink">★ $79.99 — Ahora en Radio Shack ★</span>
            </p>
        `
    },
];

// ── TEXTOS DE INTERRUPCIÓN CNN ────────────────────────────────────

const CNN_MENSAJES = [
    `Por orden del Comando Sur de EE.UU.,<br>
esta transmisión ha sido interrumpida.<br><br>
<span class="blink">Operación Causa Justa — En curso.</span><br><br>
Los medios de prensa serán reintegrados<br>
al pool de cobertura cuando el Pentágono<br>
considere que la situación lo permite.<br><br>
Acceso denegado: 12 horas.`,

    `AVISO — COMANDO SUR EE.UU.<br><br>
Las imágenes que estabas viendo<br>
han sido clasificadas bajo<br>
<span class="blink">Directiva de Seguridad Operacional OPSEC-89.</span><br><br>
CNN fue el primer medio autorizado en cubrir<br>
esta operación. El Pentágono suministra<br>
todas las imágenes. No hay prensa independiente<br>
sobre el terreno en este momento.`,

    `INTERRUPCIÓN DE SEÑAL<br>
CANAL 7 — CIUDAD DE PANAMÁ<br><br>
<span class="blink">Las emisoras panameñas fueron tomadas<br>
en las primeras horas de la operación.</span><br><br>
La primera baja de toda guerra:<br>
la información.`,
];

// ── INTERRUPCIÓN CNN ──────────────────────────────────────────────

function abrirCNN() {
    const overlay = document.getElementById('cnn-overlay');
    const textEl = document.getElementById('cnn-text');
    const redirectEl = document.getElementById('cnn-redirect');

    const mensaje = CNN_MENSAJES[Math.floor(Math.random() * CNN_MENSAJES.length)];
    textEl.innerHTML = mensaje;
    redirectEl.textContent = '';

    // resetear animaciones
    overlay.classList.remove('open');
    void overlay.offsetWidth;
    overlay.classList.add('open');

    // cuenta regresiva y redirección
    let cuenta = 8;
    const intervalo = setInterval(() => {
        redirectEl.textContent = `— Redirigiendo a IRAK 1991 en ${cuenta}s —`;
        cuenta--;
        if (cuenta < 0) {
            clearInterval(intervalo);
            overlay.classList.remove('open');
            if (document.startViewTransition) {
                document.startViewTransition(() => { window.location.href = 'irak.html'; });
            } else {
                window.location.href = 'irak.html';
            }
        }
    }, 1000);
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

    // el popup de conexión siempre aparece
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

        // audio y placeholder: nunca interrupciones
        if (datosFila.type === 'audio' || !datosFila.img) {
            abrirVisor(datosFila);
            return;
        }

        // 50% interrupción CNN, 50% popups + visor
        if (Math.random() < 0.5) {
            abrirCNN();
        } else {
            abrirVisor(datosFila);
        }
    });
});