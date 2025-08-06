document.getElementById('draw').onclick = function () {
  const pages = [
    'https://stormy-lemming-e70.notion.site/245f0debd9c080e2be92e7e3474f1490',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080d7ba42f1f70b42ba09',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080bbb323e699f216ca19',
    'https://stormy-lemming-e70.notion.site/245f0debd9c08011a4e8db5154762f55',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080549726c2ec11c439c8',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080a1aa37e423501797df',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080148113f2984fe020af',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080f88892f7bf2de87a00',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080d7b1a3ca9081c81f1b',
    'https://stormy-lemming-e70.notion.site/245f0debd9c08057869bca6cb497f40d',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080049b42c6c5226101c4',
    'https://stormy-lemming-e70.notion.site/245f0debd9c0800eac12f572c10ae285',
    'https://stormy-lemming-e70.notion.site/245f0debd9c0808c9366e62306b7c689',
    'https://stormy-lemming-e70.notion.site/245f0debd9c080cfbf61c40634c4c9e3'
  ];
  
  const randomIndex = Math.floor(Math.random() * pages.length);
  window.location.href = pages[randomIndex];
};

