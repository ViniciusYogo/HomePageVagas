const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }
}

// Tema salvo no navegador
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme('light'); // tema padrão
}

// Alterna tema ao mudar o checkbox
themeToggle.addEventListener('change', () => {
    const theme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
});


//Botão side bar ocultar

const botaoSidebar = document.querySelector('.botaoSidebar');
const offcanvas = document.getElementById('offcanvasInspiration');

// Quando o botão for clicado, ele se oculta (deixa de aparecer)
botaoSidebar.addEventListener('click', () => {
    botaoSidebar.style.display = 'none';
});

// Quando o offcanvas for fechado, o botão volta a aparecer
offcanvas.addEventListener('hidden.bs.offcanvas', () => {
    botaoSidebar.style.display = 'inline-flex'; // ou 'block' se não for flex
});

