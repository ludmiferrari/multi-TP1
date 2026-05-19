// POOL DE DISTRACTORES — Líbano 1982–1983
// Base: mismos distractores de Granada 1983 con dos específicos de Líbano
// y un popup de conexión con otro país

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
        title: 'Flashdance — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/flashdance.jpg"></div>
            <p>Flashdance (1983)<br>Banda sonora: 6x Platino<br><span class="blink">¡Qué sensación!</span> — Irene Cara</p>
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
        title: 'REVIVILO — Final de Serie M*A*S*H',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/granada/mash-finale.jpg"></div>
            <p>ESTA NOCHE en CBS: Final de serie M*A*S*H<br><span class="blink">121,6 MILLONES DE ESPECTADORES YA LO VIERON</span></p>
        `
    },
    // ── ESPECÍFICOS DE LÍBANO ──────────────────────────────────────
    {
        title: 'The A-Team — NBC 1983',
        html: `
            <div class="popup-img-placeholder">
            <video width="640" height="360" controls autoplay muted loop>
                <source src="imgs/libano/nbc.mp4" type="video/mp4">
            </video>
            </div>
            <div class="popup-marquee"><span>★ THE A-TEAM ★ SI TENÉS UN PROBLEMA... ★ NBC ★ MARTES 8PM ★</span></div>
            <p>
                El equipo especial más querido de América.<br>
                Mercenarios que resuelven todo.<br>
                <span class="blink">ESTA NOCHE — NBC, 8pm</span>
            </p>
        `
    },
    {
        title: 'War Games — En Cartelera',
        html: `
            <div class="popup-img-placeholder"><img src="imgs/libano/war-games.jpg"></div>
            <p>
                WarGames (1983)<br>
                "¿Querés jugar un juego?"<br>
                Un adolescente. Una computadora. La guerra nuclear.<br>
                <span class="blink">★ Ahora en todos los cines ★</span>
            </p>
        `
    },
    // ── CONEXIÓN CON OTRO PAÍS ─────────────────────────────────────
    {
        title: '⚡ SIGUIENTE — Granada, 25 Oct 1983',
        link: { href: 'granada.html', texto: '→ GRANADA 1983' },
        html: `
            <div class="popup-marquee"><span>★ URGENTE ★ 48 HORAS DESPUÉS ★ EE.UU. INVADE GRANADA ★ 25 OCT 1983 ★</span></div>
            <p>
                241 Marines muertos en Beirut el 23 de octubre.<br><br>
                <span class="blink">48 horas después — Reagan invade Granada.</span><br><br>
                La opinión pública desviada.<br>
                La prensa, excluida 48hs de la isla.<br>
                Beirut, fuera de los titulares.
            </p>
        `
    },
];

// ── TELEX ─────────────────────────────────────────────────────────

const DESPACHOS_TELEX = [
    {
        meta: 'DE: BEIRUT  /  PARA: NUEVA YORK  /  PRIORIDAD: URGENTE',
        texto: `AP-LB-231983-0547

BEIRUT, 23 OCT (AP) -- UNA ENORME EXPLOSION
DESTRUYO EL CUARTEL GENERAL DE LOS MARINES
ESTADOUNIDENSES EN EL AEROPUERTO DE BEIRUT
A LAS 6:22 DE LA MANANA DE HOY.

TESTIGOS REPORTAN UN CAMION CARGADO CON
EXPLOSIVOS QUE ROMPIO LAS BARRERAS DE
SEGURIDAD Y DETONO EN EL INTERIOR DEL
EDIFICIO DE CUATRO PISOS.

FUENTES MILITARES CONFIRMAN DECENAS DE
VICTIMAS. LA CIFRA EXACTA AUN SE DESCONOCE.

ENTRE LOS ESCOMBROS SE PUEDEN VER...

[CONEXION INTERRUMPIDA]`
    },
    {
        meta: 'DE: BEIRUT  /  PARA: WASHINGTON  /  CLASIFICADO',
        texto: `CABLE DEP. ESTADO -- REF: BEY-1982-0918
CLASIFICACION: CONFIDENCIAL

SEGUN FUENTES EN EL TERRENO, MILICIAS
FALANGISTAS INGRESARON A LOS CAMPAMENTOS
DE SABRA Y CHATILA A LAS 18:00 DEL 16 SEP.

FUERZAS DE DEFENSA ISRAELIES CONTROLAN
LOS PERIMETROS. LA FMN FUE NOTIFICADA.

