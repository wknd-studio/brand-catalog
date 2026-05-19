// ===== 設定（ここを編集） =====
const CSV_URL = 'https://docs.google.com/spreadsheets/d/19EbxRsQBkh8FwVJSdWw3FkgjyWAk7jNfTtE8kT-FkwU/export?format=csv';
const WECHAT_ID = 'wxid_y4lm7n6y25l612';
const WECHAT_QR = './images/wechat-qr.jpg';

// ===== 翻訳定義 =====
const LANGS = {
  zh: {
    tagline: 'JAPAN OFFICIAL',
    siteTitle: '日本正品直营',
    siteSubtitle: '正规代理商直接进货·品质保证',
    trust1: '日本正规代理商直接进货，100% 正品保证',
    trust2: '可提供日本正规购买凭证',
    trust3: '价格低于日本市场定价',
    catAll: '全部',
    catMap: { '美容家電': '美容仪器', 'ヘアケア': '护发', 'スキンケア': '护肤', 'メイクアップ': '彩妆', 'アクセサリー': '配件' },
    loading: '加载中…',
    loadError: '数据加载失败，请刷新重试',
    noProducts: '暂无商品',
    badge: '日本正品',
    inquire: '询价',
    countFn: n => `共 ${n} 件商品`,
    howToBuyTitle: '购买流程',
    step1Title: '添加微信', step1Sub: '告知来意',
    step2Title: '选择商品', step2Sub: '确认库存',
    step3Title: '转账付款', step3Sub: '银行转账',
    step4Title: '发货配送', step4Sub: '全国可达',
    aboutTitle: '关于我们',
    aboutText: '我们常驻日本，从官方授权的正规代理商直接进货销售。所有商品均为日本市场流通的正规品，可提供购买凭证。如有任何疑问，欢迎通过微信联系我们。',
    wechatLabel: '微信联系方式',
    wechatNote: '添加时请注明"日本商品"',
    scanQr: '扫描二维码添加微信',
    inquireBtn: '询价',
    toastCopied: '商品名已复制',
    toastOpen: '打开微信，告知商品名称',
    copyBtn: '复制微信号',
    copiedBtn: '已复制 ✓',
    brandsLabel: '经营品牌',
    footerText: '日本正品直营',
    ctaCopy: '复制微信号',
    ctaContact: '微信咨询',
  },
  ja: {
    tagline: 'JAPAN OFFICIAL',
    siteTitle: '日本正規品直販',
    siteSubtitle: '正規代理店より直接仕入れ・品質保証',
    trust1: '正規代理店より直仕入れ、100%本物保証',
    trust2: '日本正規購入証明書の発行が可能',
    trust3: '日本市場定価よりもお得な価格',
    catAll: 'すべて',
    catMap: { '美容家電': '美容家電', 'ヘアケア': 'ヘアケア', 'スキンケア': 'スキンケア', 'メイクアップ': 'メイク', 'アクセサリー': 'アクセサリー' },
    loading: '読み込み中…',
    loadError: 'データの読み込みに失敗しました。再読み込みしてください。',
    noProducts: '商品がありません',
    badge: '正規品',
    inquire: '要問合せ',
    countFn: n => `${n} 件の商品`,
    howToBuyTitle: '購入の流れ',
    step1Title: 'WeChat追加', step1Sub: '用件を伝える',
    step2Title: '商品を選ぶ', step2Sub: '在庫確認',
    step3Title: '振り込み', step3Sub: '銀行振込',
    step4Title: '発送', step4Sub: '全国対応',
    aboutTitle: '私たちについて',
    aboutText: '日本在住スタッフが公式認定代理店より直接仕入れ販売しています。全商品は日本市場流通の正規品で、購入証明書の発行も可能です。ご不明な点はWeChatでお気軽にお問い合わせください。',
    wechatLabel: 'WeChat連絡先',
    wechatNote: '「日本商品」とメッセージをください',
    scanQr: 'QRコードをスキャンして追加',
    inquireBtn: '問い合わせ',
    toastCopied: '商品名をコピーしました',
    toastOpen: 'WeChatを開いて商品名を伝える',
    copyBtn: 'WeChat IDをコピー',
    copiedBtn: 'コピーしました ✓',
    brandsLabel: '取扱ブランド',
    footerText: '日本正規品直販',
    ctaCopy: 'WeChat IDをコピー',
    ctaContact: 'WeChatで問合せ',
  },
  en: {
    tagline: 'JAPAN OFFICIAL',
    siteTitle: 'Japan Authentic Direct',
    siteSubtitle: 'Sourced from authorized dealers · Quality guaranteed',
    trust1: 'Direct from Japan authorized dealers · 100% authentic',
    trust2: 'Official Japanese purchase receipts available',
    trust3: 'Prices below Japanese retail',
    catAll: 'All',
    catMap: { '美容家電': 'Beauty Devices', 'ヘアケア': 'Hair Care', 'スキンケア': 'Skin Care', 'メイクアップ': 'Makeup', 'アクセサリー': 'Accessories' },
    loading: 'Loading…',
    loadError: 'Failed to load products. Please refresh.',
    noProducts: 'No products found',
    badge: 'Authentic',
    inquire: 'Inquire',
    countFn: n => `${n} item${n !== 1 ? 's' : ''}`,
    howToBuyTitle: 'How to Buy',
    step1Title: 'Add WeChat', step1Sub: 'Send a message',
    step2Title: 'Choose Items', step2Sub: 'Check availability',
    step3Title: 'Bank Transfer', step3Sub: 'Make payment',
    step4Title: 'Shipping', step4Sub: 'Nationwide delivery',
    aboutTitle: 'About Us',
    aboutText: 'Based in Japan, we source directly from official authorized dealers. All products are genuine items distributed in the Japanese market, with purchase receipts available. Feel free to contact us via WeChat with any questions.',
    wechatLabel: 'WeChat Contact',
    wechatNote: 'Please mention "Japan Products" when adding',
    scanQr: 'Scan QR code to add on WeChat',
    inquireBtn: 'Inquire',
    toastCopied: 'Product name copied',
    toastOpen: 'Open WeChat & share product name',
    copyBtn: 'Copy WeChat ID',
    copiedBtn: 'Copied ✓',
    brandsLabel: 'Brands We Carry',
    footerText: 'Japan Authentic Direct',
    ctaCopy: 'Copy WeChat ID',
    ctaContact: 'Contact via WeChat',
  },
};

