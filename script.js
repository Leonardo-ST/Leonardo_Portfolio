// Floating Code Animation
const bgAnimation = document.getElementById('bgAnimation');
const codeSnippets = [
    'const app = () => {}',
    'useState()',
    'useEffect()',
    '<Component />',
    'npm install',
    'git commit',
    'async/await',
    'fetch()',
    'map()',
    'filter()',
    'reduce()',
    'props.children',
    'styled-components',
    'tailwind',
    'responsive',
    'mobile-first'
];

function createFloatingCode() {
    const code = document.createElement('div');
    code.className = 'floating-code';
    code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    code.style.left = Math.random() * 100 + '%';
    code.style.animationDuration = (Math.random() * 10 + 15) + 's';
    code.style.animationDelay = Math.random() * 5 + 's';
    
    bgAnimation.appendChild(code);
    
    setTimeout(() => {
        code.remove();
    }, 25000);
}

setInterval(createFloatingCode, 2000);

// Translations
const translations = {
    pt: {
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-skills': 'Skills',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contato',
        'hero-greeting': 'console.log("Olá, mundo!");',
        'hero-title': 'Frontend Developer',
        'hero-subtitle': 'Criando experiências digitais incríveis',
        'hero-description': 'Especializado em React, Vue.js e tecnologias modernas de frontend. Transformo designs em interfaces interativas e responsivas.',
        'hero-cta1': 'Ver Projetos',
        'hero-cta2': 'Fale Comigo',
        'about-role': 'Frontend Developer',
        'about-passion': 'UI/UX e Performance',
        'about-focus': 'React & Next.js',
        'skills-title': 'Minhas Skills',
        'skill1-desc': 'Desenvolvimento com as principais bibliotecas e frameworks modernos',
        'skill2-desc': 'Criação de interfaces intuitivas e experiências de usuário excepcionais',
        'skill3-desc': 'Desenvolvimento de aplicações que funcionam perfeitamente em todos os dispositivos',
        'skill4-desc': 'Otimização de aplicações para máxima velocidade e eficiência',
        'projects-title': 'Meus Projetos',
        'project1-title': 'E-commerce Moderno',
        'project1-desc': 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo.',
        'project2-title': 'Dashboard Analytics',
        'project2-desc': 'Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios em tempo real.',
        'project3-title': 'Music Player App',
        'project3-desc': 'Player de música moderno com playlists personalizadas, visualizador de áudio e controles avançados.',
        'contact-title': 'Vamos trabalhar juntos?',
        'contact-description': 'Estou sempre aberto a novos projetos e oportunidades. Entre em contato!',
        'footer-tagline': 'Criando o futuro, uma linha de código por vez',
        'footer-navigation': 'Navegação',
        'footer-connect': 'Conecte-se',
        'footer-rights': 'Todos os direitos reservados.',
        'footer-designed': 'Designed by',
        'theme-label': 'Tema',
        'language-label': 'Idioma',
        'theme-dark': 'Modo Escuro',
        'theme-light': 'Modo Claro'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-greeting': 'console.log("Hello, world!");',
        'hero-title': 'Frontend Developer',
        'hero-subtitle': 'Creating amazing digital experiences',
        'hero-description': 'Specialized in React, Vue.js and modern frontend technologies. I transform designs into interactive and responsive interfaces.',
        'hero-cta1': 'View Projects',
        'hero-cta2': 'Contact Me',
        'about-role': 'Frontend Developer',
        'about-passion': 'UI/UX & Performance',
        'about-focus': 'React & Next.js',
        'skills-title': 'My Skills',
        'skill1-desc': 'Development with the main modern libraries and frameworks',
        'skill2-desc': 'Creating intuitive interfaces and exceptional user experiences',
        'skill3-desc': 'Developing applications that work perfectly on all devices',
        'skill4-desc': 'Application optimization for maximum speed and efficiency',
        'projects-title': 'My Projects',
        'project1-title': 'Modern E-commerce',
        'project1-desc': 'Complete e-commerce platform with shopping cart, payment system and administrative panel.',
        'project2-title': 'Analytics Dashboard',
        'project2-desc': 'Interactive dashboard for data visualization with dynamic charts and real-time reports.',
        'project3-title': 'Music Player App',
        'project3-desc': 'Modern music player with custom playlists, audio visualizer and advanced controls.',
        'contact-title': 'Let\'s work together?',
        'contact-description': 'I\'m always open to new projects and opportunities. Get in touch!',
        'footer-tagline': 'Building the future, one line of code at a time',
        'footer-navigation': 'Navigation',
        'footer-connect': 'Connect',
        'footer-rights': 'All rights reserved.',
        'footer-designed': 'Designed by',
        'theme-label': 'Theme',
        'language-label': 'Language',
        'theme-dark': 'Dark Mode',
        'theme-light': 'Light Mode'
    },
    ja: {
        'nav-home': 'ホーム',
        'nav-about': '私について',
        'nav-skills': 'スキル',
        'nav-projects': 'プロジェクト',
        'nav-contact': 'お問い合わせ',
        'hero-greeting': 'console.log("こんにちは、世界！");',
        'hero-title': 'フロントエンド開発者',
        'hero-subtitle': '素晴らしいデジタル体験を創造',
        'hero-description': 'React、Vue.js、最新のフロントエンド技術を専門としています。デザインをインタラクティブでレスポンシブなインターフェースに変換します。',
        'hero-cta1': 'プロジェクトを見る',
        'hero-cta2': 'お問い合わせ',
        'about-role': 'フロントエンド開発者',
        'about-passion': 'UI/UXとパフォーマンス',
        'about-focus': 'React & Next.js',
        'skills-title': '私のスキル',
        'skill1-desc': '主要な最新ライブラリとフレームワークでの開発',
        'skill2-desc': '直感的なインターフェースと優れたユーザーエクスペリエンスの作成',
        'skill3-desc': 'すべてのデバイスで完璧に動作するアプリケーションの開発',
        'skill4-desc': '最大速度と効率のためのアプリケーション最適化',
        'projects-title': '私のプロジェクト',
        'project1-title': 'モダンEコマース',
        'project1-desc': 'ショッピングカート、決済システム、管理パネルを備えた完全なEコマースプラットフォーム。',
        'project2-title': 'アナリティクスダッシュボード',
        'project2-desc': '動的チャートとリアルタイムレポートを備えたデータ可視化用インタラクティブダッシュボード。',
        'project3-title': 'ミュージックプレーヤーアプリ',
        'project3-desc': 'カスタムプレイリスト、オーディオビジュアライザー、高度なコントロールを備えたモダンなミュージックプレーヤー。',
        'contact-title': '一緒に働きませんか？',
        'contact-description': '新しいプロジェクトや機会には常にオープンです。お気軽にお問い合わせください！',
        'footer-tagline': '一行のコードずつ、未来を創造',
        'footer-navigation': 'ナビゲーション',
        'footer-connect': '接続',
        'footer-rights': '全著作権所有。',
        'footer-designed': 'Designed by',
        'theme-label': 'テーマ',
        'language-label': '言語',
        'theme-dark': 'ダークモード',
        'theme-light': 'ライトモード'
    }
};

