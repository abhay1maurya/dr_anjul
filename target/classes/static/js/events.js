document.addEventListener("DOMContentLoaded", () => {
  const moreInfoBtns = document.querySelectorAll(".more-info-btn");
  const loadMoreBtn = document.getElementById("load-more-events");

  moreInfoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const eventCard = btn.closest(".event-card");
      const eventDetails = eventCard.querySelector(".event-details");
      eventDetails.classList.toggle("visible");
    });
  });

  // Show "Load More" initially
  loadMoreBtn.style.display = "inline-block";

  loadMoreBtn.addEventListener("click", () => {
    const newEvent = document.createElement("div");
    newEvent.classList.add("event-card");
    newEvent.innerHTML = `
      <h3>New Event: Health Consultation</h3>
      <p><strong>Date:</strong> 5 June 2025</p>
      <p><strong>Location:</strong> Dr. Anjul's Clinic</p>
      <button class="more-info-btn">More Info</button>
      <div class="event-details">
        <p><strong>Description:</strong> A consultation on improving your mental and physical health through homeopathy.</p>
      </div>
    `;
    document.querySelector(".events-list").appendChild(newEvent);

    const newBtn = newEvent.querySelector(".more-info-btn");
    newBtn.addEventListener("click", () => {
      const eventDetails = newEvent.querySelector(".event-details");
      eventDetails.classList.toggle("visible");
    });

    // Optional: disable button or load more events again
    loadMoreBtn.style.display = "none";
  });
});
