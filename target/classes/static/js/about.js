// Basic alert on "Book Consultation" button click
document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.querySelector(".btn-primary");

  if (bookBtn) {
    bookBtn.addEventListener("click", (e) => {
      // Add your actual scroll logic or modal logic here if needed
      alert("Redirecting to consultation section...");
    });
  }
});
