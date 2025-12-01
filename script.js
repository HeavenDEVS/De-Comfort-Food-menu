const state = {
  theme: 'dark',
  searchQuery: '',
  activeCategory: 'All',
};

const categories = [
  'All', 'Rice', 'Soups', 'Swallows', 'Snacks', 'Proteins', 'Drinks', 'Specials'
];

const dishes = [
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    category: 'Rice',
    price: 3500,
    spice: 2,
    desc: 'Smoky party-style jollof with tomato-pepper base.',
    img: 'images/Jollof Rice Preview.jpeg',
    ingredients: ['Rice', 'Tomatoes', 'Bell pepper', 'Onions', 'Thyme', 'Bay leaves'],
    allergens: 'May contain traces of crayfish',
  },
  {
    id: 'fried-rice',
    name: 'Nigerian Fried Rice',
    category: 'Rice',
    price: 3800,
    spice: 1,
    desc: 'Wok-tossed rice with veggies and liver, lightly spiced.',
    img: 'images/Fried Rice Preview.jpeg',
    ingredients: ['Rice', 'Carrots', 'Peas', 'Liver', 'Curry powder'],
    allergens: 'Contains offal (liver)',
  },
  {
    id: 'ofada-rice',
    name: 'Ofada Rice & Ayamase',
    category: 'Rice',
    price: 4500,
    spice: 4,
    desc: 'Local ofada rice served with spicy green pepper sauce.',
    img: 'images/Ofada Rice Preview.jpeg',
    ingredients: ['Ofada rice', 'Green bell peppers', 'Locust beans', 'Palm oil'],
    allergens: 'Contains shrimp/crayfish',
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    category: 'Rice',
    price: 3700,
    spice: 1,
    desc: 'Creamy rice infused with coconut milk and aromatics.',
    img: 'images/Coconut Rice Preview.jpeg',
    ingredients: ['Rice', 'Coconut milk', 'Onions', 'Scotch bonnet (optional)'],
    allergens: 'None',
  },
  {
    id: 'egusi',
    name: 'Egusi Soup',
    category: 'Soups',
    price: 4200,
    spice: 3,
    desc: 'Ground melon seed soup with leafy greens and assorted meats.',
    img: 'images/savingpng-232.jpg',
    ingredients: ['Egusi', 'Palm oil', 'Spinach/ugu', 'Stockfish', 'Crayfish'],
    allergens: 'Contains fish/crustaceans',
  },
  {
    id: 'ogbono',
    name: 'Ogbono Soup',
    category: 'Soups',
    price: 4000,
    spice: 2,
    desc: 'Draw soup with ground wild mango seeds and meats.',
    img: 'images/ogbono soup.jpeg',
    ingredients: ['Ogbono', 'Palm oil', 'Meat', 'Stockfish', 'Crayfish'],
    allergens: 'Contains fish/crustaceans',
  },
  {
    id: 'okra',
    name: 'Okra Soup',
    category: 'Soups',
    price: 3900,
    spice: 2,
    desc: 'Fresh okra simmered with peppers and smoked fish.',
    img: 'images/okro-soup.jpeg',
    ingredients: ['Okra', 'Palm oil', 'Smoked fish', 'Pepper'],
    allergens: 'Contains fish',
  },
  {
    id: 'afang',
    name: 'Afang Soup',
    category: 'Soups',
    price: 4300,
    spice: 3,
    desc: 'Rich vegetable soup with afang and waterleaf.',
    img: 'images/20230608_133502.jpg',
    ingredients: ['Afang', 'Waterleaf', 'Periwinkle', 'Crayfish'],
    allergens: 'Contains shellfish',
  },
  {
    id: 'edikang-ikong',
    name: 'Edikang Ikong',
    category: 'Soups',
    price: 4500,
    spice: 2,
    desc: 'Leafy soup made with ugu and waterleaf, hearty and nourishing.',
    img: 'images/Edikang Ikong.jpeg',
    ingredients: ['Ugu', 'Waterleaf', 'Palm oil', 'Assorted meats'],
    allergens: 'Contains fish/crustaceans (optional)',
  },
  {
    id: 'banga',
    name: 'Banga Soup',
    category: 'Soups',
    price: 4600,
    spice: 2,
    desc: 'Delta-style palm nut soup with aromatic spices.',
    img: 'images/banga.jpeg',
    ingredients: ['Palm nuts', 'Aromatics', 'Meat/Fish'],
    allergens: 'Contains fish (optional)',
  },
  {
    id: 'pounded-yam',
    name: 'Pounded Yam',
    category: 'Swallows',
    price: 1500,
    spice: 0,
    desc: 'Smooth and stretchy yam swallow, perfect with soups.',
    img: 'images/pounded yam.jpeg',
    ingredients: ['Yam'],
    allergens: 'None',
  },
  {
    id: 'amala',
    name: 'Amala',
    category: 'Swallows',
    price: 1400,
    spice: 0,
    desc: 'Yam flour swallow with earthy flavor, best with gbegiri and ewedu.',
    img: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1400&auto=format&fit=crop',
    ingredients: ['Elubo (yam flour)'],
    allergens: 'None',
  },
  {
    id: 'Chicken & Chips ',
    name: 'Chicken & Chips',
    category: 'Fries',
    price: 7000,
    spice: 0,
    desc: 'Succulent fried chicken served with crispy fries.',
    img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1400&auto=format&fit=crop',
    ingredients: ['Chicken', 'Potatoes', 'Oil', 'Spices'],
    allergens: 'None',
  },
  {
    id: 'eba',
    name: 'Eba (Garri)',
    category: 'Swallows',
    price: 1000,
    spice: 0,
    desc: 'Classic garri swallow to pair with soups.',
    img: 'images/eba.jpeg',
    ingredients: ['Cassava granules'],
    allergens: 'None',
  },
  {
    id: 'puff-puff',
    name: 'Puff-Puff',
    category: 'Snacks',
    price: 1200,
    spice: 0,
    desc: 'Golden, airy fried dough balls dusted with sugar.',
    img: 'images/puff-puff.jpeg',
    ingredients: ['Flour', 'Yeast', 'Sugar'],
    allergens: 'Contains gluten',
  },
  {
    id: 'cakes-pastries',
    name: 'Cakes & Pastries',
    category: 'Snacks',
    price: 10000,
    spice: 0,
    desc: 'Crunchy sweet fried pastry bites.',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1400&auto=format&fit=crop',
    ingredients: ['Flour', 'Sugar', 'Butter', 'Milk'],
    allergens: 'Contains gluten, dairy',
  },
  {
    id: 'meat-pie',
    name: 'Meat Pie',
    category: 'Snacks',
    price: 1500,
    spice: 1,
    desc: 'Buttery crust stuffed with minced beef and veggies.',
    img: 'images/meat-pie.jpeg',
    ingredients: ['Flour', 'Butter', 'Beef', 'Carrots', 'Potatoes'],
    allergens: 'Contains gluten, dairy',
  },
  {
    id: 'suya',
    name: 'Suya (Spicy Skewers)',
    category: 'Proteins',
    price: 2500,
    spice: 4,
    desc: 'Street-style spicy peanut rubbed beef skewers.',
    img: 'images/suya1.jpeg',
    ingredients: ['Beef', 'Groundnut spice', 'Onions'],
    allergens: 'Contains peanuts',
  },
  {
    id: 'goat-pepper-soup',
    name: 'Goat Meat Pepper Soup',
    category: 'Proteins',
    price: 3800,
    spice: 5,
    desc: 'Light, intensely spiced broth with tender goat meat.',
    img: 'images/goat-pepper-soup.jpeg',
    ingredients: ['Goat meat', 'Calabash nutmeg', 'Chili', 'Herbs'],
    allergens: 'None',
  },
  {
    id: 'grilled-fish',
    name: 'Grilled Fish',
    category: 'Proteins',
    price: 4200,
    spice: 2,
    desc: 'Char-grilled fish with pepper sauce.',
    img: 'images/grilled-fish.jpeg',
    ingredients: ['Fish', 'Pepper mix', 'Spices'],
    allergens: 'Fish',
  },
  {
    id: 'zobo',
    name: 'Zobo (Hibiscus Iced Tea)',
    category: 'Drinks',
    price: 1000,
    spice: 0,
    desc: 'Refreshing hibiscus drink with pineapple and ginger notes.',
    img: 'images/zobo1.jpeg',
    ingredients: ['Hibiscus', 'Pineapple', 'Ginger'],
    allergens: 'None',
  },
  {
    id: 'chapman',
    name: 'Chapman',
    category: 'Drinks',
    price: 4000,
    spice: 0,
    desc: 'Classic Nigerian mocktail with citrus and bitters.',
    img: 'images/chapman.jpeg',
    ingredients: ['Citrus soda', 'Grenadine', 'Bitters', 'Cucumber'],
    allergens: 'None',
  },
  {
    id: 'chef-special',
    name: 'Chef’s Special Platter',
    category: 'Specials',
    price: 15000,
    spice: 3,
    desc: 'A curated tasting of favorites: mini jollof, suya, and puff-puff.',
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop',
    ingredients: ['Rice', 'Beef', 'Flour', 'Spices'],
    allergens: 'Contains gluten, peanuts',
  },
];

