const paises = ['japon', 'libano', 'granada', 'vietnam',  'cuba', 'index', 
//'argentina', 'corea', 'alemania', 'grecia', 'iran', 
//'guatemala', 'siria', 'venezuela', 'pakistan','irak', 'afganistan', 'panama', 'china', 'libia', 'somalia', 'kuwait', 
//'republica-dominicana', 'cambodia', 'laos', 'haiti', 'yemen', 
//'yugoslavia', 'kosovo', 'chile'
];

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