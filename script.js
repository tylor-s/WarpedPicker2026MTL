// ═══════════════════ STATE ═══════════════════

let idx = 0;
let ratings = {};

function load() {
  try {
    const r = localStorage.getItem('wt26-ratings');
    if (r) ratings = JSON.parse(r);
  } catch(e) { ratings = {}; }
  idx = findNextUnrated();
}

function save() {
  localStorage.setItem('wt26-ratings', JSON.stringify(ratings));
  localStorage.setItem('wt26-idx', String(idx));
}

function findNextUnrated() {
  for (let i = 0; i < BANDS.length; i++) {
    if (ratings[BANDS[i].name] === undefined) return i;
  }
  return BANDS.length;
}

// ═══════════════════ UI ═══════════════════

function setLink(id, url) {
  const el = document.getElementById(id);
  if (url) {
    el.href = url;
    el.style.display = 'inline-flex';
  } else {
    el.style.display = 'none';
  }
}

function updateCard() {
  if (idx >= BANDS.length) {
    const next = findNextUnrated();
    if (next >= BANDS.length) { showResults(); return; }
    idx = next;
  }

  const band = BANDS[idx];
  const ratedCount = Object.keys(ratings).length;

  const nameEl = document.getElementById('band-name');
  nameEl.classList.add('hidden');

  setTimeout(() => {
    document.getElementById('band-num').textContent =
      'BAND ' + String(idx + 1).padStart(3, '0');
    nameEl.textContent = band.name;
    nameEl.classList.remove('hidden');

    document.getElementById('progress-text').textContent = (idx + 1) + ' / ' + BANDS.length;
    document.getElementById('rated-count').textContent = ratedCount + ' rated';
    document.getElementById('progress-fill').style.width = (ratedCount / BANDS.length * 100) + '%';

    const ti = ratings[band.name];

    setLink('spotify-link', band.spotify);
    setLink('ytm-link',     band.ytmusic);
    setLink('apple-link',   band.apple);

    const hasAny = band.spotify || band.ytmusic || band.apple;
    document.querySelector('.stream-label').style.display = hasAny ? '' : 'none';

    document.querySelectorAll('.tier-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === ti);
    });
  }, 130);
}

// ═══════════════════ ACTIONS ═══════════════════

function rateBand(tierIdx) {
  const band = BANDS[idx];
  ratings[band.name] = tierIdx;
  idx++;
  save();
  updateCard();
}

function unrateBand() {
  const band = BANDS[idx];
  delete ratings[band.name];
  save();
  updateCard();
}

function goBack() {
  if (idx <= 0) return;
  idx--;
  save();
  updateCard();
}

function skipBand() {
  if (idx >= BANDS.length - 1) return;
  idx++;
  save();
  updateCard();
}

// ═══════════════════ RESULTS ═══════════════════

