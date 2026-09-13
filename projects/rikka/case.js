document.addEventListener('DOMContentLoaded', () => {
    const dictionaries = {
        pt: {
            skip:'Ir para o conteúdo',navHome:'Início',navAbout:'Sobre',navSkills:'Skills',navProjects:'Projetos',navContact:'Contato',themeLabel:'Tema',languageLabel:'Idioma',themeDark:'Modo escuro',themeLight:'Modo claro',
            heroEyebrow:'CASE STUDY / PROJETO',heroLead:'Uma plataforma de coleção de cartas para Discord construída como um ecossistema de bot, serviços, catálogo, API, ferramentas administrativas e experiência web.',roleLabel:'Papel',roleValue:'Desenvolvimento Full Stack / Arquitetura',statusLabel:'Status',statusValue:'Projeto ativo',codeLabel:'Código',codeValue:'Núcleo privado',websiteLabel:'Website',websiteValue:'Público',visitRikka:'Visitar Rikka',backProjects:'Voltar aos projetos',privateShort:'Core source code: privado',previewLabel:'Preview público do website da Rikka',
            overviewKicker:'VISÃO GERAL',overviewTitle:'O que é a Rikka?',overviewP1:'A Rikka é uma plataforma de coleção de cartas integrada ao Discord. Usuários recebem drops, colecionam personagens de animes e jogos, organizam suas coleções, usam wishlist e realizam trocas.',overviewP2:'Por trás dessa experiência existe uma arquitetura formada por serviços de jogo, catálogo próprio, API, índices derivados, ferramentas administrativas e um website público.',
            roleKicker:'CONTRIBUIÇÃO',roleTitle:'Meu papel no projeto',roleIntro:'Desenvolvi a experiência como um sistema completo, conectando produto, domínio, dados e operação.',roleBot:'Bot e lógica de domínio',roleBackend:'Backend e APIs',roleData:'Modelagem e persistência',roleCatalog:'Catálogo e busca',roleAdmin:'Ferramentas administrativas',roleWeb:'Website',roleOps:'Deploy e operação',
            architectureKicker:'SISTEMA',architectureTitle:'Arquitetura',architectureIntro:'Uma visão conceitual dos blocos que sustentam a experiência, sem expor a implementação privada.',architectureAlt:'Fluxo conceitual: Discord se conecta ao bot Rikka; o bot usa dados do usuário e a API de catálogo; a API distribui catálogo e índices; website, painel, workers e Akane completam o ecossistema.',interaction:'INTERAÇÃO',core:'NÚCLEO',gameServices:'Serviços de jogo',state:'ESTADO',userData:'Dados do usuário',distribution:'DISTRIBUIÇÃO',content:'CONTEÚDO',catalogIndexes:'Catálogo + índices',publicExperience:'EXPERIÊNCIA PÚBLICA',operation:'OPERAÇÃO',adminTools:'Painel · Workers · Akane',asyncConsistency:'consistência assíncrona',
            componentsKicker:'ECOSSISTEMA',componentsTitle:'Principais componentes',componentBotTitle:'Bot & domínio de jogo',componentBotText:'Interações no Discord, drops, coleção, wishlist, trades e economia formam o núcleo da experiência.',componentCatalogTitle:'Catálogo & API',componentCatalogText:'Personagens, obras e edições são organizados em um catálogo com busca, índices e distribuição controlada.',componentAdminTitle:'Administração',componentAdminText:'Painel, imports, revisões, workers e Akane sustentam os fluxos operacionais privados.',componentWebTitle:'Experiência web',componentWebText:'O website público apresenta o produto e integra autenticação pelo Discord em uma experiência responsiva.',
            challengesKicker:'DECISÕES TÉCNICAS',challengesTitle:'Desafios de engenharia',challengesIntro:'Quatro problemas reais que moldaram a arquitetura da Rikka.',problem:'Problema',decision:'Decisão',solution:'Solução',challenge1Title:'Busca e drops sem varrer o catálogo',challenge1Problem:'Consultas frequentes e seleção de drops não deveriam depender de scans completos do banco.',challenge1Decision:'Transferir parte do custo para quando o catálogo muda e manter o caminho frequente previsível.',challenge1Solution:'Projeções materializadas: dados normalizados para busca e uma estrutura hierárquica ponderada para drops.',challenge2Title:'Operar quando o catálogo não responde',challenge2Problem:'Consultar um serviço externo em cada comando aumentaria latência, leituras e acoplamento à disponibilidade.',challenge2Decision:'Usar uma visão local validada e atualizar somente quando a versão do catálogo muda.',challenge2Solution:'Snapshots locais, validação antes da troca, versionamento, ETag e retry com backoff. Uma falha mantém o último snapshot válido.',challenge3Title:'Consistência sem transação distribuída',challenge3Problem:'Um claim persiste a carta no estado do usuário e também atualiza informações pertencentes ao catálogo, em domínios de dados distintos.',challenge3Decision:'Priorizar o commit da carta e tratar a atualização remota como consistência assíncrona e idempotente.',challenge3Solution:'Uma estratégia semelhante ao padrão Transactional Outbox: evento persistido com a operação principal, recibo, retries e reconciliação.',challenge3Result:'Falhas temporárias do catálogo não invalidam a carta; reprocessamentos não duplicam o contador.',challenge4Title:'Processamento administrativo recuperável',challenge4Problem:'Imports, imagens e exclusões podem durar além de uma requisição e ser interrompidos.',challenge4Decision:'Separar submissão, execução e acompanhamento para não bloquear a interface administrativa.',challenge4Solution:'Fila persistida, estados, progresso, recuperação, retry, histórico e desligamento gracioso.',integrityTitle:'Concorrência e integridade',integrityText:'Claims concorrentes, reserva de seriais e trades usam transações e validações dentro da fronteira transacional para evitar estados parciais.',
            stackTitle:'Tecnologia por responsabilidade',stackIntro:'Cada ferramenta aparece onde resolve um problema concreto do sistema.',infra:'INFRA / OPERAÇÃO',integrations:'INTEGRAÇÕES',qualityKicker:'ALÉM DAS FEATURES',qualityTitle:'Qualidade e confiabilidade',qualityText:'A base do projeto combina testes automatizados, transações, idempotência, retries, reconciliação, filas persistidas, snapshots, migrações e instrumentação de operações.',quality1:'Testes nos fluxos críticos',quality2:'Falhas tratadas como parte do fluxo',quality3:'Dados derivados reconstruíveis',quality4:'Operações administrativas auditáveis',
            privateKicker:'ESCOPO PÚBLICO',privateTitle:'O núcleo operacional permanece privado.',privateText:'O website possui um repositório público. O código do bot, dos serviços internos e das ferramentas administrativas não é distribuído publicamente.',websiteSource:'Código do website',finalKicker:'RIKKA EM AÇÃO',finalTitle:'Quer ver a parte pública funcionando?',finalText:'Conheça a experiência web ou explore o código público do website.',githubWebsite:'Website no GitHub',footerTagline:'Criando o futuro, uma linha de código por vez',footerNavigation:'Navegação',footerConnect:'Conecte-se',footerRights:'Todos os direitos reservados.'
        },
        en: {
            skip:'Skip to content',navHome:'Home',navAbout:'About',navSkills:'Skills',navProjects:'Projects',navContact:'Contact',themeLabel:'Theme',languageLabel:'Language',themeDark:'Dark mode',themeLight:'Light mode',
            heroEyebrow:'CASE STUDY / PROJECT',heroLead:'A Discord card collection platform built as an ecosystem of bots, services, catalog, API, administration tools, and a web experience.',roleLabel:'Role',roleValue:'Full Stack Development / Architecture',statusLabel:'Status',statusValue:'Active project',codeLabel:'Code',codeValue:'Private core',websiteLabel:'Website',websiteValue:'Public',visitRikka:'Visit Rikka',backProjects:'Back to projects',privateShort:'Core source code: private',previewLabel:"Preview of Rikka's public website",
            overviewKicker:'OVERVIEW',overviewTitle:'What is Rikka?',overviewP1:'Rikka is a card collection platform integrated with Discord. Users receive drops, collect characters from anime and games, organize collections, use wishlists, and trade.',overviewP2:'Behind that experience is an architecture made of game services, a custom catalog, API, derived indexes, administration tools, and a public website.',
            roleKicker:'CONTRIBUTION',roleTitle:'My role in the project',roleIntro:'I developed the experience as a complete system, connecting product, domain, data, and operations.',roleBot:'Bot and domain logic',roleBackend:'Backend and APIs',roleData:'Data modeling and persistence',roleCatalog:'Catalog and search',roleAdmin:'Administration tools',roleWeb:'Website',roleOps:'Deployment and operations',
            architectureKicker:'SYSTEM',architectureTitle:'Architecture',architectureIntro:'A conceptual view of the building blocks behind the experience, without exposing private implementation details.',architectureAlt:'Conceptual flow: Discord connects to the Rikka bot; the bot uses user data and the Catalog API; the API distributes catalog data and indexes; the website, admin panel, workers, and Akane complete the ecosystem.',interaction:'INTERACTION',core:'CORE',gameServices:'Game services',state:'STATE',userData:'User data',distribution:'DISTRIBUTION',content:'CONTENT',catalogIndexes:'Catalog + indexes',publicExperience:'PUBLIC EXPERIENCE',operation:'OPERATIONS',adminTools:'Panel · Workers · Akane',asyncConsistency:'asynchronous consistency',
            componentsKicker:'ECOSYSTEM',componentsTitle:'Main components',componentBotTitle:'Bot & game domain',componentBotText:'Discord interactions, drops, collections, wishlists, trades, and economy form the core experience.',componentCatalogTitle:'Catalog & API',componentCatalogText:'Characters, titles, and editions are organized in a catalog with search, indexes, and controlled distribution.',componentAdminTitle:'Administration',componentAdminText:'The panel, imports, reviews, workers, and Akane support private operational workflows.',componentWebTitle:'Web experience',componentWebText:'The public website presents the product and integrates Discord authentication in a responsive experience.',
            challengesKicker:'TECHNICAL DECISIONS',challengesTitle:'Engineering challenges',challengesIntro:"Four real problems that shaped Rikka's architecture.",problem:'Problem',decision:'Decision',solution:'Solution',challenge1Title:'Search and drops without catalog scans',challenge1Problem:'Frequent queries and drop selection should not depend on full database scans.',challenge1Decision:'Move part of the cost to catalog updates and keep the frequent read path predictable.',challenge1Solution:'Materialized projections: normalized search data and a weighted hierarchical structure for drops.',challenge2Title:'Operating when the catalog does not respond',challenge2Problem:'Calling an external service for every command would increase latency, reads, and coupling to availability.',challenge2Decision:'Use a validated local view and update it only when the catalog version changes.',challenge2Solution:'Local snapshots, validation before swapping, versioning, ETag, and retries with backoff. A failure keeps the last valid snapshot.',challenge3Title:'Consistency without a distributed transaction',challenge3Problem:'A claim persists a card in user state and updates information owned by the catalog across separate data domains.',challenge3Decision:'Prioritize the card commit and handle the remote update with asynchronous, idempotent consistency.',challenge3Solution:'A strategy similar to the Transactional Outbox pattern: an event persisted with the main operation, plus a receipt, retries, and reconciliation.',challenge3Result:'Temporary catalog failures do not invalidate the card, and reprocessing does not duplicate the counter.',challenge4Title:'Recoverable administration processing',challenge4Problem:'Imports, image processing, and deletion can outlive a request and may be interrupted.',challenge4Decision:'Separate submission, execution, and tracking so the administration interface is not blocked.',challenge4Solution:'A persistent queue, processing states, progress, recovery, retry, history, and graceful shutdown.',integrityTitle:'Concurrency and integrity',integrityText:'Concurrent claims, serial reservations, and trades use transactions and validation within the transactional boundary to avoid partial states.',
            stackTitle:'Technology by responsibility',stackIntro:'Each tool appears where it solves a concrete system problem.',infra:'INFRA / OPERATIONS',integrations:'INTEGRATIONS',qualityKicker:'BEYOND FEATURES',qualityTitle:'Quality and reliability',qualityText:'The project combines automated tests, transactions, idempotency, retries, reconciliation, persistent queues, snapshots, migrations, and operational instrumentation.',quality1:'Tests for critical flows',quality2:'Failures treated as part of the flow',quality3:'Rebuildable derived data',quality4:'Auditable administration operations',
            privateKicker:'PUBLIC SCOPE',privateTitle:'The operational core remains private.',privateText:'The website has a public repository. The bot, internal services, and administration tools are not distributed publicly.',websiteSource:'Website source',finalKicker:'RIKKA IN ACTION',finalTitle:'Want to see the public experience?',finalText:'Visit the web experience or explore the public website code.',githubWebsite:'Website on GitHub',footerTagline:'Building the future, one line of code at a time',footerNavigation:'Navigation',footerConnect:'Connect',footerRights:'All rights reserved.'
        },
        ja: {
            skip:'本文へ移動',navHome:'ホーム',navAbout:'私について',navSkills:'スキル',navProjects:'プロジェクト',navContact:'お問い合わせ',themeLabel:'テーマ',languageLabel:'言語',themeDark:'ダークモード',themeLight:'ライトモード',
            heroEyebrow:'ケーススタディ / プロジェクト',heroLead:'ボット、サービス、カタログ、API、管理ツール、Web体験から成るエコシステムとして構築した、Discord向けカード収集プラットフォームです。',roleLabel:'担当',roleValue:'フルスタック開発 / アーキテクチャ',statusLabel:'状態',statusValue:'開発継続中',codeLabel:'コード',codeValue:'コアは非公開',websiteLabel:'Webサイト',websiteValue:'公開',visitRikka:'Rikkaを見る',backProjects:'プロジェクトへ戻る',privateShort:'コアのソースコード：非公開',previewLabel:'Rikka公式Webサイトのプレビュー',
            overviewKicker:'概要',overviewTitle:'Rikkaとは？',overviewP1:'RikkaはDiscordと連携するカード収集プラットフォームです。ユーザーはドロップでアニメやゲームのキャラクターを集め、コレクションやウィッシュリストを管理し、トレードできます。',overviewP2:'その体験を、ゲームサービス、独自カタログ、API、派生インデックス、管理ツール、公開Webサイトから成るアーキテクチャが支えています。',
            roleKicker:'担当領域',roleTitle:'プロジェクトでの役割',roleIntro:'プロダクト、ドメイン、データ、運用をつなぐ一つのシステムとして開発しました。',roleBot:'ボットとドメインロジック',roleBackend:'バックエンドとAPI',roleData:'データ設計と永続化',roleCatalog:'カタログと検索',roleAdmin:'管理ツール',roleWeb:'Webサイト',roleOps:'デプロイと運用',
            architectureKicker:'システム',architectureTitle:'アーキテクチャ',architectureIntro:'非公開の実装詳細を明かさず、体験を支える主要ブロックを概念的に示します。',architectureAlt:'概念フロー：DiscordからRikka Botへ接続し、ボットはユーザーデータとCatalog APIを利用します。APIはカタログとインデックスを配信し、Webサイト、管理パネル、ワーカー、Akaneがエコシステムを支えます。',interaction:'インタラクション',core:'コア',gameServices:'ゲームサービス',state:'状態',userData:'ユーザーデータ',distribution:'配信',content:'コンテンツ',catalogIndexes:'カタログ＋インデックス',publicExperience:'公開体験',operation:'運用',adminTools:'管理パネル・ワーカー・Akane',asyncConsistency:'非同期の整合性',
            componentsKicker:'エコシステム',componentsTitle:'主要コンポーネント',componentBotTitle:'ボット＆ゲームドメイン',componentBotText:'Discord上の操作、ドロップ、コレクション、ウィッシュリスト、トレード、エコノミーが体験の中心です。',componentCatalogTitle:'カタログ＆API',componentCatalogText:'キャラクター、作品、エディションを、検索・インデックス・制御された配信を備えたカタログで管理します。',componentAdminTitle:'管理',componentAdminText:'管理パネル、インポート、レビュー、ワーカー、Akaneが非公開の運用フローを支えます。',componentWebTitle:'Web体験',componentWebText:'公開Webサイトはプロダクトを紹介し、レスポンシブな体験の中でDiscord認証を連携します。',
            challengesKicker:'技術的な判断',challengesTitle:'エンジニアリング上の課題',challengesIntro:'Rikkaの設計を形づくった4つの実際の課題です。',problem:'課題',decision:'判断',solution:'解決策',challenge1Title:'全件走査に頼らない検索とドロップ',challenge1Problem:'頻繁な検索やドロップ選択を、データベースの全件走査に依存させない必要がありました。',challenge1Decision:'コストの一部をカタログ更新時へ移し、頻繁な読み取り経路を予測しやすくしました。',challenge1Solution:'検索用の正規化データと、ドロップ用の階層型・重み付き構造を持つマテリアライズド・プロジェクションを採用しました。',challenge2Title:'カタログが応答しない場合も動作を継続',challenge2Problem:'コマンドごとの外部問い合わせは、遅延、読み取り、可用性への依存を増やします。',challenge2Decision:'検証済みのローカルビューを使い、カタログのバージョン変更時だけ更新します。',challenge2Solution:'ローカルスナップショット、交換前の検証、バージョン管理、ETag、バックオフ付きリトライを使用し、失敗時は最後の有効な状態を保ちます。',challenge3Title:'分散トランザクションなしでの整合性',challenge3Problem:'カード取得では、別々のデータ領域にあるユーザー状態とカタログ情報の両方を更新します。',challenge3Decision:'カードの確定を優先し、リモート更新を非同期かつ冪等に扱います。',challenge3Solution:'Transactional Outboxに似た戦略として、主要操作とイベントを同時に保存し、受領記録、リトライ、整合処理を組み合わせました。',challenge3Result:'一時的なカタログ障害でもカードは無効にならず、再処理でカウンターが重複しません。',challenge4Title:'復旧可能な管理処理',challenge4Problem:'インポート、画像処理、削除はHTTPリクエストより長く続き、中断される可能性があります。',challenge4Decision:'受付・実行・進捗確認を分離し、管理画面をブロックしない構成にしました。',challenge4Solution:'永続キュー、処理状態、進捗、復旧、リトライ、履歴、グレースフルシャットダウンを組み合わせています。',integrityTitle:'並行処理と整合性',integrityText:'同時取得、シリアル予約、トレードでは、トランザクション境界内の検証と更新により部分的な状態を防ぎます。',
            stackTitle:'役割ごとの技術',stackIntro:'各技術を、システムの具体的な課題を解決する場所で使用しています。',infra:'インフラ / 運用',integrations:'外部連携',qualityKicker:'機能の先にあるもの',qualityTitle:'品質と信頼性',qualityText:'自動テスト、トランザクション、冪等性、リトライ、整合処理、永続キュー、スナップショット、移行、運用計測を組み合わせています。',quality1:'重要フローのテスト',quality2:'障害をフローの一部として設計',quality3:'再構築可能な派生データ',quality4:'追跡可能な管理操作',
            privateKicker:'公開範囲',privateTitle:'運用コアは非公開です。',privateText:'Webサイトのリポジトリは公開しています。ボット、内部サービス、管理ツールのコードは一般公開していません。',websiteSource:'Webサイトのコード',finalKicker:'RIKKAを体験',finalTitle:'公開されている体験を見てみませんか？',finalText:'Web体験を見るか、公開されているWebサイトのコードをご覧ください。',githubWebsite:'GitHubでWebサイトを見る',footerTagline:'一行のコードから未来をつくる',footerNavigation:'ナビゲーション',footerConnect:'リンク',footerRights:'全著作権所有。'
        }
    };

    const preferences = window.PortfolioPreferences;
    let language = preferences?.getLanguage() || 'pt';
    let theme = preferences?.getTheme() || 'dark';
    const languageMeta = { pt: ['🇧🇷', 'PT'], en: ['🇺🇸', 'EN'], ja: ['🇯🇵', 'JA'] };
    const seo = {
        pt: ['Rikka — Case de Engenharia | Leonardo','Case técnico da Rikka, uma plataforma de coleção de cartas para Discord com bot, catálogo, API, processamento assíncrono e infraestrutura própria.'],
        en: ['Rikka — Engineering Case Study | Leonardo','Rikka engineering case study: a Discord card collection platform with a bot, catalog, API, asynchronous processing, and supporting infrastructure.'],
        ja: ['Rikka — エンジニアリング事例 | Leonardo','ボット、カタログ、API、非同期処理、運用基盤で構築したDiscord向けカード収集プラットフォーム「Rikka」の技術事例。']
    };

    const t = key => dictionaries[language]?.[key] || dictionaries.pt[key] || key;
    const desktopTheme = document.getElementById('desktopThemeToggle');
    const mobileTheme = document.getElementById('themeSwitch');
    const desktopSelector = document.getElementById('desktopLangSelector');
    const selectedLanguage = document.getElementById('selectedLang');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('menuOverlay');

    function applyTheme(nextTheme) {
        theme = preferences?.setTheme(nextTheme) || nextTheme;
        const dark = theme === 'dark';
        document.getElementById('desktopThemeIcon').textContent = dark ? '🌙' : '☀️';
        mobileTheme.classList.toggle('active', !dark);
        mobileTheme.setAttribute('aria-pressed', String(!dark));
        desktopTheme.setAttribute('aria-label', dark ? t('themeLight') : t('themeDark'));
        mobileTheme.setAttribute('aria-label', dark ? t('themeLight') : t('themeDark'));
        const info = document.querySelector('.mobile-theme-toggle .theme-info');
        info.textContent = `${dark ? '🌙' : '☀️'} ${t(dark ? 'themeDark' : 'themeLight')}`;
    }

    function applyLanguage(nextLanguage) {
        language = dictionaries[nextLanguage] ? nextLanguage : 'pt';
        preferences?.setLanguage(language);
        document.querySelectorAll('[data-case]').forEach(element => { element.textContent = t(element.dataset.case); });
        document.querySelectorAll('[data-case-aria]').forEach(element => element.setAttribute('aria-label', t(element.dataset.caseAria)));
        document.querySelectorAll('[data-case-title]').forEach(element => element.setAttribute('title', t(element.dataset.caseTitle)));
        const [flag, shortName] = languageMeta[language];
        document.getElementById('selectedLangFlag').textContent = flag;
        document.getElementById('selectedLangName').textContent = shortName;
        document.querySelectorAll('[data-lang]').forEach(element => {
            const active = element.dataset.lang === language;
            element.classList.toggle('active', active);
            if (element.getAttribute('role') === 'option') element.setAttribute('aria-selected', String(active));
        });
        document.title = seo[language][0];
        document.querySelector('meta[name="description"]').content = seo[language][1];
        document.querySelector('meta[property="og:title"]').content = seo[language][0];
        document.querySelector('meta[property="og:description"]').content = seo[language][1];
        document.querySelector('meta[name="twitter:title"]').content = seo[language][0];
        document.querySelector('meta[name="twitter:description"]').content = seo[language][1];
        applyTheme(theme);
    }

    function closeMenu() {
        mobileMenu.classList.remove('active'); overlay.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true'); hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('inert', '');
        document.body.style.overflow = '';
    }
    function openMenu() {
        mobileMenu.classList.add('active'); overlay.classList.add('active');
        mobileMenu.setAttribute('aria-hidden', 'false'); hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.removeAttribute('inert');
        document.body.style.overflow = 'hidden'; document.getElementById('closeMenu').focus();
    }

    desktopTheme.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));
    mobileTheme.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));
    selectedLanguage.addEventListener('click', () => {
        const open = desktopSelector.classList.toggle('open'); selectedLanguage.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('[data-lang]').forEach(option => option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang); desktopSelector.classList.remove('open'); selectedLanguage.setAttribute('aria-expanded', 'false');
    }));
    document.querySelectorAll('.lang-dropdown [data-lang]').forEach(option => option.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); option.click(); }
    }));
    document.addEventListener('click', event => {
        if (!desktopSelector.contains(event.target)) { desktopSelector.classList.remove('open'); selectedLanguage.setAttribute('aria-expanded', 'false'); }
    });
    hamburger.addEventListener('click', openMenu); document.getElementById('closeMenu').addEventListener('click', closeMenu); overlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-nav-links a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); desktopSelector.classList.remove('open'); } });

    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !reducedMotion) {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        }), { threshold: .12 });
        document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    } else document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));

    const snippets = ['snapshot.validate()', 'transaction.commit()', 'catalog.search()', 'queue.recover()', 'retry(backoff)', 'index.rebuild()'];
    if (!reducedMotion) setInterval(() => {
        const element = document.createElement('div'); element.className = 'floating-code';
        element.textContent = snippets[Math.floor(Math.random() * snippets.length)]; element.style.left = `${Math.random() * 100}%`;
        element.style.animationDuration = `${18 + Math.random() * 8}s`; document.getElementById('bgAnimation').appendChild(element);
        setTimeout(() => element.remove(), 27000);
    }, 3500);

    applyLanguage(language);
});
