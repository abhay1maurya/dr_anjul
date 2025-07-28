document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Create reusable lightbox elements
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("lightbox-close");
  closeBtn.textContent = "×";
  lightbox.appendChild(closeBtn);

  const lightboxImg = document.createElement("img");
  lightbox.appendChild(lightboxImg);
  document.body.appendChild(lightbox);

  // Event: Open lightbox
  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    });
  });

  // Event: Close on click of × or background
  closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
});