let products = [];
let activeCat = 'all';
let currentLang = localStorage.getItem('lang') || 'zh';

// ===== CSV パーサー =====
function parseLine(line) {
  const result = [];
  let cur = '', inQ = false;
  for (const ch of line) {
    if (ch === '"') inQ = !inQ;
    else if (ch === ',' && !inQ) { result.push(cur); cur = ''; }
    else cur += ch;
  }
  result.push(cur);
  return result;
}

function parseCsv(text) {
  const rows = text.trim().split('\n');
  const headers = parseLine(rows[0]).map(h => h.trim());
  return rows.slice(1).filter(r => r.trim()).map(row => {
    const vals = parseLine(row);
    return Object.fromEntries(headers.map((h, i) => [h, (vals[i] ?? '').trim()]));
  });
}

// ===== 商品カード =====
const IMG_PLACEHOLDER = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
</svg>`;

function productCard(p) {
  const t = LANGS[currentLang];
  const name = currentLang === 'ja' ? p.name_ja : (p.name_zh || p.name_ja);
  const regularPrice = p.price_jpy ? Number(p.price_jpy) : null;
  const sellingPrice = p.selling_price_jpy ? Number(p.selling_price_jpy) : null;
  const img = p.image_url?.startsWith('/') ? ('.' + p.image_url).replace(/ /g, '%20') : p.image_url;

  const discountPct = (regularPrice && sellingPrice && sellingPrice < regularPrice)
    ? Math.round((1 - sellingPrice / regularPrice) * 100)
    : null;

  let priceHtml;
  if (sellingPrice) {
    priceHtml = `
      ${regularPrice ? `<div class="text-xs text-gray-400 line-through">¥${regularPrice.toLocaleString()}</div>` : ''}
      <div class="text-sm font-bold text-red-500">¥${sellingPrice.toLocaleString()}</div>`;
  } else if (regularPrice) {
    priceHtml = `<div class="text-sm font-medium text-gold">¥${regularPrice.toLocaleString()}</div>`;
  } else {
    priceHtml = `<div class="text-sm font-medium text-gold">${t.inquire}</div>`;
  }

  return `<div class="border border-gray-100 rounded-lg overflow-hidden">
  <div class="relative aspect-square bg-gray-50">
    <div class="absolute inset-0 flex items-center justify-center text-gray-200">${IMG_PLACEHOLDER}</div>
    ${img ? `<img src="${img}" alt="${name}" class="absolute inset-0 w-full h-full object-contain p-3" onerror="this.style.display='none'">` : ''}
    <div class="absolute top-1.5 left-1.5 bg-gold text-white text-xs px-1.5 py-0.5 rounded leading-none">${t.badge}</div>
    ${discountPct ? `<div class="absolute top-1.5 right-1.5 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded leading-none font-bold">${discountPct}% OFF</div>` : ''}
  </div>
  <div class="p-2.5 flex flex-col gap-1.5">
    <div class="text-xs leading-snug text-gray-800" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${name}</div>
    <div>${priceHtml}</div>
    <button onclick="copyProduct(this.dataset.name)" data-name="${name.replace(/"/g, '&quot;')}"
      class="w-full text-xs py-1.5 bg-gold text-white rounded font-medium active:opacity-75">
      ${t.inquireBtn}
    </button>
  </div>
