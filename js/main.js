/* Shared JavaScript: mobile menu, form demo behavior, year, and date rules. */
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "×" : "☰";
    });
  }

  document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Preselect a guest stay when a visitor clicks a stay card.
  const params = new URLSearchParams(window.location.search);
  const stayChoice = document.querySelector("#stay-choice");
  const bookingType = document.querySelector("#booking-type");
  const requestedStay = params.get("stay");
  if (requestedStay && stayChoice) {
    stayChoice.value = requestedStay;
    if (bookingType) bookingType.value = "Guest stay";
  }

  // Prevent selecting dates in the past on the inquiry form.
  const arrival = document.querySelector("#arrival");
  const departure = document.querySelector("#departure");
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString().split("T")[0];

  if (arrival) {
    arrival.min = localToday;
    arrival.addEventListener("change", () => {
      if (departure) {
        departure.min = arrival.value || localToday;
        if (departure.value && departure.value < arrival.value) departure.value = "";
      }
    });
  }
  if (departure) departure.min = localToday;

  // Demo forms prepare an email draft instead of pretending to make a booking.
  const availabilityForm = document.querySelector("#availability-form");
  if (availabilityForm) {
    availabilityForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(availabilityForm);
      const subject = encodeURIComponent("Bray Estate availability inquiry");
      const body = encodeURIComponent(
        `Booking type: ${data.get("booking-type")}\n` +
        `Stay: ${data.get("stay-choice") || "Not applicable"}\n` +
        `Arrival/event date: ${data.get("arrival")}\n` +
        `Departure date: ${data.get("departure") || "Not applicable"}\n` +
        `Guests: ${data.get("guests")}\n` +
        `Occasion: ${data.get("occasion")}\n` +
        `Reply to: ${data.get("email")}\n\nPlease confirm availability and pricing.`
      );
      document.querySelector("#availability-status").textContent =
        "Your email draft is ready. Add the estate's real email address in js/main.js before publishing.";
      // Replace this placeholder with the venue's email when known.
      window.location.href = `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const subject = encodeURIComponent(`Bray Estate inquiry: ${data.get("interest")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`
      );
      document.querySelector("#contact-status").textContent =
        "Your email draft is ready. Add the estate's real email address in js/main.js before publishing.";
      // Replace this placeholder with the venue's email when known.
      window.location.href = `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
    });
  }
});