// Homepage category based filter and selected button
const catButtons = document.querySelectorAll('.cat-btn');
const articleCards = document.querySelectorAll('.post-card');
catButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    // Reset button classes
    catButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    // Filter post cards
    const filterValue = button.dataset.filter;
    articleCards.forEach(card => {
      const categories = card.dataset.tags.split(',');
      card.classList.remove('activated', 'deactivated', 'activated-1', 'activated-2');
      if (categories.includes(filterValue)) {
        card.classList.add('activated');
      } else if (filterValue == "all") {
        card.classList.add('activated');
      } else {
        card.classList.add('deactivated');
      }
    });
    // Add classes to activated items
    const activatedItems = document.querySelectorAll('.post-card.activated');
    if (activatedItems.length >= 2) {
      activatedItems[0].classList.add('activated-1');
      activatedItems[1].classList.add('activated-2');
    }
  });
});