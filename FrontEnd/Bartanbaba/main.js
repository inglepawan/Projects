// -----video carousel----------

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const track = document.querySelector(".carousel-track");

  const scrollAmount = 200; // pixels per click (adjust if needed)

  nextButton.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevButton.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});


// -----image carousel----------


const track = document.querySelector('.carousel-track-img');
const prevBtn = document.querySelector('.prev-two');
const nextBtn = document.querySelector('.next-two');

const itemWidth = 270; // image width + gap (250 + 20)
const scrollAmount = itemWidth * 2; // scroll 2 items at a time (optional)

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


// ---------------blog section--------------


  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.blog-carousel-track');
    const prevBtn = document.querySelector('.prev-three');
    const nextBtn = document.querySelector('.next-three');

    const scrollAmount = track.offsetWidth * 0.95;

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });



  // ----------smooth scrolling------------

  window.scrollTo({
  top: 1000,
  behavior: 'smooth'
});



// -------------Hamburger------------

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.innerHTML = navMenu.classList.contains('show') ? '&times;' : '&#9776;';
  });

// ---------prevent auto scroll------------

  window.addEventListener('load', () => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  });