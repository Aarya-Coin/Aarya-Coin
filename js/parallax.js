// Get the section and background image element
const section = document.getElementById('home');
const backgroundImage = section.style.backgroundImage;

// Function to handle parallax effect on scroll
function handleParallax() {
  // Calculate the new background position based on the scroll position
  const scrollPosition = window.scrollY;
  const yPos = scrollPosition * 0.07; // Adjust the parallax speed here

  // Update the background position
  section.style.backgroundPosition = `50% ${yPos}px`;
}

// Add event listener for scroll event
window.addEventListener('scroll', handleParallax);