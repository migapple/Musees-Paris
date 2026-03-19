/* ═══════════════════════════════════════════════════════
   Musées de Paris — App Logic
═══════════════════════════════════════════════════════ */

const State = {
  lang: localStorage.getItem('lang') || 'fr',
  theme: localStorage.getItem('theme') || 'dark',
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  currentView: 'list',
  previousView: 'list',
  filterType: 'all',
  searchQuery: '',
  map: null,
  mapInitialized: false,
  detailMuseum: null
};

// ─── Helpers ────────────────────────────────────────────
const t = key => I18N[State.lang][key] || key;
const save = () => {
  localStorage.setItem('lang', State.lang);
  localStorage.setItem('theme', State.theme);
  localStorage.setItem('favorites', JSON.stringify(State.favorites));
};

function isFav(id) { return State.favorites.includes(id); }
function toggleFav(id) {
  if (isFav(id)) {
    State.favorites = State.favorites.filter(f => f !== id);
    showToast(t('favoriteRemoved'));
  } else {
    State.favorites.push(id);
    showToast(t('favoriteAdded'));
  }
  save();
  updateFavBtns(id);
  updateNavDot();
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._timeout);
  el._timeout = setTimeout(() => el.classList.remove('show'), 2000);
}

// ─── SVG Icons ───────────────────────────────────────────
const ICONS = {
  list: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="12" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="12" width="7" height="7" rx="1.5"/><rect x="12" y="12" width="7" height="7" rx="1.5"/></svg>`,
  map:  `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="1,5 8,2 14,5 21,2 21,17 14,20 8,17 1,20"/><line x1="8" y1="2" x2="8" y2="17"/><line x1="14" y1="5" x2="14" y2="20"/></svg>`,
  fav:  `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 19.5L2.5 11C1.1 9.6 1.1 7.4 2.5 6 3.9 4.6 6.1 4.6 7.5 6L11 9.5 14.5 6c1.4-1.4 3.6-1.4 5 0 1.4 1.4 1.4 3.6 0 5z"/></svg>`,
  pin:  `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="5.5" r="2.5"/><path d="M7 14C7 14 1.5 8.5 1.5 5.5a5.5 5.5 0 0 1 11 0C12.5 8.5 7 14 7 14z"/></svg>`,
  back: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13,4 7,10 13,16"/></svg>`,
  nav:  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><polygon points="8,1 1,15 8,12 15,15"/></svg>`,
  web:  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8" cy="8" r="7"/><path d="M1 8h14M8 1c-2.5 2-4 4.5-4 7s1.5 5 4 7M8 1c2.5 2 4 4.5 4 7s-1.5 5-4 7"/></svg>`,
  clock:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8" cy="8" r="7"/><polyline points="8,4 8,8 11,10"/></svg>`,
  euro: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 4.5A5.5 5.5 0 1 0 12 11.5M3.5 7h7M3.5 9h7"/></svg>`,
  gps:  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8" cy="8" r="3"/><line x1="8" y1="1" x2="8" y2="4"/><line x1="8" y1="12" x2="8" y2="15"/><line x1="1" y1="8" x2="4" y2="8"/><line x1="12" y1="8" x2="15" y2="8"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="9" cy="9" r="2.5"/><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.1 3.1l1.4 1.4M13.5 13.5l1.4 1.4M14.9 3.1l-1.4 1.4M4.5 13.5l-1.4 1.4"/></svg>`
};

// ─── Init ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  buildNav();
  buildSettingsBtn();
  buildHeader();
  initListView();
  setupSettings();
  setupSearch();
  updateNavDot();
});

function applyTheme() {
  document.body.classList.toggle('light', State.theme === 'light');
}

function buildHeader() {
  document.getElementById('app-title').textContent = t('appTitle');
  document.getElementById('lang-toggle').textContent = State.lang.toUpperCase();
  document.getElementById('lang-toggle').addEventListener('click', () => {
    State.lang = State.lang === 'fr' ? 'en' : 'fr';
    save();
    document.getElementById('lang-toggle').textContent = State.lang.toUpperCase();
    document.getElementById('app-title').textContent = t('appTitle');
    refreshCurrentView();
  });
}

function buildSettingsBtn() {
  const btn = document.getElementById('settings-btn');
  btn.innerHTML = ICONS.settings;
}

function buildNav() {
  const nav = document.getElementById('bottom-nav');
  nav.innerHTML = '';
  const tabs = [
    { id: 'list', icon: ICONS.list },
    { id: 'map',  icon: ICONS.map  },
    { id: 'favorites', icon: ICONS.fav }
  ];
  tabs.forEach(tab => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn' + (tab.id === 'list' ? ' active' : '');
    btn.dataset.view = tab.id;
    btn.innerHTML = `
      <span class="nav-icon">${tab.icon}</span>
      <span class="nav-label" id="nav-label-${tab.id}">${t(tab.id)}</span>
      ${tab.id === 'favorites' ? '<span class="nav-dot" id="nav-dot"></span>' : ''}
    `;
    btn.addEventListener('click', () => navigateTo(tab.id));
    nav.appendChild(btn);
  });
}

function updateNavLabels() {
  ['list', 'map', 'favorites'].forEach(id => {
    const el = document.getElementById(`nav-label-${id}`);
    if (el) el.textContent = t(id);
  });
}

function updateNavDot() {
  const dot = document.getElementById('nav-dot');
  if (dot) dot.classList.toggle('visible', State.favorites.length > 0);
}

// ─── Navigation ──────────────────────────────────────────
function navigateTo(viewId, museum = null) {
  if (viewId === 'detail') {
    State.detailMuseum = museum;
    State.previousView = State.currentView;
  }

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.classList.add('active');

  const navBtn = document.querySelector(`.nav-btn[data-view="${viewId}"]`);
  if (navBtn) navBtn.classList.add('active');

  State.currentView = viewId;

  if (viewId === 'map') initMap();
  else if (viewId === 'favorites') renderFavorites();
  else if (viewId === 'detail' && museum) renderDetail(museum);
}

function refreshCurrentView() {
  if (State.currentView === 'list') {
    initListView();
  } else if (State.currentView === 'favorites') {
    renderFavorites();
  } else if (State.currentView === 'detail' && State.detailMuseum) {
    renderDetail(State.detailMuseum);
  }
  updateNavLabels();
  buildHeader();
  setupSearch();
}

// ─── List View ───────────────────────────────────────────
function getFilterTypes() {
  const all = new Set();
  MUSEUMS.forEach(m => m.types[State.lang].forEach(t => all.add(t)));
  return Array.from(all).sort();
}

function getFilteredMuseums() {
  let list = MUSEUMS;
  if (State.filterType !== 'all') {
    list = list.filter(m => m.types[State.lang].includes(State.filterType));
  }
  if (State.searchQuery) {
    const q = State.searchQuery.toLowerCase();
    list = list.filter(m =>
      m.name[State.lang].toLowerCase().includes(q) ||
      m.address.toLowerCase().includes(q) ||
      m.types[State.lang].some(tp => tp.toLowerCase().includes(q))
    );
  }
  return list;
}

function initListView() {
  buildFilterChips();
  renderMuseumList();
}

function buildFilterChips() {
  const container = document.getElementById('filter-chips');
  if (!container) return;
  const types = getFilterTypes();
  const chips = [t('allTypes'), ...types];
  container.innerHTML = chips.map(type => {
    const isAll = type === t('allTypes');
    const isActive = isAll ? State.filterType === 'all' : State.filterType === type;
    return `<button class="chip${isActive ? ' active' : ''}" data-type="${isAll ? 'all' : type}">${type}</button>`;
  }).join('');

  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      State.filterType = chip.dataset.type;
      buildFilterChips();
      renderMuseumList();
    });
  });
}

function setupSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.placeholder = t('search');
  input.value = State.searchQuery;
  input.addEventListener('input', e => {
    State.searchQuery = e.target.value;
    renderMuseumList();
  });
}

function renderMuseumList() {
  const container = document.getElementById('museum-list');
  if (!container) return;
  const museums = getFilteredMuseums();

  if (museums.length === 0) {
    container.innerHTML = `<div class="empty-state">
      <div class="empty-state-icon">🏛</div>
      <div class="empty-state-text">${t('noResults')}</div>
    </div>`;
    return;
  }

  container.innerHTML = `<div class="results-count">${museums.length} ${t('museums')}</div>` +
    museums.map(m => museumCardHTML(m)).join('');

  container.querySelectorAll('.museum-card[data-id]').forEach(card => {
    const m = MUSEUMS.find(x => x.id === parseInt(card.dataset.id));
    card.addEventListener('click', e => {
      if (e.target.closest('.fav-btn')) return;
      navigateTo('detail', m);
    });
  });

  container.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleFav(parseInt(btn.dataset.id));
    });
  });
}

function museumCardHTML(m) {
  const favActive = isFav(m.id) ? ' active' : '';
  const favIcon = isFav(m.id) ? '♥' : '♡';
  const types = m.types[State.lang].slice(0, 3).map(tp => `<span class="type-tag">${tp}</span>`).join('');
  return `
    <div class="museum-card" data-id="${m.id}">
      <img class="card-image" src="${m.image}" alt="${m.name[State.lang]}" loading="lazy" onerror="this.style.background='var(--border)'">
      <div class="card-body">
        <div class="card-header">
          <div class="card-name">${m.name[State.lang]}</div>
          <button class="fav-btn${favActive}" data-id="${m.id}">${favIcon}</button>
        </div>
        <div class="card-address">${ICONS.pin} ${m.address}</div>
        <div class="card-types">${types}</div>
      </div>
    </div>`;
}

// ─── Favorites View ──────────────────────────────────────
function renderFavorites() {
  const container = document.getElementById('favorites-list');
  if (!container) return;
  const favMuseums = MUSEUMS.filter(m => isFav(m.id));

  if (favMuseums.length === 0) {
    container.innerHTML = `<div class="empty-state">
      <div class="empty-state-icon">♡</div>
      <div class="empty-state-text">${t('noFavorites')}</div>
    </div>`;
    return;
  }

  container.innerHTML = favMuseums.map(m => museumCardHTML(m)).join('');

  container.querySelectorAll('.museum-card[data-id]').forEach(card => {
    const m = MUSEUMS.find(x => x.id === parseInt(card.dataset.id));
    card.addEventListener('click', e => {
      if (e.target.closest('.fav-btn')) return;
      navigateTo('detail', m);
    });
  });

  container.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleFav(parseInt(btn.dataset.id));
      renderFavorites();
    });
  });
}

// ─── Map View ────────────────────────────────────────────
function initMap() {
  if (State.mapInitialized) return;
  State.mapInitialized = true;

  setTimeout(() => {
    const map = L.map('map', {
      center: [48.858, 2.345],
      zoom: 13,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 19
    }).addTo(map);

    const markerIcon = L.divIcon({
      className: '',
      html: `<div style="
        width:28px;height:28px;
        background:var(--gold);
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        border:2.5px solid var(--bg2);
        box-shadow:0 2px 8px rgba(0,0,0,0.5);
      "></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -32]
    });

    MUSEUMS.forEach(m => {
      const marker = L.marker([m.coords.lat, m.coords.lng], { icon: markerIcon }).addTo(map);
      const popupContent = `
        <div class="map-popup">
          <div class="map-popup-name">${m.name[State.lang]}</div>
          <div class="map-popup-type">${m.types[State.lang][0]}</div>
          <button class="map-popup-btn" onclick="navigateTo('detail', MUSEUMS.find(x=>x.id===${m.id}))">
            ${t('list')} →
          </button>
        </div>`;
      marker.bindPopup(popupContent, { maxWidth: 200 });
    });

    State.map = map;
  }, 100);
}

