// ── FOOTER — acceso sin mediación ──

window.ACCESO_DESBLOQUEADO = false;

window.estaDesbloqueado = function() {
    return window.ACCESO_DESBLOQUEADO === true;
};

window.activarAcceso = function(conFeedback) {
    window.ACCESO_DESBLOQUEADO = true;

    if (conFeedback) {
        const feedback = document.getElementById('footer-feedback');
        if (!feedback) return;
        feedback.textContent = '— el archivo no documenta la historia, la produce —';
        feedback.classList.add('visible');

        // después de que desaparece el texto, titila el primer renglón
        setTimeout(() => {
            feedback.classList.remove('visible');
            feedback.classList.add('desvanece');
            setTimeout(() => {
                feedback.textContent = '';
                feedback.classList.remove('desvanece');

                // titila el primer db-row
                const primerRenglon = document.querySelector('.db-row');
                if (!primerRenglon) return;
                primerRenglon.classList.add('row-blink');
                setTimeout(() => {
                    primerRenglon.classList.remove('row-blink');
                }, 3000);

            }, 800);
        }, 2400);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('footer-unlock');
    if (!btn) return;

    btn.addEventListener('click', () => {
        if (window.ACCESO_DESBLOQUEADO) return;
        window.activarAcceso(true);
    });
});