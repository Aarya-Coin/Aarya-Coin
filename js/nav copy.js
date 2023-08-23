document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu code
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = toggleBtn.querySelector('img');
  const linksBg = document.querySelector('.links-bg');
  const linksContainer = document.querySelector('.links');

  toggleBtn.onclick = () => {
    linksBg.classList.toggle('open');
    linksContainer.classList.toggle('linksPos');
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

  const heroSectionOptions = { rootMargin: screen.width > 767 ? '-100px 0px 0px 0px' : '-50px 0px 0px 0px' };
  const heroSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting;
      part2Links.style.opacity = isIntersecting ? 0 : 1;
      navBg.style.backgroundColor = isIntersecting ? 'transparent' : '#000000a8';
      navBg.style.backdropFilter = isIntersecting ? 'blur(0px)' : 'blur(3px)';
      navbar.style.transition = '0.3s ease-in-out';
      navLogoLink.style.color = isIntersecting ? '#d8b55b' : '#fff';
      navLinks1.forEach((link) => (link.style.color = isIntersecting ? 'white' : '#b7b7b7'));
    });
  }, heroSectionOptions);

  heroSectionObserver.observe(heroSection);
});
