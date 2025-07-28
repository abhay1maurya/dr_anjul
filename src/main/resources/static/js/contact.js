// console.log('Contact section script loaded');
// document.addEventListener("DOMContentLoaded", () => {
//   const socialLinks = document.querySelectorAll(".social-icons a");

//   socialLinks.forEach(link => {
//     // Animate icon on hover
//     link.addEventListener("mouseover", () => {
//       link.classList.add("pulse");
//     });

//     link.addEventListener("mouseout", () => {
//       link.classList.remove("pulse");
//     });

//     // Optional: confirm before opening (uncomment below if you want it)
//     // link.addEventListener("click", (e) => {
//     //   const confirmOpen = confirm("You are about to open an external link. Continue?");
//     //   if (!confirmOpen) e.preventDefault();
//     // });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-icons a");

  icons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
      icon.classList.add("animated");
    });
    icon.addEventListener("animationend", () => {
      icon.classList.remove("animated");
    });
  });
});
