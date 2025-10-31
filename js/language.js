// Configuração de idiomas
const supportedLanguages = ['pt', 'en', 'ja'];
const langInfo = {
    'pt': { flag: '🇧🇷', name: 'PT', fullName: 'Português' },
    'en': { flag: '🇺🇸', name: 'EN', fullName: 'English' },
    'ja': { flag: '🇯🇵', name: 'JP', fullName: '日本語' }
};

// Função para detectar o idioma do navegador
function detectBrowserLanguage() {
    try {
        const lang = navigator.language.toLowerCase();
        if (lang.startsWith('pt')) return 'pt';
        if (lang.startsWith('ja')) return 'ja';
        return 'en';
    } catch (e) {
        return 'en';
    }
}

// Função para trocar o idioma
function changeLanguage(newLang) {
    if (!supportedLanguages.includes(newLang)) return;
    
    const path = window.location.pathname;
    const urlParts = path.split('/').filter(Boolean);
    
    if (supportedLanguages.includes(urlParts[0])) {
        urlParts.shift();
    }
    
    const newPath = '/' + newLang + (urlParts.length > 0 ? '/' + urlParts.join('/') : '');
    window.location.href = newPath;
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const urlParts = currentPath.split('/').filter(Boolean);
    
    // Se não estiver em uma página de idioma, redireciona
    if (!urlParts[0] || !supportedLanguages.includes(urlParts[0])) {
        const browserLang = detectBrowserLanguage();
        const newPath = '/' + browserLang + currentPath;
        window.location.href = newPath;
        return;
    }

    const currentLang = urlParts[0];

    // Atualiza o seletor de idioma desktop
    const selectedLang = document.getElementById('selectedLang');
    if (selectedLang) {
        selectedLang.innerHTML = `
            <span class="lang-flag">${langInfo[currentLang].flag}</span>
            <span class="lang-name">${langInfo[currentLang].name}</span>
        `;
    }

    // Atualiza os seletores de idioma
    document.querySelectorAll('.lang-option').forEach(option => {
        const lang = option.getAttribute('data-lang');
        option.classList.toggle('active', lang === currentLang);
        option.addEventListener('click', () => changeLanguage(lang));
    });
});

// Função para obter o idioma atual da URL
function getCurrentLang() {
    const path = window.location.pathname;
    const currentLang = path.split('/')[1];
    return config.supportedLangs.includes(currentLang) ? currentLang : config.defaultLang;
}

// Função para mudar o idioma
function changeLanguage(lang) {
    if (!config.supportedLangs.includes(lang)) return;
    const currentPath = window.location.pathname;
    const currentLang = getCurrentLang();
    const newPath = currentPath.replace(`/${currentLang}/`, `/${lang}/`);
    window.location.href = newPath;
}

// Função para detectar o idioma do navegador
function detectBrowserLanguage() {
    try {
        const lang = navigator.language.toLowerCase();
        if (lang.startsWith('pt')) return 'pt';
        if (lang.startsWith('ja')) return 'ja';
        return 'en';
    } catch (e) {
        return 'en';
    }
}

// Função para atualizar a interface de acordo com o idioma
function updateInterface(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName.toLowerCase() === 'meta') {
                el.setAttribute('content', translations[lang][key]);
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Atualizar seletor de idioma
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
}

// Evento de mudança de idioma
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLang();
    updateInterface(currentLang);

    // Adicionar event listeners para mudança de idioma
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const newLang = opt.getAttribute('data-lang');
            changeLanguage(newLang);
        });
    });
});