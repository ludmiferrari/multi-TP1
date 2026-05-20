// POOL DE DISTRACTORES — Granada 1983
const POPUP_POOL = [
    {
        title: 'MTV — En Reproducción',
        html: `
            <div class="popup-img-placeholder"><a href="https://www.youtube.com/watch?v=sOnqjkJTMaA&list=RDsOnqjkJTMaA&start_radio=1"><img src="imgs/granada/thriller-michael-jackson.gif"></a></div>
            <div class="popup-marquee"><span>★ ESTRENO MUNDIAL ★ MICHAEL JACKSON — THRILLER ★ DIRIGIDO POR JOHN LANDIS ★</span></div>
            <p><span class="blink">▶ EN REPRODUCCIÓN</span> — Thriller (versión de 14 min.)</p>
        `
    },
    {
        title: 'Billboard Hot 100 — 29 Oct 1983',
        html: `
            <p>
                #1 — <span class="blink">Thriller — Michael Jackson</span><br>
                #2 — Billie Jean — Michael Jackson<br>
                #3 — Every Breath You Take — The Police<br>
                #4 — Hungry Like the Wolf — Duran Duran<br>
                #5 — Girls Just Want to Have Fun — Cyndi Lauper
            </p>
        `
    },
    {
        title: 'REVIVILO — Final de Serie M*A*S*H',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/mash-finale.jpg"></div>
            <p>ESTA NOCHE en CBS: Final de serie M*A*S*H<br><span class="blink">121,6 MILLONES DE ESPECTADORES YA LO VIERON</span></p>
        `
    },
    {
        title: 'Ya en Tiendas',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/star-wars.jpeg"></div>
            <p>El Retorno del Jedi — ¡Ya en VHS!<br><span class="blink">★ En tu videoclub más cercano ★</span></p>
        `
    },
    {
        title: "Tenés un Correo",
        html: `
            <p>
                De: MTV_Newsletter<br>
                Asunto: <span class="blink">¡MJ ROMPE RÉCORDS!</span><br><br>
                Thriller: 21 semanas en el #1.<br>
                Primer artista con 5 singles en el top 10<br>
                de un mismo álbum. La historia fue escrita.
            </p>
        `
    },
    {
        title: 'El Desafío Pepsi — 1983',
        html: `
            <div class="popup-img-placeholder">
                <video width="640" height="360" controls autoplay muted loop>
                    <source src="imgs/granada/pepsi.mp4" type="video/mp4">
                </video>
            </div>
            <div class="popup-marquee"><span>★ EL DESAFÍO PEPSI ★ ¿PODÉS NOTAR LA DIFERENCIA? ★</span></div>
            <p>Michael Jackson firma contrato de $5M con Pepsi.<br><span class="blink">La elección de una nueva generación.</span></p>
        `
    },
    {
        title: 'Ejercicios Jane Fonda — VHS',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/jane-fonda.jpg"></div>
            <p>Ejercicios con Jane Fonda<br>El VHS más vendido de 1983.<br><span class="blink">¡Sentí el ardor!</span></p>
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
            <div class="popup-marquee"><span>★ TE MERECÉS UN DESCANSO HOY ★ McDONALD'S ★</span></div>
            <p><span class="blink">¡Presentamos: McNuggets!</span><br>Ahora en tu McDonald's más cercano.</p>
        `
    },
    {
        title: 'Flashdance — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/flashdance.jpg"></div>
            <p>Flashdance (1983)<br>Banda sonora: 6x Platino<br><span class="blink">¡Qué sensación!</span> — Irene Cara</p>
        `
    },
    {
        title: 'Cabbage Patch Kids — ¡Agotado!',
        html: `
            <div class="popup-img-placeholder">
            <video width="640" height="360" controls autoplay muted loop>
                <source src="imgs/granada/cabbage.mp4" type="video/mp4">
            </video>
            </div>
            <p>Navidad 1983 — Se reportan disturbios en tiendas.<br>Cabbage Patch Kids: <span class="blink">AGOTADO en todo el país.</span><br>Pedí ahora para entrega en enero.</p>
        `
    },
    {
        title: 'Olivia Newton-John — Physical',
        html: `
            <div class="popup-img-placeholder">"><img src="imgs/granada/newton.jpg"></div>
            <p>Physical — Olivia Newton-John<br>10 semanas en el #1 — sigue en los charts.<br><span class="blink">▶ En rotación pesada en MTV</span></p>
        `
    },
    // ── CONEXIÓN CON OTRO PAÍS ─────────────────────────────────────
    {
    title: '⚡ URGENTE — La Habana, 17 Abr 1961',
    link: { href: 'cuba.html', texto: '→ CUBA 1961' },
    html: `
        <div class="popup-marquee"><span>★ OPERACIÓN ZAPATA ★ CIA ★ BAHÍA DE COCHINOS ★ CARIBE ★ 1961 ★</span></div>
        <p>
            Granada 1983. Cuba 1961.<br>
            El mismo Caribe. La misma doctrina.<br><br>
            <span class="blink">"Eliminar el comunismo del hemisferio."</span><br><br>
            1.400 exiliados entrenados por la CIA.<br>
            Derrota en 72 horas.<br>
            Kennedy asume responsabilidad en público.<br>
            La CIA, nunca.
        </p>
    `
    },
];

// FORMULARIO DE CABLE — mensajes de error secuenciales
const ERRORES_CABLE = [
    "ERROR: Número de serie del decodificador no encontrado en nuestro sistema. Verificá el sticker en la parte trasera del equipo.",
    "ERROR: El código postal no coincide con el domicilio de instalación registrado. Contactá a CableVision al 1-800-CABLEVISION.",
    "ACCESO DENEGADO — Tu cuenta fue marcada por actividad sospechosa. Siendo redirigido/a.",
];

let intentosCable = 0;
let datosPendientes = null;
let popupsActivos = [];

// ── LÓGICA DEL FORMULARIO DE CABLE ───────────────────────────────

function abrirFormularioCable(datosFila) {
    datosPendientes = datosFila;
    intentosCable = 0;
    document.getElementById('cable-error').textContent = '';
    document.getElementById('cf-name').value = '';
    document.getElementById('cf-serial').value = '';
    document.getElementById('cf-zip').value = '';
    document.getElementById('cf-tier').value = '';
    document.getElementById('cf-maiden').value = '';
    document.getElementById('cable-overlay').classList.add('open');
}

document.getElementById('cable-submit').addEventListener('click', () => {
    intentosCable++;
    const errorEl = document.getElementById('cable-error');

    if (intentosCable < 3) {
        errorEl.textContent = ERRORES_CABLE[intentosCable - 1];
    } else {
        errorEl.textContent = ERRORES_CABLE[2];
        setTimeout(() => {
            document.getElementById('cable-overlay').classList.remove('open');
            if (document.startViewTransition) {
                document.startViewTransition(() => { window.location.href = 'libano.html'; });
            } else {
                window.location.href = 'libano.html';
            }
        }, 1800);
    }
});

document.getElementById('cable-close').addEventListener('click', () => {
    document.getElementById('cable-overlay').classList.remove('open');
    if (document.startViewTransition) {
        document.startViewTransition(() => { window.location.href = 'libano.html'; });
    } else {
        window.location.href = 'libano.html';
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

        // audio y placeholder: nunca formulario
        if (datosFila.type === 'audio' || !datosFila.img) {
            abrirVisor(datosFila);
            return;
        }

        // 50% de probabilidad: formulario de cable o popups
        if (Math.random() < 0.5) {
            abrirFormularioCable(datosFila);
        } else {
            abrirVisor(datosFila);
        }
    });
});