const el = {
  grid: document.getElementById('menuGrid'),
  chips: document.getElementById('categoryChips'),
  search: document.getElementById('searchInput'),
  themeToggle: document.getElementById('themeToggle'),
  year: document.getElementById('year'),
  // modal
  modal: document.getElementById('dishModal'),
  modalImage: document.getElementById('modalImage'),
  modalTitle: document.getElementById('modalTitle'),
  modalDesc: document.getElementById('modalDesc'),
  modalCategory: document.getElementById('modalCategory'),
  modalSpice: document.getElementById('modalSpice'),
  modalPrice: document.getElementById('modalPrice'),
  modalIngredients: document.getElementById('modalIngredients'),
  modalAllergens: document.getElementById('modalAllergens'),
};

function formatNaira(amount) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
}

function spiceLabel(level) {
  const map = ['Mild', 'Mild+', 'Medium', 'Hot', 'Very Hot', 'Fiery'];
  return map[Math.min(level, map.length - 1)];
}

function renderChips() {
  el.chips.innerHTML = '';
  categories.forEach((cat) => {
    const b = document.createElement('button');
    b.className = 'chip-btn' + (state.activeCategory === cat ? ' active' : '');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', state.activeCategory === cat ? 'true' : 'false');
    b.textContent = cat;
    b.addEventListener('click', () => {
      state.activeCategory = cat;
      renderChips();
      renderGrid();
    });
    el.chips.appendChild(b);
  });
}

