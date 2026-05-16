document.querySelectorAll('.Hotspot').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const pais = btn.querySelector('.HotspotAnnotation').textContent
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-');
        
        if (!document.startViewTransition) {
            window.location.href = `${pais}.html`;
            return;
        }
        document.startViewTransition(() => {
            window.location.href = `${pais}.html`;
        });
    });
});