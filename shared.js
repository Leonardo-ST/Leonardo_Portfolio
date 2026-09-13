(function () {
    const LANGUAGE_KEY = 'portfolio-language';
    const THEME_KEY = 'portfolio-theme';
    const languages = new Set(['pt', 'en', 'ja']);
    const themes = new Set(['dark', 'light']);

    function getLanguage() {
        const saved = localStorage.getItem(LANGUAGE_KEY);
        if (languages.has(saved)) return saved;
        const browserLanguage = (navigator.language || '').toLowerCase();
        if (browserLanguage.startsWith('ja')) return 'ja';
        if (browserLanguage.startsWith('pt')) return 'pt';
        return 'en';
    }

    function setLanguage(language) {
        const next = languages.has(language) ? language : 'pt';
        localStorage.setItem(LANGUAGE_KEY, next);
        document.documentElement.lang = next === 'pt' ? 'pt-BR' : next;
        return next;
    }

    function getTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        if (themes.has(saved)) return saved;
        return 'dark';
    }

    function setTheme(theme) {
        const next = themes.has(theme) ? theme : 'dark';
        localStorage.setItem(THEME_KEY, next);
        document.documentElement.setAttribute('data-theme', next);
        if (document.body) document.body.setAttribute('data-theme', next);
        document.querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', next === 'dark' ? '#0a0e27' : '#ffffff');
        return next;
    }

    window.PortfolioPreferences = { getLanguage, setLanguage, getTheme, setTheme };
    document.documentElement.classList.add('js');
    document.documentElement.setAttribute('data-theme', getTheme());
}());