function renderGrid() {
  const q = state.searchQuery.trim().toLowerCase();
  const filtered = dishes.filter((d) => {
    const matchCat = state.activeCategory === 'All' || d.category === state.activeCategory;
    const matchText = !q || `${d.name} ${d.desc} ${d.category}`.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  el.grid.setAttribute('aria-busy', 'true');
  el.grid.innerHTML = '';

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'card';
    empty.style.padding = '24px';
    empty.innerHTML = '<p class="muted">No dishes match your search. Try another keyword or category.</p>';
    el.grid.appendChild(empty);
    el.grid.setAttribute('aria-busy', 'false');
    return;
  }

  filtered.forEach((d) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${d.name}, ${d.category}, ${formatNaira(d.price)}`);

    const media = document.createElement('div');
    media.className = 'media';
    const img = document.createElement('img');
    img.src = d.img;
    img.alt = d.name;
    img.loading = 'lazy';
    media.appendChild(img);

    const content = document.createElement('div');
    content.className = 'content';
    const row = document.createElement('div');
    row.className = 'row';
    const title = document.createElement('h3');
    title.className = 'title';
    title.textContent = d.name;
    const price = document.createElement('span');
    price.className = 'chip price';
    price.textContent = formatNaira(d.price);
    row.append(title, price);

    const desc = document.createElement('p');
    desc.className = 'desc';
    desc.textContent = d.desc;

    const badges = document.createElement('div');
    badges.className = 'badge-row';
    const cat = document.createElement('span');
    cat.className = 'chip';
    cat.textContent = d.category;
    const spice = document.createElement('span');
    spice.className = 'chip spice';
    spice.textContent = spiceLabel(d.spice);
    badges.append(cat, spice);

    content.append(row, desc, badges);

    card.append(media, content);

    const open = () => openModal(d);
    card.addEventListener('click', open);
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });

    el.grid.appendChild(card);
  });

  el.grid.setAttribute('aria-busy', 'false');
}

function openModal(d) {
  el.modalImage.src = d.img;
  el.modalTitle.textContent = d.name;
  el.modalDesc.textContent = d.desc;
  el.modalCategory.textContent = d.category;
  el.modalSpice.textContent = spiceLabel(d.spice);
  el.modalPrice.textContent = formatNaira(d.price);
  el.modalIngredients.innerHTML = '';
  d.ingredients.forEach((i) => {
    const li = document.createElement('li');
    li.textContent = i;
    el.modalIngredients.appendChild(li);
  });
  el.modalAllergens.textContent = d.allergens || 'None';
  el.modal.classList.add('open');
  el.modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  el.modal.classList.remove('open');
  el.modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function hydrateTheme() {
  const saved = localStorage.getItem('decomfort-theme');
  state.theme = saved || 'dark';
  if (state.theme === 'light') document.documentElement.classList.add('light');
  else document.documentElement.classList.remove('light');
  el.themeToggle.textContent = state.theme === 'light' ? '🌞' : '🌙';
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('decomfort-theme', state.theme);
  hydrateTheme();
}

function initEvents() {
  el.search.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderGrid();
  });
  el.themeToggle.addEventListener('click', toggleTheme);
  el.modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && el.modal.classList.contains('open')) closeModal();
  });
}

function init() {
  hydrateTheme();
  renderChips();
  renderGrid();
  initEvents();
  el.year.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);


