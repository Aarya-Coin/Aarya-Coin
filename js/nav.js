// Wrap all your code in a single DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {

  // Hamburger menu code
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn img');
  const linksBg = document.querySelector('.links-bg');
  const linksContainer = document.querySelector('.links');

  toggleBtn.onclick = function () {
    linksBg.classList.toggle('open');
    linksContainer.classList.toggle('linksPos');
    const isOpen = linksBg.classList.contains('open');
    toggleBtnIcon.src = isOpen ? 'images/close.svg' : 'images/menu.svg';
  }

  // Function to add or remove the "active" class based on intersection
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      const targetLink = Array.from(navLinks).find(
        (link) => link.querySelector('a').getAttribute('href') === `#${entry.target.id}`
      );

      if (entry.isIntersecting) {
        targetLink.classList.add('active');
      } else {
        targetLink.classList.remove('active');
      }
    });
  };

  // Intersection Observer configuration
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin added to the root
    threshold: 0.5, // At least 50% of the target should be visible to trigger the intersection
  };

  // Create an instance of the Intersection Observer
  const observer = new IntersectionObserver(handleIntersect, options);

  // Observe the sections you want to track (with the corresponding IDs)
  const sectionsToTrack = ['about', 'usecase', 'roadmap', 'faq'];
  const navLinks = document.querySelectorAll('.links span');

  sectionsToTrack.forEach((sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      observer.observe(targetSection);
    }
  });
});
