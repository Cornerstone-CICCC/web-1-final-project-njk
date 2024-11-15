import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "WMKhfPTHyUnvB5uQx",
});

document.addEventListener("DOMContentLoaded", function () {
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
    const formData = new FormData(form);

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

    // Name
    const name = document.getElementById("name").value;

    // Contact Info
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

    console.log(selectedEventType, eventDate, eventTime, name, contactValue);

    emailjs.sendFormemailjs.send("service_v1xkc64", "template_riw59b6").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send the message. Please try again.");
      }
    );
  });
});
