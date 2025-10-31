// Função para atualizar os links de navegação
function updateNavigationLinks() {
    const currentLang = getCurrentLang();
    const langPrefix = config.langPrefixes[currentLang];

    // Atualizar links internos
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            link.setAttribute('href', `${langPrefix}${href}`);
        }
    });

    // Atualizar links de idioma
    document.querySelectorAll('.lang-option').forEach(option => {
        const lang = option.getAttribute('data-lang');
        const currentPath = window.location.pathname.split('/').slice(2).join('/');
        option.setAttribute('href', `${config.langPrefixes[lang]}/${currentPath}`);
    });
}

// Executar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', updateNavigationLinks);