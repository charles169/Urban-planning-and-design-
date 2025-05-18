// 1. Handle form submission with a thank-you alert
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual submission
    alert("Thank you for submitting your idea! 🌱");
    form.reset(); // Clear the form
  });

  // 2. Scroll-to-top button
  const scrollButton = document.createElement("button");
  scrollButton.textContent = "↑ Top";
  scrollButton.style.position = "fixed";
  scrollButton.style.bottom = "20px";
  scrollButton.style.right = "20px";
  scrollButton.style.padding = "10px 15px";
  scrollButton.style.backgroundColor = "#00a896";
  scrollButton.style.color = "white";
  scrollButton.style.border = "none";
  scrollButton.style.borderRadius = "50%";
  scrollButton.style.fontSize = "1.2rem";
  scrollButton.style.cursor = "pointer";
  scrollButton.style.display = "none";
  scrollButton.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  document.body.appendChild(scrollButton);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });