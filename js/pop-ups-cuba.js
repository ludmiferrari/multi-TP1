// POOL DE DISTRACTORES — Cuba 1961
const POPUP_POOL = [
    {
        title: "El Show de Ed Sullivan — Esta Noche",
        html: `
            <div class="popup-img-placeholder">[img: promo Ed Sullivan Show 1961]</div>
            <div class="popup-marquee"><span>★ EN VIVO ESTA NOCHE ★ THE ED SULLIVAN SHOW ★ CBS ★ 8/7c ★</span></div>
            <p>ESTA NOCHE: Elvis Presley regresa del Ejército.<br><span class="blink">No te lo pierdas — CBS, 8pm</span></p>
        `
    },
    {
        title: "Blue Hawaii — En Cartelera",
        html: `
            <div class="popup-img-placeholder">[img: afiche Blue Hawaii 1961 — Elvis Presley]</div>
            <p>Blue Hawaii (1961)<br>Con Elvis Presley<br><span class="blink">★ #1 en taquilla ★</span><br>Banda sonora: 20 semanas en el #1</p>
        `
    },
    {
        title: "Lucky Strike — Es Tostado",
        html: `
            <div class="popup-img-placeholder">[img: publicidad cigarrillos Lucky Strike 1961 — médico]</div>
            <div class="popup-marquee"><span>★ MÁS MÉDICOS FUMAN LUCKY STRIKE ★ ES TOSTADO ★</span></div>
            <p>Lucky Strike — <span class="blink">el cigarrillo de los campeones.</span><br>Suave, tranquilo, satisfactorio.</p>
        `
    },
    {
        title: "Camel Cigarrillos",
        html: `
            <div class="popup-img-placeholder">[img: publicidad Camel 1961]</div>
            <p>"Caminaría una milla por un Camel."<br><span class="blink">El mejor tabaco que el dinero puede comprar.</span><br>Disponible en tu farmacia local.</p>
        `
    },
    {
        title: "NASA — Proyecto Mercury",
        html: `
            <div class="popup-img-placeholder">[img: lanzamiento Freedom 7 Alan Shepard mayo 1961]</div>
            <div class="popup-marquee"><span>★ AMERICA ALCANZA LAS ESTRELLAS ★ PROYECTO MERCURY ★ NASA ★</span></div>
            <p>Alan Shepard — primer americano en el espacio.<br><span class="blink">Freedom 7 — 5 de mayo de 1961</span></p>
        `
    },
    {
        title: "Kennedy — Elegimos ir a la Luna",
        html: `
            <div class="popup-img-placeholder">[img: discurso Kennedy Universidad Rice 1962]</div>
            <p>"Elegimos ir a la Luna."<br>— Presidente Kennedy, 12 sep 1962<br><span class="blink">★ Programa Apollo — $25 mil millones ★</span></p>
        `
    },
    {
        title: "Leave It to Beaver — CBS",
        html: `
            <div class="popup-img-placeholder">[img: still Leave It to Beaver 1961]</div>
            <p>Leave It to Beaver<br>La familia favorita de América — cada semana en CBS.<br><span class="blink">ESTA NOCHE: Beaver se mete en problemas otra vez.</span></p>
        `
    },
    {
        title: "Los Picapiedras — ABC",
        html: `
            <div class="popup-img-placeholder">[img: promo Los Picapiedras 1961]</div>
            <div class="popup-marquee"><span>★ YABBA DABBA DOO ★ LOS PICAPIEDRAS ★ VIERNES EN ABC ★</span></div>
            <p>La familia moderna de la Edad de Piedra.<br><span class="blink">Nuevo episodio ESTA NOCHE — 8:30/7:30c</span></p>
        `
    },
    {
        title: "GE — Vive Mejor Eléctricamente",
        html: `
            <div class="popup-img-placeholder">[img: publicidad electrodomésticos GE 1961 — cocina]</div>
            <p>General Electric — "Vive Mejor Eléctricamente"<br>Nueva heladera, lavarropas y cocina.<br><span class="blink">La cocina americana moderna — ahora accesible.</span></p>
        `
    },
    {
        title: "Chevrolet Impala — 1961",
        html: `
            <div class="popup-img-placeholder">[img: publicidad Chevrolet Impala 1961]</div>
            <div class="popup-marquee"><span>★ RECORRE EE.UU. EN TU CHEVROLET ★ IMPALA 1961 ★</span></div>
            <p>El Chevrolet Impala 1961.<br>Más estilo. Más potencia.<br><span class="blink">Desde $2.597.</span></p>
        `
    },
    {
        title: "Mel's Diner — Abierto 24hs",
        html: `
            <div class="popup-img-placeholder">[img: cartel neón diner americano 1961]</div>
            <p>MEL'S DRIVE-IN<br>Hamburguesas — Batidos — Torta<br><span class="blink">★ ABIERTO LAS 24 HORAS ★</span><br>Ruta 66 — Salida 14</p>
        `
    },
    {
        title: "TV Guide — Esta Semana",
        html: `
            <div class="popup-img-placeholder">[img: tapa TV Guide abril 1961]</div>
            <p>ESTA SEMANA EN TV:<br>Lun — Gunsmoke (CBS)<br>Mié — Perry Mason (CBS)<br>Vie — <span class="blink">Los Picapiedras (ABC)</span><br>Dom — Ed Sullivan Show (CBS)</p>
        `
    },
    {
        title: "Coca-Cola — Tomá una Coca",
        html: `
            <div class="popup-img-placeholder">[img: publicidad Coca-Cola 1961 — mostrador diner]</div>
            <div class="popup-marquee"><span>★ TODO VA MEJOR CON COCA-COLA ★</span></div>
            <p><span class="blink">Refrescate.</span><br>Coca-Cola bien fría — 5¢ en tu fuente de sodas local.</p>
        `
    },
    {
        title: "Billboard Hot 100 — Abr 1961",
        html: `
            <p>#1 — <span class="blink">Runaway — Del Shannon</span><br>#2 — Mother-In-Law — Ernie K-Doe<br>#3 — Blue Moon — The Marcels<br>#4 — Surrender — Elvis Presley<br>#5 — Portrait of my Love — Steve Lawrence</p>
        `
    },
    {
        title: "Protegé a tu Familia — Refugio Antinuclear",
        html: `
            <div class="popup-img-placeholder">[img: publicidad refugio antinuclear 1961 — patio trasero]</div>
            <p>PROTEGÉ A TU FAMILIA.<br>Refugios antinucleares prefabricados — desde $1.995.<br><span class="blink">Los soviéticos están mirando. ¿Estás listo/a?</span></p>
        `
    },
];

