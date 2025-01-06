//Menu\\
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

//Accordéon\\
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const filmPoster = this.querySelector('.film-poster');
        const isOpen = content.style.display === 'block';

        content.style.display = isOpen ? 'none' : 'block';

        filmPoster.style.display = isOpen ? 'block' : 'none';

        accordionButtons.forEach(btn => {
            if (btn !== this) {
                btn.nextElementSibling.style.display = 'none';
                btn.querySelector('.film-poster').style.display = 'block';
            }
        });
    });
});

//Carousel\\
document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel--container');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');

  let currentIndex = 0;

  function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      updateCarousel();
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
  });
});