document.addEventListener('DOMContentLoaded', () => {


    let currentLang = 'pt';
    let currentTheme = 'dark'
    const body = document.body;
    const bgAnimation = document.getElementById('bgAnimation');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    const desktopThemeToggle = document.getElementById('desktopThemeToggle');
    const desktopThemeIcon = document.getElementById('desktopThemeIcon');
    const mobileThemeSwitch = document.getElementById('themeSwitch');
    const mobileThemeInfo = document.querySelector('.mobile-theme-toggle .theme-info');
    const desktopLangSelector = document.getElementById('desktopLangSelector');
    const selectedLangDisplay = document.getElementById('selectedLang');
    const langDropdown = document.getElementById('langDropdown');
    const mobileLangOptions = document.querySelectorAll('.mobile-lang-selector .lang-option');
    const translations = {
        pt: {
            'nav-home': 'Início', 'nav-about': 'Sobre', 'nav-skills': 'Skills', 'nav-projects': 'Projetos', 'nav-contact': 'Contato',
            'hero-greeting': 'console.log("Olá, mundo!");', 'hero-title': 'Frontend Developer', 'hero-subtitle': 'Criando experiências digitais incríveis',
            'hero-description': 'Especializado em React, Vue.js e tecnologias modernas de frontend. Transformo designs em interfaces interativas e responsivas.',
            'hero-cta1': 'Ver Projetos', 'hero-cta2': 'Fale Comigo', 'about-comment': 'Desenvolvedor Frontend apaixonado por tecnologia',
            'about-role': 'Frontend Developer', 'about-experience': '"6+ anos"', 'about-location': '"Maranhão, Brasil"', 'about-formation': 'Ciência da Computação',
            'about-passion': 'UI/UX e Performance', 'about-focus': 'React & Next.js', 'skills-title': 'Minhas Skills',
            'skill1-desc': 'Desenvolvimento com as principais bibliotecas e frameworks modernos', 'skill2-desc': 'Criação de interfaces intuitivas e experiências de usuário excepcionais',
            'skill3-desc': 'Desenvolvimento de aplicações que funcionam perfeitamente em todos os dispositivos', 'skill4-desc': 'Otimização de aplicações para máxima velocidade e eficiência',
            'projects-title': 'Meus Projetos', 'project1-title': 'E-commerce Moderno', 'project1-desc': 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo.',
            'project2-title': 'Dashboard Analytics', 'project2-desc': 'Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios em tempo real.',
            'project3-title': 'Music Player App', 'project3-desc': 'Player de música moderno com playlists personalizadas, visualizador de áudio e controles avançados.',
            'contact-title': 'Vamos trabalhar juntos?', 'contact-description': 'Estou sempre aberto a novos projetos e oportunidades. Entre em contato!',
            'footer-tagline': 'Criando o futuro, uma linha de código por vez', 'footer-navigation': 'Navegação', 'footer-connect': 'Conecte-se',
            'footer-rights': 'Todos os direitos reservados.', 'footer-designed': 'Designed by', 'theme-label': 'Tema', 'language-label': 'Idioma',
            'theme-dark': 'Modo Escuro', 'theme-light': 'Modo Claro'
        },
        en: {
            'nav-home': 'Home', 'nav-about': 'About', 'nav-skills': 'Skills', 'nav-projects': 'Projects', 'nav-contact': 'Contact',
            'hero-greeting': 'console.log("Hello, world!");', 'hero-title': 'Frontend Developer', 'hero-subtitle': 'Creating amazing digital experiences',
            'hero-description': 'Specialized in React, Vue.js and modern frontend technologies. I transform designs into interactive and responsive interfaces.',
            'hero-cta1': 'View Projects', 'hero-cta2': 'Contact Me', 'about-comment': 'Frontend Developer passionate about technology',
            'about-role': 'Frontend Developer', 'about-experience': '"6+ years"', 'about-location': '"State of Maranhão, Brazil"', 'about-formation': 'Computer Science',
            'about-passion': 'UI/UX & Performance', 'about-focus': 'React & Next.js', 'skills-title': 'My Skills',
            'skill1-desc': 'Development with the main modern libraries and frameworks', 'skill2-desc': 'Creating intuitive interfaces and exceptional user experiences',
            'skill3-desc': 'Developing applications that work perfectly on all devices', 'skill4-desc': 'Application optimization for maximum speed and efficiency',
            'projects-title': 'My Projects', 'project1-title': 'Modern E-commerce', 'project1-desc': 'Complete e-commerce platform with shopping cart, payment system and administrative panel.',
            'project2-title': 'Analytics Dashboard', 'project2-desc': 'Interactive dashboard for data visualization with dynamic charts and real-time reports.',
            'project3-title': 'Music Player App', 'project3-desc': 'Modern music player with custom playlists, audio visualizer and advanced controls.',
            'contact-title': 'Let\'s work together?', 'contact-description': 'I\'m always open to new projects and opportunities. Get in touch!',
            'footer-tagline': 'Building the future, one line of code at a time', 'footer-navigation': 'Navigation', 'footer-connect': 'Connect',
            'footer-rights': 'All rights reserved.', 'footer-designed': 'Designed by', 'theme-label': 'Theme', 'language-label': 'Language',
            'theme-dark': 'Dark Mode', 'theme-light': 'Light Mode'
        },
        ja: {
            'nav-home': 'ホーム', 'nav-about': '私について', 'nav-skills': 'スキル', 'nav-projects': 'プロジェクト', 'nav-contact': 'お問い合わせ',
            'hero-greeting': 'console.log("こんにちは、世界！");', 'hero-title': 'フロントエンド開発者', 'hero-subtitle': '素晴らしいデジタル体験を創造',
            'hero-description': 'React、Vue.js、最新のフロントエンド技術を専門としています。デザインをインタラクティブでレスポンシブなインターフェースに変換します。',
            'hero-cta1': 'プロジェクトを見る', 'hero-cta2': 'お問い合わせ', 'about-comment': 'テクノロジーに情熱を注ぐフロントエンド開発者',
            'about-role': 'フロントエンド開発者', 'about-experience': '"6年以上"', 'about-location': '"マラニョン州、ブラジル"', 'about-formation': 'コンピューターサイエンス',
            'about-passion': 'UI/UXとパフォーマンス', 'about-focus': 'React & Next.js', 'skills-title': '私のスキル',
            'skill1-desc': '主要な最新ライブラリとフレームワークでの開発', 'skill2-desc': '直感的なインターフェースと優れたユーザーエクスペリエンスの作成',
            'skill3-desc': 'すべてのデバイスで完璧に動作するアプリケーションの開発', 'skill4-desc': '最大速度と効率のためのアプリケーション最適化',
            'projects-title': '私のプロジェクト', 'project1-title': 'モダンEコマース', 'project1-desc': 'ショッピングカート、決済システム、管理パネルを備えた完全なEコマースプラットフォーム。',
            'project2-title': 'アナリティクスダッシュボード', 'project2-desc': '動的チャートとリアルタイムレポートを備えたデータ可視化用インタラクティブダッシュボード。',
            'project3-title': 'ミュージックプレーヤーアプリ', 'project3-desc': 'カスタムプレイリスト、オーディオビジュアライザー、高度なコントロールを備えたモダンなミュージックプレーヤー。',
            'contact-title': '一緒に働きませんか？', 'contact-description': '新しいプロジェクトや機会には常にオープンです。お気軽にお問い合わせください！',
            'footer-tagline': '一行のコードずつ、未来を創造', 'footer-navigation': 'ナビゲーション', 'footer-connect': '接続',
            'footer-rights': '全著作権所有。', 'footer-designed': 'Designed by', 'theme-label': 'テーマ', 'language-label': '言語',
            'theme-dark': 'ダークモード', 'theme-light': 'ライトモード'
        }
    };


    // Funções
    // Idioma
    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

    
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
    
                if (el.classList.contains('string')) {
                    el.textContent = `"${translations[lang][key]}"`;
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        updateThemeDisplay();
        updateLangSelectorDisplay();
    }

    function updateLangSelectorDisplay() {
        mobileLangOptions.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
        });

        
        const activeDesktopOption = document.querySelector(`.lang-dropdown li[data-lang="${currentLang}"]`);
        if (activeDesktopOption) {
            document.querySelectorAll('.lang-dropdown li').forEach(opt => opt.classList.remove('active'));
            activeDesktopOption.classList.add('active');
            
            const flag = activeDesktopOption.querySelector('.lang-flag').textContent;
            const name = activeDesktopOption.querySelector('.lang-name').textContent;
            selectedLangDisplay.innerHTML = `<span class="lang-flag">${flag}</span> <span class="lang-name">${name}</span>`;
        }
    }

    // Função assíncrona para detectar o idioma por IP e, como fallback, pelo navegador
    async function autoSetLanguage() {
        try {
            // 1. Tenta detectar o idioma pela localização do IP
            const response = await fetch('http://ip-api.com/json/?fields=countryCode');
            if (!response.ok) {
                throw new Error('IP API request failed');
            }
            const data = await response.json();
            const country = data.countryCode;

            if (country === 'JP') {
                setLanguage('ja');
                return;
            }
            if (country === 'BR') {
                setLanguage('pt');
                return;
            }
            // Para qualquer outro país, define inglês
            setLanguage('en');

        } catch (error) {
            // 2. Se a API falhar, usa o idioma do navegador como fallback
            console.error('GeoIP detection failed, falling back to browser language:', error);
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'ja') setLanguage('ja');
            else if (browserLang === 'pt') setLanguage('pt');
            else setLanguage('en');
        }
    }

    // --- Theme ---
    function updateThemeDisplay() {
        const isDark = currentTheme === 'dark';
        body.setAttribute('data-theme', currentTheme);

        // Desktop
        if (desktopThemeIcon) desktopThemeIcon.textContent = isDark ? '🌙' : '☀️';

        // Mobile
        if (mobileThemeSwitch) mobileThemeSwitch.classList.toggle('active', !isDark);
        if (mobileThemeInfo) {
            const icon = isDark ? '🌙' : '☀️';
            const text = translations[currentLang][isDark ? 'theme-dark' : 'theme-light'];
            mobileThemeInfo.innerHTML = `<span>${icon}</span> <span>${text}</span>`;
        }
    }

    function toggleTheme() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        updateThemeDisplay();
    }

    // --- Mobile Menu ---
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // --- Background Animation ---
    const codeSnippets = ['const app = () => {}', 'useState()', 'useEffect()', '<Component />', 'npm install', 'git commit', 'async/await', 'fetch()', 'map()', 'filter()', 'reduce()', 'props.children', 'styled-components', 'tailwind', 'responsive', 'mobile-first'];
    function createFloatingCode() {
        const code = document.createElement('div');
        code.className = 'floating-code';
        code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        code.style.left = `${Math.random() * 100}%`;
        code.style.animationDuration = `${Math.random() * 10 + 15}s`;
        code.style.animationDelay = `${Math.random() * 5}s`;
        bgAnimation.appendChild(code);
        setTimeout(() => code.remove(), 25000);
    }

    // =========================================================================
    // EVENT LISTENERS
    // =========================================================================

    // Mobile Menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    [closeMenu, menuOverlay, ...mobileNavLinks].forEach(el => el.addEventListener('click', closeMobileMenu));

    // Theme
    desktopThemeToggle.addEventListener('click', toggleTheme);
    mobileThemeSwitch.addEventListener('click', toggleTheme);

    // Language
    mobileLangOptions.forEach(option => {
        option.addEventListener('click', () => setLanguage(option.getAttribute('data-lang')));
    });
    langDropdown.addEventListener('click', (e) => {
        const option = e.target.closest('li');
        if (option) {
            setLanguage(option.getAttribute('data-lang'));
            desktopLangSelector.classList.remove('open');
        }
    });
    selectedLangDisplay.addEventListener('click', () => desktopLangSelector.classList.toggle('open'));
    document.addEventListener('click', (e) => {
        if (!desktopLangSelector.contains(e.target)) {
            desktopLangSelector.classList.remove('open');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // =========================================================================
    // INITIALIZATION
    // =========================================================================
    autoSetLanguage();
    setInterval(createFloatingCode, 2000);

});
