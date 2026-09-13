const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

class FakeElement {
    constructor({ attributes = {}, classes = [], textContent = '' } = {}) {
        this.attributes = { ...attributes };
        this.classes = new Set(classes);
        this.textContent = textContent;
        this.innerHTML = '';
        this.style = {};
        this.listeners = {};
        this.childrenBySelector = new Map();
        this.classList = {
            contains: className => this.classes.has(className),
            add: className => this.classes.add(className),
            remove: className => this.classes.delete(className),
            toggle: (className, force) => {
                const enabled = force === undefined ? !this.classes.has(className) : force;
                if (enabled) this.classes.add(className);
                else this.classes.delete(className);
                return enabled;
            }
        };
    }

    addEventListener(type, listener) {
        this.listeners[type] = listener;
    }

    dispatch(type, event = { target: this }) {
        this.listeners[type]?.(event);
    }

    getAttribute(name) {
        return this.attributes[name];
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    querySelector(selector) {
        return this.childrenBySelector.get(selector) ?? null;
    }

    querySelectorAll(selector) {
        return this.childrenBySelector.get(selector) ?? [];
    }

    contains() {
        return false;
    }

    closest() {
        return this;
    }
}

function createLanguageOption(lang, flag, name) {
    const option = new FakeElement({ attributes: { 'data-lang': lang } });
    option.childrenBySelector.set('.lang-flag', new FakeElement({ textContent: flag }));
    option.childrenBySelector.set('.lang-name', new FakeElement({ textContent: name }));
    return option;
}

function runPortfolio() {
    const projectCards = new Map();
    for (const id of ['hanoi', 'musicPlayer', 'rikka']) {
        const card = new FakeElement({ attributes: { 'data-project-id': id } });
        const title = new FakeElement({ classes: ['project-title'] });
        const fallbackTitle = new FakeElement({ classes: ['fallback-title'] });
        const description = new FakeElement({ classes: ['project-description'] });
        card.childrenBySelector.set('.project-title, .fallback-title', [title, fallbackTitle]);
        card.childrenBySelector.set('.project-description', description);
        projectCards.set(id, { card, title, fallbackTitle, description });
    }

    const languageOptions = [
        createLanguageOption('pt', 'BR', 'Português'),
        createLanguageOption('en', 'US', 'English'),
        createLanguageOption('ja', 'JP', '日本語')
    ];
    const elementsById = new Map();
    for (const id of [
        'bgAnimation', 'hamburger', 'mobileMenu', 'menuOverlay', 'closeMenu',
        'desktopThemeToggle', 'desktopThemeIcon', 'themeSwitch',
        'desktopLangSelector', 'selectedLang', 'langDropdown'
    ]) {
        elementsById.set(id, new FakeElement());
    }

    const themeInfo = new FakeElement();
    const documentElement = new FakeElement();
    const body = new FakeElement();
    const document = {
        documentElement,
        body,
        addEventListener(type, listener) {
            if (type === 'DOMContentLoaded') this.onReady = listener;
        },
        getElementById(id) {
            return elementsById.get(id) ?? null;
        },
        querySelector(selector) {
            if (selector === '.mobile-theme-toggle .theme-info') return themeInfo;
            const projectMatch = selector.match(/^\[data-project-id="(.+)"\]$/);
            if (projectMatch) return projectCards.get(projectMatch[1])?.card ?? null;
            const languageMatch = selector.match(/^\.lang-dropdown li\[data-lang="(.+)"\]$/);
            if (languageMatch) {
                return languageOptions.find(option => option.getAttribute('data-lang') === languageMatch[1]) ?? null;
            }
            return null;
        },
        querySelectorAll(selector) {
            if (selector === '.mobile-lang-selector .lang-option') return languageOptions;
            if (selector === '.lang-dropdown li') return languageOptions;
            return [];
        },
        createElement() {
            return new FakeElement();
        }
    };

    elementsById.get('bgAnimation').appendChild = () => {};
    const context = {
        console,
        document,
        navigator: { language: 'pt-BR' },
        window: { addEventListener() {} },
        fetch: async () => ({ ok: true, json: async () => ({ countryCode: 'BR' }) }),
        setInterval() {},
        setTimeout() {}
    };

    vm.runInNewContext(script, context, { filename: 'script.js' });
    document.onReady();

    return { projectCards, languageOptions, body, elementsById };
}

const expectedTranslations = {
    pt: {
        hanoi: ['Torre de Hanói 3D', 'Visualização 3D interativa do clássico problema da Torre de Hanói, criada para demonstrar lógica, algoritmos e interação em tempo real.'],
        musicPlayer: ['Music Player App', 'Player de música moderno com playlists personalizadas, visualizador de áudio e controles avançados.'],
        rikka: ['Rikka', 'Site oficial da Rikka, um bot de coleção de cartas para Discord com personagens de animes e jogos, drops, diferentes edições, wishlist e trades.']
    },
    en: {
        hanoi: ['3D Tower of Hanoi', 'Interactive 3D visualization of the classic Tower of Hanoi problem, built to demonstrate logic, algorithms, and real-time interaction.'],
        musicPlayer: ['Music Player App', 'Modern music player with custom playlists, audio visualizer and advanced controls.'],
        rikka: ['Rikka', 'Official website for Rikka, a Discord card collection bot featuring characters from anime and games, with drops, multiple editions, wishlists, and trades.']
    },
    ja: {
        hanoi: ['3Dハノイの塔', '古典的なハノイの塔をインタラクティブな3Dで可視化し、論理、アルゴリズム、リアルタイム操作を体験できるプロジェクトです。'],
        musicPlayer: ['ミュージックプレーヤーアプリ', 'カスタムプレイリスト、オーディオビジュアライザー、高度なコントロールを備えたモダンなミュージックプレーヤー。'],
        rikka: ['Rikka', 'アニメやゲームのキャラクターカードを集めるDiscordボット「Rikka」の公式サイト。ドロップ、複数のエディション、ウィッシュリスト、トレード機能に対応しています。']
    }
};

test('renders all project titles and descriptions and updates them without reload', () => {
    const app = runPortfolio();

    for (const lang of ['pt', 'en', 'ja']) {
        const option = app.languageOptions.find(item => item.getAttribute('data-lang') === lang);
        option.dispatch('click');

        for (const [id, [title, description]] of Object.entries(expectedTranslations[lang])) {
            const rendered = app.projectCards.get(id);
            assert.equal(rendered.title.textContent, title);
            assert.equal(rendered.fallbackTitle.textContent, title);
            assert.equal(rendered.description.textContent, description);
        }
    }
});

test('keeps semantic project IDs and the requested project associations', () => {
    for (const id of ['hanoi', 'musicPlayer', 'rikka']) {
        assert.match(html, new RegExp(`data-project-id="${id}"`));
        assert.match(script, new RegExp(`id: '${id}'`));
        assert.match(script, new RegExp(`projects\\.${id}\\.title`));
        assert.match(script, new RegExp(`projects\\.${id}\\.description`));
    }

    assert.match(html, /https:\/\/hanoi-tower-3d\.vercel\.app\//);
    assert.match(html, /https:\/\/github\.com\/Leonardo-ST\/hanoi-tower-3d/);
    assert.match(html, /https:\/\/rikka-website\.vercel\.app\//);
    assert.match(html, /https:\/\/github\.com\/Rikka-Bot\/rikka-website/);
    assert.doesNotMatch(`${html}\n${script}`, /E-commerce Moderno|Dashboard Analytics/);
});

test('keeps preview, title, description, technologies and actions in card order', () => {
    for (const id of ['hanoi', 'musicPlayer', 'rikka']) {
        const start = html.indexOf(`data-project-id="${id}"`);
        const end = html.indexOf('data-project-id="', start + 1);
        const card = html.slice(start, end === -1 ? html.length : end);
        const positions = [
            card.indexOf('project-image'),
            card.indexOf('project-title'),
            card.indexOf('project-description'),
            card.indexOf('project-tech'),
            card.indexOf('project-links')
        ];
        assert.ok(positions.every(position => position >= 0));
        assert.deepEqual(positions, [...positions].sort((a, b) => a - b));
    }
});

test('keeps light and dark theme switching operational', () => {
    const app = runPortfolio();
    assert.equal(app.body.getAttribute('data-theme'), 'dark');
    app.elementsById.get('desktopThemeToggle').dispatch('click');
    assert.equal(app.body.getAttribute('data-theme'), 'light');
    app.elementsById.get('desktopThemeToggle').dispatch('click');
    assert.equal(app.body.getAttribute('data-theme'), 'dark');
});