function showResults() {
  document.getElementById('sorter-view').style.display = 'none';
  document.getElementById('results-view').style.display = 'flex';

  const content = document.getElementById('results-content');
  content.innerHTML = '';

  TIERS.forEach((tier, ti) => {
    const inTier = BANDS.filter(b => ratings[b.name] === ti);

    const sec = document.createElement('div');
    sec.className = 'tier-result-section';
    sec.dataset.tier = ti;
    sec.innerHTML =
      '<div class="tier-result-header" style="border-color:' + tier.color + '">' +
        '<span class="tier-result-name" style="color:' + tier.color + '">' + tier.name + '</span>' +
        '<span class="tier-result-count">' + inTier.length + ' band' + (inTier.length !== 1 ? 's' : '') + '</span>' +
      '</div>' +
      '<div class="band-chips">' +
        inTier.map(b =>
          '<span class="band-chip" draggable="true" data-band="' + b.name.replace(/"/g, '&quot;') + '" style="background:' + tier.color + ';color:' + tier.text + '">' + b.name + '</span>'
        ).join('') +
      '</div>';
    content.appendChild(sec);
  });

  const unrated = BANDS.filter(b => ratings[b.name] === undefined);
  if (unrated.length > 0) {
    const sec = document.createElement('div');
    sec.className = 'unrated-section';
    sec.dataset.tier = 'unrated';
    sec.innerHTML =
      '<div class="unrated-title">Not Yet Rated (' + unrated.length + ')</div>' +
      '<div class="band-chips">' +
        unrated.map(b =>
          '<span class="band-chip" draggable="true" data-band="' + b.name.replace(/"/g, '&quot;') + '" style="background:#181818;color:#555;border:1px solid #333">' + b.name + '</span>'
        ).join('') +
      '</div>';
    content.appendChild(sec);
  }
}

// ═══════════════════ DRAG BETWEEN TIERS ═══════════════════

let _dragBand = null;

document.getElementById('results-content').addEventListener('dragstart', function(e) {
  const chip = e.target.closest('.band-chip');
  if (!chip) return;
  _dragBand = chip.dataset.band;
  e.dataTransfer.setData('text/plain', _dragBand);
  e.dataTransfer.effectAllowed = 'move';
  chip.classList.add('dragging');
});

document.getElementById('results-content').addEventListener('dragend', function(e) {
  const chip = e.target.closest('.band-chip');
  if (chip) chip.classList.remove('dragging');
  document.querySelectorAll('#results-content [data-tier]').forEach(s => s.classList.remove('drag-over'));
  _dragBand = null;
});

document.getElementById('results-content').addEventListener('dragover', function(e) {
  const sec = e.target.closest('[data-tier]');
  if (!sec) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  document.querySelectorAll('#results-content [data-tier]').forEach(s => s.classList.remove('drag-over'));
  sec.classList.add('drag-over');
});

document.getElementById('results-content').addEventListener('dragleave', function(e) {
  const sec = e.target.closest('[data-tier]');
  if (sec && !sec.contains(e.relatedTarget)) sec.classList.remove('drag-over');
});

document.getElementById('results-content').addEventListener('drop', function(e) {
  const sec = e.target.closest('[data-tier]');
  if (!sec) return;
  e.preventDefault();
  const bandName = e.dataTransfer.getData('text/plain') || _dragBand;
  if (!bandName) return;
  document.querySelectorAll('#results-content [data-tier]').forEach(s => s.classList.remove('drag-over'));
  const tierVal = sec.dataset.tier;
  if (tierVal === 'unrated') {
    delete ratings[bandName];
  } else {
    ratings[bandName] = parseInt(tierVal);
  }
  save();
  closeBandPopup();
  showResults();
});

// ═══════════════════ BAND POPUP ═══════════════════

document.getElementById('results-content').addEventListener('click', function(e) {
  const chip = e.target.closest('.band-chip');
  if (!chip) return;
  const bandName = chip.dataset.band;
  const band = BANDS.find(b => b.name === bandName);
  if (!band) return;
  openBandPopup(band, e);
  e.stopPropagation();
});

document.addEventListener('click', function(e) {
  const popup = document.getElementById('band-popup');
  if (popup.style.display === 'block' && !popup.contains(e.target)) {
    closeBandPopup();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeBandPopup();
});

function openBandPopup(band, e) {
  const popup = document.getElementById('band-popup');
  document.getElementById('popup-band-name').textContent = band.name;

  const linksEl = document.getElementById('popup-links');
  linksEl.innerHTML = '';

  if (band.spotify) {
    linksEl.innerHTML += '<a class="popup-link spotify" href="' + band.spotify + '" target="_blank" rel="noopener">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>' +
      'Spotify</a>';
  }
  if (band.ytmusic) {
    linksEl.innerHTML += '<a class="popup-link ytm" href="' + band.ytmusic + '" target="_blank" rel="noopener">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/></svg>' +
      'YouTube Music</a>';
  }
  if (band.apple) {
    linksEl.innerHTML += '<a class="popup-link apple" href="' + band.apple + '" target="_blank" rel="noopener">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208A4.86 4.86 0 00.17 4.814c-.014.364-.02.728-.021 1.092v12.19c.001.38.009.76.028 1.14.06 1.29.48 2.43 1.39 3.34.9.91 2.04 1.33 3.33 1.39.38.02.76.027 1.14.028h12.19c.38-.001.76-.008 1.14-.028 1.29-.06 2.43-.48 3.34-1.39.91-.9 1.33-2.04 1.39-3.33.02-.38.027-.76.028-1.14V6.124zM12 17.5c-3.038 0-5.5-2.46-5.5-5.5S8.962 6.5 12 6.5s5.5 2.46 5.5 5.5-2.462 5.5-5.5 5.5zm6.5-9.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>' +
      'Apple Music</a>';
  }

  if (linksEl.innerHTML === '') {
    linksEl.innerHTML = '<span style="color:var(--muted);font-size:0.82rem">No links available</span>';
  }

  popup.style.display = 'block';

  const pw = popup.offsetWidth || 240;
  const ph = popup.offsetHeight || 160;
  let x = e.clientX + 12;
  let y = e.clientY + 12;
  if (x + pw > window.innerWidth - 12) x = e.clientX - pw - 12;
  if (y + ph > window.innerHeight - 12) y = e.clientY - ph - 12;
  popup.style.left = Math.max(8, x) + 'px';
  popup.style.top  = Math.max(8, y) + 'px';
}

function closeBandPopup() {
  document.getElementById('band-popup').style.display = 'none';
}

// ═══════════════════ NAVIGATION ═══════════════════

function backToSorter() {
  idx = findNextUnrated();
  document.getElementById('results-view').style.display = 'none';
  document.getElementById('sorter-view').style.display = 'flex';
  updateCard();
}

function resetAll() {
  if (!confirm('Start over? This will clear all your ratings.')) return;
  ratings = {};
  idx = 0;
  localStorage.removeItem('wt26-ratings');
  localStorage.removeItem('wt26-idx');
  backToSorter();
}

// ═══════════════════ KEYBOARD ═══════════════════

document.addEventListener('keydown', e => {
  if (document.getElementById('results-view').style.display === 'flex') return;
  if (e.key >= '1' && e.key <= '5') rateBand(parseInt(e.key) - 1);
  if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); goBack(); }
  if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); skipBand(); }
}, true);

// ═══════════════════ INIT ═══════════════════

(function init() {
  const grid = document.getElementById('tier-grid');
  TIERS.forEach((tier, i) => {
    const btn = document.createElement('button');
    btn.className = 'tier-btn';
    btn.style.background = tier.color;
    btn.style.color = tier.text;
    btn.textContent = tier.name;
    btn.title = 'Key: ' + (i + 1);
    btn.onclick = () => btn.classList.contains('active') ? unrateBand() : rateBand(i);
    grid.appendChild(btn);
  });

  document.getElementById('back-btn').onclick = goBack;
  document.getElementById('skip-btn').onclick = skipBand;

  load();
  updateCard();
})();
