console.log('Home section script loaded');

document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.getElementById("home");

  if (!homeSection) {
    console.warn("Home section not found!");
    return;
  }

  // Background image setup
  Object.assign(homeSection.style, {
    backgroundImage: "url('images/home-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed" // Optional: adds a subtle parallax effect
  });

  // Trigger animations with a slight delay
  window.requestAnimationFrame(() => {
    setTimeout(() => {
      homeSection.classList.add("loaded");
    }, 300); // Adjust timing if needed
  });
});
