// Ensure iframes keep 16:9 ratio on resize
window.addEventListener("resize", () => {
  const iframes = document.querySelectorAll("#youtube iframe");
  iframes.forEach(iframe => {
    iframe.style.height = (iframe.clientWidth * 9) / 16 + "px";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const iframes = document.querySelectorAll("#youtube iframe");
  iframes.forEach(iframe => {
    iframe.style.height = (iframe.clientWidth * 9) / 16 + "px";
  });
});