EL DEPARTAMENTO DE ESTADO RECOMIENDA
NO INTERVENIR EN ESTA ETAPA. LA SITUACION
SE CONSIDERA PARTE DE LA...

[TRANSMISION CORTADA -- ACCESO DENEGADO]`
    },
    {
        meta: 'DE: CORRESPONSAL / PARA: REDACCION NY / URGENTE',
        texto: `BEIRUT, 24 OCT 1983

LA EXPLOSION DE AYER MATO A 241 MARINES.
ES LA MAYOR PERDIDA AMERICANA EN UN DIA
DESDE IWO JIMA EN 1945.

ESTA MANANA EL PRESIDENTE REAGAN ORDENO
LA INVASION DE LA ISLA DE GRANADA EN EL
CARIBE. LOS EDITORES EN NUEVA YORK YA
TIENEN LA PORTADA DECIDIDA.

NOTA PERSONAL: NADIE AQUI ENTIENDE POR
QUE GRANADA. NADIE AQUI ENTIENDE POR QUE
AHORA. LA PREGUNTA QUE NADIE HACE ES...

[SENAL PERDIDA -- REINTENTANDO...]`
    },
];

let intervaloTelex = null;

function abrirTelex() {
    const despacho = DESPACHOS_TELEX[Math.floor(Math.random() * DESPACHOS_TELEX.length)];
    const horaEl = document.getElementById('telex-hora');
    const metaEl = document.getElementById('telex-meta');
    const textoEl = document.getElementById('telex-text');
    const cursorEl = document.getElementById('telex-cursor');
    const statusEl = document.getElementById('telex-status');

    // hora aleatoria
    const h = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const m = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    horaEl.textContent = h + ':' + m + ' LOCAL';
    metaEl.textContent = despacho.meta;
    textoEl.textContent = '';
    statusEl.className = 'telex-status ok';
    statusEl.textContent = '— TRANSMITIENDO —';

    document.getElementById('telex-overlay').classList.add('open');

    const texto = despacho.texto;
    let i = 0;

    if (intervaloTelex) clearInterval(intervaloTelex);

    intervaloTelex = setInterval(() => {
        if (i < texto.length) {
            textoEl.textContent += texto[i];
            i++;

            // detectar corte
            if (texto.slice(0, i).includes('[CONEXION INTERRUMPIDA]') ||
                texto.slice(0, i).includes('[TRANSMISION CORTADA') ||
                texto.slice(0, i).includes('[SENAL PERDIDA')) {
                clearInterval(intervaloTelex);
                cursorEl.style.display = 'none';
                statusEl.className = 'telex-status error';
                statusEl.textContent = '— ERROR — SEÑAL PERDIDA — REDIRIGIENDO —';

                setTimeout(() => {
                    document.getElementById('telex-overlay').classList.remove('open');
                    redirigirG();
                }, 3000);
            }
        }
    }, 28);
}

// ── REDIRECCIÓN A GRANADA ─────────────────────────────────────────

function redirigirG() {
    if (document.startViewTransition) {
        document.startViewTransition(() => { window.location.href = 'granada.html'; });
    } else {
        window.location.href = 'granada.html';
    }
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
            audioEl.style.cssText = 'display:block; margin:0 auto; width:100%; max-width:800px; margin-top:12px;';
            visor.querySelector('.db-container').appendChild(audioEl);
        }
        audioEl.src = audio;
        audioEl.style.display = 'block';

        const btnViejo = document.getElementById('audio-next-btn');
        if (btnViejo) btnViejo.remove();

        const btnContenedor = document.createElement('div');
        btnContenedor.id = 'audio-next-btn';
        btnContenedor.style.cssText = 'display:flex; gap:12px; margin-top:16px;';

        const btnGranada = document.createElement('a');
        btnGranada.href = 'granada.html';
        btnGranada.className = 'next-btn';
        btnGranada.textContent = 'GRANADA 1983 →';

        const btnIrak = document.createElement('a');
        btnIrak.href = 'irak.html';
        btnIrak.className = 'next-btn';
        btnIrak.textContent = 'IRAK 1991 →';

        btnContenedor.appendChild(btnGranada);
        btnContenedor.appendChild(btnIrak);
        visor.querySelector('.db-container').appendChild(btnContenedor);

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
            abrirTelex();
        } else if (sorteo < 0.66) {
            lanzarPopups();
            abrirVisor(datosFila);
        } else {
            abrirVisor(datosFila);
        }
    });
});
