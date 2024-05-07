window.addEventListener('load', (event) => {
    new Masonry('.grid', {
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-item' // Use the grid-item class as the column width
    });
  });