</div>`;
}

// ===== レンダリング =====
function render() {
  const t = LANGS[currentLang];
  const visible = products.filter(p =>
    p.available?.toUpperCase() === 'TRUE' &&
    (activeCat === 'all' || p.category === activeCat)
  );

  document.getElementById('product-count').textContent = t.countFn(visible.length);

  const grid = document.getElementById('product-grid');
  grid.innerHTML = visible.length
    ? visible.map(productCard).join('')
    : `<div class="col-span-full py-16 text-center text-gray-400 text-sm">${t.noProducts}</div>`;

  document.querySelectorAll('[data-cat]').forEach(btn => {
    const active = btn.dataset.cat === activeCat;
    btn.className = [
      'flex-shrink-0 text-xs px-4 py-1.5 rounded-full border transition-colors whitespace-nowrap',
      active ? 'bg-gold text-white border-gold' : 'border-gray-200 text-gray-500',
    ].join(' ');
  });
}

function initCategories() {
  const t = LANGS[currentLang];
  const available = products.filter(p => p.available?.toUpperCase() === 'TRUE');
  const cats = [...new Set(available.map(p => p.category).filter(Boolean))];
  const container = document.getElementById('category-buttons');
  container.innerHTML = [['all', t.catAll], ...cats.map(c => [c, t.catMap[c] ?? c])]
    .map(([val, label]) =>
      `<button data-cat="${val}" onclick="setCategory('${val}')"
        class="flex-shrink-0 text-xs px-4 py-1.5 rounded-full border transition-colors whitespace-nowrap ${val === activeCat ? 'bg-gold text-white border-gold' : 'border-gray-200 text-gray-500'
      }">${label}</button>`
    ).join('');
}

function initBrands() {
  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))];
  document.getElementById('brand-list').innerHTML = brands
    .map(b => `<span class="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded">${b}</span>`)
    .join('');
}

// ===== 言語切り替え =====
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const t = LANGS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const active = btn.dataset.langBtn === lang;
    btn.className = `text-xs px-2 py-1 rounded font-medium ${active ? 'text-gold' : 'text-gray-300'}`;
  });

  if (products.length) {
    initCategories();
    render();
  }
}

window.switchLang = lang => applyLang(lang);

// ===== 操作 =====
window.setCategory = cat => {
  activeCat = cat;
  render(); ``
};

window.copyWeChat = () => {
  const ids = ['copy-btn-about', 'copy-btn-fixed'];
  const t = LANGS[currentLang];

  const onSuccess = () => {
    ids.forEach(id => { const el = document.getElementById(id); if (el) el.textContent = t.copiedBtn; });
    setTimeout(() => {
      const reset = LANGS[currentLang].copyBtn;
      ids.forEach(id => { const el = document.getElementById(id); if (el) el.textContent = reset; });
    }, 2000);
  };

  function fallback() {
    const ta = document.createElement('textarea');
    ta.value = WECHAT_ID;
    Object.assign(ta.style, { position: 'fixed', opacity: '0' });
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); onSuccess(); } catch { }
    document.body.removeChild(ta);
  }

  navigator.clipboard?.writeText(WECHAT_ID).then(onSuccess).catch(fallback) ?? fallback();
};

window.openWeChat = () => { window.location.href = 'weixin://'; };

window.copyProduct = name => {
  const toast = document.getElementById('product-toast');
  document.getElementById('toast-product-name').textContent = name;

  const show = () => {
    toast.classList.remove('hidden');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.add('hidden'), 3000);
  };

  function fallback() {
    const ta = document.createElement('textarea');
    ta.value = name;
    Object.assign(ta.style, { position: 'fixed', opacity: '0' });
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); show(); } catch {}
    document.body.removeChild(ta);
  }

  navigator.clipboard?.writeText(name).then(show).catch(fallback) ?? fallback();
};

// ===== 初期化 =====
document.getElementById('wechat-display').textContent = WECHAT_ID;
if (WECHAT_QR) {
  const wrap = document.getElementById('wechat-qr-wrap');
  document.getElementById('wechat-qr').src = WECHAT_QR;
  wrap.classList.remove('hidden');
  wrap.classList.add('flex');
}
applyLang(currentLang);

document.getElementById('product-grid').innerHTML = Array(8).fill(`
  <div class="border border-gray-100 rounded-lg overflow-hidden">
    <div class="aspect-square bg-gray-100"></div>
    <div class="p-2.5 flex flex-col gap-1.5">
      <div class="h-3 bg-gray-100 rounded w-full"></div>
      <div class="h-3 bg-gray-100 rounded w-2/3"></div>
      <div class="h-4 bg-gray-100 rounded w-1/3 mt-0.5"></div>
      <div class="h-6 bg-gray-100 rounded w-full mt-0.5"></div>
    </div>
  </div>`).join('');

fetch(CSV_URL, { cache: 'no-cache' })
  .then(r => { if (!r.ok) throw r; return r.text(); })
  .then(text => {
    products = parseCsv(text);
    initCategories();
    render();
    initBrands();
  })
  .catch(() => {
    document.getElementById('product-grid').innerHTML =
      `<div class="col-span-full py-16 text-center text-gray-400 text-sm">${LANGS[currentLang].loadError}</div>`;
  });
