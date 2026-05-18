const paises = ['argentina', 'japan', 'corea', 'alemania', 'grecia', 'iran', 
'guatemala', 'cuba', 'libano', 'siria', 'venezuela', 'granada', 'pakistan', 
'irak', 'afganistan', 'panama', 'china', 'libia', 'somalia', 'kuwait', 
'republica-dominicana', 'vietnam', 'cambodia', 'laos', 'haiti', 'yemen', 
'yugoslavia', 'kosovo', 'chile', 'index'];

document.querySelector('.nav-tierra model-viewer').addEventListener('click', () => {
    const actual = document.title.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    const disponibles = paises.filter(p => p !== actual);
    const random = disponibles[Math.floor(Math.random() * disponibles.length)];
    
    if (!document.startViewTransition) {
        window.location.href = `${random}.html`;
        return;
    }
    document.startViewTransition(() => {
        window.location.href = `${random}.html`;
    });
});