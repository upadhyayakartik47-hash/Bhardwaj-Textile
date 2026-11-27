
// ONI BHARDWAJ TEXTILE
// Website functionality

// ADD YOUR WHATSAPP NUMBER HERE
// Example format: 919876543210
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

// PRODUCT FILTERS
const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filters.forEach(button => {
  button.addEventListener("click", () => {

    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.filter;

    products.forEach(product => {
      const categories = product.dataset.category.split(" ");

      product.style.display =
        category === "all" || categories.includes(category)
          ? "block"
          : "none";
    });
  });
});

// WHATSAPP MESSAGE FUNCTION
function sendWhatsApp(message) {

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please configure your WhatsApp number in script.js");
    return;
  }

  const url =
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

// INDIVIDUAL PRODUCT ENQUIRIES
document.querySelectorAll(".enquire-btn").forEach(button => {

  button.addEventListener("click", () => {

    const product = button.dataset.product;

    const message =
      "Hello ONI Bhardwaj Textile!\n\n" +
      "I am interested in " + product + ".\n" +
      "Please share your wholesale pricing and availability.";

    sendWhatsApp(message);
  });

});

// WHOLESALE ENQUIRY FORM
const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", event => {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const fabric = document.getElementById("fabric").value;
  const quantity = document.getElementById("quantity").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !fabric) {
    alert("Please complete all required fields.");
    return;
  }

  const enquiry =
    "NEW WHOLESALE ENQUIRY\n\n" +
    "Name: " + name + "\n" +
    "Business: " + business + "\n" +
    "Phone: " + phone + "\n" +
    "Fabric: " + fabric + "\n" +
    "Quantity: " + quantity + "\n" +
    "Requirements: " + message;

  sendWhatsApp(enquiry);
});