// FBI — mensajes de error secuenciales
const FBI_ERRORES = [
    "PRESENTACIÓN INCOMPLETA — Todos los campos de la Sección I deben completarse antes del procesamiento. Reenvíe el formulario completo.",
    "FALLA DE VERIFICACIÓN — Una o más referencias no pudieron ser confirmadas por nuestra oficina de campo. Revise y reenvíe.",
    "ACCESO DENEGADO — Su expediente fue marcado para investigación adicional. Espere contacto de su oficina local del FBI.",
];

let fbiIntentos = 0;
let popupsActivos = [];

// ── FORMULARIO FBI ────────────────────────────────────────────────

function abrirFormularioFbi() {
    fbiIntentos = 0;
    document.getElementById('fbi-error').textContent = '';
    document.getElementById('fbi-stamp').textContent = '';
    document.getElementById('fbi-overlay').classList.add('open');
}

document.getElementById('fbi-submit').addEventListener('click', () => {
    fbiIntentos++;
    const errorEl = document.getElementById('fbi-error');
    const selloEl = document.getElementById('fbi-stamp');

    if (fbiIntentos < 3) {
        errorEl.textContent = FBI_ERRORES[fbiIntentos - 1];
        selloEl.textContent = '';
    } else {
        errorEl.textContent = FBI_ERRORES[2];
        selloEl.textContent = 'DENEGADO';
        setTimeout(() => {
            document.getElementById('fbi-overlay').classList.remove('open');
            if (document.startViewTransition) {
                document.startViewTransition(() => { window.location.href = 'index.html'; });
            } else {
                window.location.href = 'index.html';
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

        if (data.link) {
            div.style.zIndex = 500;
        }

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
            btn.href = 'guatemala.html';
            btn.className = 'next-btn';
            btn.textContent = 'GUATEMALA 1954 →';
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

        // 50% de probabilidad: formulario FBI o popups
        if (Math.random() < 0.5) {
            abrirFormularioFbi();
        } else {
            abrirVisor(datosFila);
        }
    });
});