let currentLang = 'pt';
let currentTheme = 'dark';

// Mobile Menu Controls
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
menuOverlay.addEventListener('click', closeMobileMenu);

// Close menu when clicking on navigation links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            closeMobileMenu();
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    });
});

// Theme Toggle
const themeSwitch = document.getElementById('themeSwitch');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const body = document.body;

// Desktop Theme Toggle
const desktopThemeToggle = document.getElementById('desktopThemeToggle');
const desktopThemeIcon = document.getElementById('desktopThemeIcon');

function updateThemeDisplay() {
    if (currentTheme === 'dark') {
        themeIcon.textContent = '🌙';
        desktopThemeIcon.textContent = '🌙';
        themeText.textContent = translations[currentLang]['theme-dark'];
        themeSwitch.classList.remove('active');
    } else {
        themeIcon.textContent = '☀️';
        desktopThemeIcon.textContent = '☀️';
        themeText.textContent = translations[currentLang]['theme-light'];
        themeSwitch.classList.add('active');
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', currentTheme);
    updateThemeDisplay();
}

themeSwitch.addEventListener('click', toggleTheme);
desktopThemeToggle.addEventListener('click', toggleTheme);

// Language Selection
const langOptions = document.querySelectorAll('.lang-option');
const desktopLangOptions = document.querySelectorAll('#langDropdown li');
const desktopLangSelector = document.getElementById('desktopLangSelector');
const selectedLang = document.getElementById('selectedLang');
const selectedLangFlag = document.getElementById('selectedLangFlag');
const selectedLangName = document.getElementById('selectedLangName');

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        
        // Update active state for mobile
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Also update desktop active state
        desktopLangOptions.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });
    });
});

desktopLangOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        desktopLangSelector.classList.remove('open');
    });
});

selectedLang.addEventListener('click', () => {
    desktopLangSelector.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!desktopLangSelector.contains(e.target)) {
        desktopLangSelector.classList.remove('open');
    }
});

function setLanguage(lang) {
    currentLang = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update theme display text
    updateThemeDisplay();

    // Update document language
    document.documentElement.lang = lang;

    // Update active state for both selectors
    const activeOption = document.querySelector(`.lang-dropdown li[data-lang="${lang}"]`);
    if (activeOption) {
        desktopLangOptions.forEach(opt => opt.classList.remove('active'));
        activeOption.classList.add('active');
        
        selectedLangFlag.textContent = activeOption.querySelector('.lang-flag').textContent;
        selectedLangName.textContent = lang.toUpperCase();
    }

    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
}

// Smooth scrolling for desktop navigation links
const desktopNavLinks = document.querySelectorAll('.nav-menu a');
desktopNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
setLanguage('pt');
updateThemeDisplay();