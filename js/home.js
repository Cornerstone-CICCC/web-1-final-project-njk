document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "Carla is the best! She made me the night's brightest star! She stayed with me the whole wedding ensuring I always looked and felt wonderful!!",
    "Carla Beauty's makeup for my photoshoot was outstanding! Thier expertise and attention to detail made me look perfect in every hot. Highly recommend!",
    "Carla Beauty's party makeup service was amazing! The makeup lasted all night, keeping me flawless until the end. Thank you, Carla for an unforgettable experience!",
  ];

  const names = [
    "Janny",
    "Ingrid",
    "Marcela",
  ];

  let currentIndex = 0;

  function updateQuote() {
    document.getElementById("quote").textContent = quotes[currentIndex];
    document.getElementById('quote-name').textContent = `${names[currentIndex]}`;
  }

  document.getElementById("next-btn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote();
  });

  document.getElementById("prev-btn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
  });

  updateQuote();

  const buttons = document.querySelectorAll(".event-option");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
    });
  });

  const contactInputs = document.querySelectorAll(".contact-input");
  const contactRadios = document.querySelectorAll("input[name='contact']");

  contactRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      contactInputs.forEach((input) => {
        input.style.display = "none";
      });

      const selectedInput = document.getElementById(
        `${event.target.value}-input`
      );
      if (selectedInput) {
        selectedInput.style.display = "block";
      }
    });
  });

  const form = document.getElementById("services-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_v1xkc64";
    const templateID = "template_riw59b6";

    // Event Type
    const selectedOption = document.querySelector(".event-option.selected");
    const selectedEventType = selectedOption
      ? selectedOption.textContent
      : null;

    // Event Date
    const eventDateCheckbox = document.getElementById(
      "event-date-checkbox"
    ).checked;
    const eventDate = eventDateCheckbox
      ? "Not decided"
      : document.getElementById("event-date").value;

    // Event Time
    const eventTimeSelect = document.getElementById("event-time").value;
    const eventTimeCheckbox = document.querySelector(
      "#event-time + .checkbox-label input"
    ).checked;
    const eventTime = eventTimeCheckbox ? "Not decided" : eventTimeSelect;

    // Contact
    const selectedContact = document.querySelector(
      "input[name='contact']:checked"
    ).value;

    let contactValue;
    switch (selectedContact) {
      case "call":
        contactValue = document.getElementById("call-input").value;
        break;
      case "whatsapp":
        contactValue = document.getElementById("whatsapp-input").value;
        break;
      case "sms":
        contactValue = document.getElementById("sms-input").value;
        break;
      case "email":
        contactValue = document.getElementById("email-input").value;
        break;
    }
    const formData = {
      name: document.getElementById("name").value,
      event_type: selectedEventType,
      event_date: eventDate,
      event_time: eventTime,
      contact_type: selectedContact,
      contact_info: contactValue,
    };

    emailjs
      .send(serviceID, templateID, formData)
      .then((response) => {
        alert("Email sent successfully! Thank you for contacting us.");
        resetForm();
      })
      .catch((error) => {
        alert("Failed to send email. Please try again.");
      });

    function resetForm() {
      form.reset();

      buttons.forEach((btn) => btn.classList.remove("selected"));
      const weddingButton = document.querySelector(".event-option:first-child");
      weddingButton.classList.add("selected");

      const contactRadios = document.querySelectorAll("input[name='contact']");
      contactRadios.forEach((radio) => {
        radio.checked = false;
      });
      const contactInputs = document.querySelectorAll(".contact-input");
      contactInputs.forEach((input) => {
        input.style.display = "none";
      });

      const callRadio = document.getElementById("call");
      callRadio.checked = true;
      const callInput = document.getElementById("call-input");
      callInput.style.display = "block";
    }
  });
});
