    // Background slideshow
    document.addEventListener('DOMContentLoaded', () => {
      const bgDiv = document.querySelector('.about-page-bg');
      const images = [
        'bhutan1.jpg',
        'bhutan2.jpg',
        'bhutan3.jpg',
        'bhutan4.jpg',
        'bhutan5.jpg'
      ];
      let currentIndex = 0;

      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });

      function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        bgDiv.style.opacity = '0.02';
        setTimeout(() => {
          bgDiv.style.backgroundImage = `url('${images[currentIndex]}')`;
          bgDiv.style.opacity = '0.05';
        }, 500);
      }

      setInterval(changeBackground, 10000);
    });

    // Navbar toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});
