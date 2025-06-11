// Trending Now Slider 
const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 850, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -880, behavior: 'smooth' });
});

// FAQ Section
const faqs = document.querySelectorAll(".faq-question");

faqs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const plus = btn.querySelector(".plus");
    const isVisible = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
    document.querySelectorAll(".plus").forEach(p => p.textContent = "+");

    if (!isVisible) {
      answer.style.display = "block";
      plus.textContent = "×";
    }
  });
});

// ✅ Email Error Handling – Top Section
document.getElementById("submit-top").addEventListener("click", function () {
  const emailInput = document.getElementById("sign-email");

  if (emailInput.value.trim() === "") {
    emailInput.classList.add("error-border", "shake");
    const originalPlaceholder = emailInput.placeholder;
    emailInput.value = "";
    emailInput.placeholder = "Email required";

    setTimeout(() => {
      emailInput.classList.remove("error-border", "shake");
      emailInput.placeholder = originalPlaceholder;
    }, 2000);
  }
});

// ✅ Email Error Handling – Bottom Section
document.getElementById("submit-bottom").addEventListener("click", function () {
  const emailInput = document.getElementById("sign-email-bottom");

  if (emailInput.value.trim() === "") {
    emailInput.classList.add("error-border", "shake");
    const originalPlaceholder = emailInput.placeholder;
    emailInput.value = "";
    emailInput.placeholder = "Email required";

    setTimeout(() => {
      emailInput.classList.remove("error-border", "shake");
      emailInput.placeholder = originalPlaceholder;
    }, 2000);
  }
});