// ─── Detail View ─────────────────────────────────────────
function renderDetail(m) {
  const container = document.getElementById('detail-content');
  if (!container) return;

  const favActive = isFav(m.id) ? ' active' : '';
  const favIcon = isFav(m.id) ? '♥' : '♡';
  const types = m.types[State.lang].map(tp => `<span class="type-tag">${tp}</span>`).join('');
  const artworksHTML = m.artworks.map(a => `
    <div class="artwork-card">
      <img class="artwork-img" src="${a.image}" alt="${a.name}" loading="lazy" onerror="this.style.background='var(--border)'">
      <div class="artwork-info">
        <div class="artwork-name">${a.name}</div>
        <div class="artwork-artist">${a.artist}</div>
        <div class="artwork-year">${a.year}</div>
      </div>
    </div>`).join('');

  const mapsUrl = `https://maps.apple.com/?daddr=${m.coords.lat},${m.coords.lng}&dirflg=d`;

  container.innerHTML = `
    <div class="detail-back" id="detail-back-btn">
      ${ICONS.back}
      <span class="detail-back-label">${t('back')}</span>
    </div>
    <img class="detail-hero" src="${m.image}" alt="${m.name[State.lang]}" onerror="this.style.background='var(--border)'">
    <div class="detail-content">
      <div class="detail-header">
        <div class="detail-name">${m.name[State.lang]}</div>
        <button class="detail-fav-btn${favActive}" id="detail-fav-btn" data-id="${m.id}">${favIcon}</button>
      </div>
      <div class="detail-types">${types}</div>
      <p class="detail-description">${m.description[State.lang]}</p>

      <div class="detail-actions">
        <button class="action-btn btn-primary" id="directions-btn">
          ${ICONS.nav} ${t('openMap')}
        </button>
        <button class="action-btn btn-secondary" id="website-btn">
          ${ICONS.web} ${t('website')}
        </button>
      </div>

      <div class="detail-section">
        <div class="detail-row">
          <span class="detail-row-icon">${ICONS.pin}</span>
          <div>
            <div class="detail-row-label">${t('address')}</div>
            <div class="detail-row-value">${m.address}</div>
            <div class="detail-coords">${m.coords.lat.toFixed(4)}° N, ${m.coords.lng.toFixed(4)}° E</div>
          </div>
        </div>
        <div class="detail-row">
          <span class="detail-row-icon">${ICONS.clock}</span>
          <div>
            <div class="detail-row-label">${t('hours')}</div>
            <div class="detail-row-value">${m.hours[State.lang]}</div>
          </div>
        </div>
        <div class="detail-row">
          <span class="detail-row-icon">${ICONS.euro}</span>
          <div>
            <div class="detail-row-label">${t('price')}</div>
            <div class="detail-row-value">${m.price}</div>
          </div>
        </div>
      </div>

      <div class="artworks-title">${t('artworks')}</div>
      <div class="artworks-grid">${artworksHTML}</div>
    </div>`;

  document.getElementById('detail-back-btn').addEventListener('click', () => {
    navigateTo(State.previousView);
    if (State.previousView === 'list') renderMuseumList();
    else if (State.previousView === 'favorites') renderFavorites();
  });

  document.getElementById('detail-fav-btn').addEventListener('click', () => {
    toggleFav(m.id);
    const btn = document.getElementById('detail-fav-btn');
    if (btn) {
      btn.classList.toggle('active', isFav(m.id));
      btn.textContent = isFav(m.id) ? '♥' : '♡';
    }
  });

  document.getElementById('directions-btn').addEventListener('click', () => {
    window.open(mapsUrl, '_blank');
  });

  document.getElementById('website-btn').addEventListener('click', () => {
    window.open(m.website, '_blank');
  });

  container.scrollTop = 0;
  document.getElementById('view-detail').scrollTop = 0;
}

function updateFavBtns(id) {
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', isFav(id));
    btn.textContent = isFav(id) ? '♥' : '♡';
  });
  const detailBtn = document.getElementById('detail-fav-btn');
  if (detailBtn && parseInt(detailBtn.dataset.id) === id) {
    detailBtn.classList.toggle('active', isFav(id));
    detailBtn.textContent = isFav(id) ? '♥' : '♡';
  }
}

// ─── Settings ────────────────────────────────────────────
function setupSettings() {
  const panel = document.getElementById('settings-panel');
  const settingsBtn = document.getElementById('settings-btn');
  const closeBtn = document.getElementById('settings-close');
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle.checked = State.theme === 'dark';

  settingsBtn.addEventListener('click', () => {
    panel.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    panel.classList.add('hidden');
  });

  panel.querySelector('.panel-overlay').addEventListener('click', () => {
    panel.classList.add('hidden');
  });

  themeToggle.addEventListener('change', () => {
    State.theme = themeToggle.checked ? 'dark' : 'light';
    save();
    applyTheme();
    if (State.map) {
      State.map.invalidateSize();
    }
  });

  document.getElementById('settings-title').textContent = t('settings');
}
