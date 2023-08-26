document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu code
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = toggleBtn.querySelector('img');
  const linksBg = document.querySelector('.links-bg');
  const linksContainer = document.querySelector('.links');
  const linksPart2 = document.querySelector('.links#part2');

  toggleBtn.onclick = () => {
    linksBg.classList.toggle('open');
    linksContainer.classList.toggle('linksPos');
    linksPart2.classList.toggle('linksPos2');
    const isOpen = linksBg.classList.contains('open');
    toggleBtnIcon.src = isOpen ? 'images/close.svg' : 'images/menu.svg';
  };

  // Intersection Observer callback
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      const targetLink = Array.from(navLinks).find(
        (link) => link.querySelector('a').getAttribute('href') === `#${entry.target.id}`
      );

      targetLink.classList.toggle('active', entry.isIntersecting);
    });
  };

  // Intersection Observer configuration
  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  // Observe the sections you want to track
  const sectionsToTrack = ['about', 'usecase', 'roadmap', 'faq'];
  const navLinks = document.querySelectorAll('.links span');

  sectionsToTrack.forEach((sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      observer.observe(targetSection);
    }
  });

  const navbar = document.querySelector('.nav');
  const heroSection = document.querySelector('.hero');
  const navBg = navbar.querySelector('.nav-bg');
  const navLinks1 = navbar.querySelectorAll('.links span a');
  const navLogoLink = navbar.querySelector('.logo a');
  const part2Links = navbar.querySelector('.links#part2');

  const applyStylingOnScroll = () => {
    const scrollPosition = window.scrollY;
    const isIntersecting = scrollPosition <= 10; // Change this to your desired scroll amount

    part2Links.style.opacity = isIntersecting ? 0 : 1;
    navBg.style.backgroundColor = isIntersecting ? '#00000000' : '#000000a8';
    navBg.style.backdropFilter = isIntersecting ? 'blur(3px)' : 'blur(3px)';
    navbar.style.transition = '0.1s ease-in-out';
    navLogoLink.style.color = isIntersecting ? '#d8b55b' : '#fff';
    navLinks1.forEach((link) => (link.style.color = isIntersecting ? 'white' : '#b7b7b7'));
  };

  applyStylingOnScroll(); // Apply initial styling based on initial scroll position

  // Listen for scroll events and update styling
  window.addEventListener('scroll', applyStylingOnScroll);
});
