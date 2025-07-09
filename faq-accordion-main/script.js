// Toggling faq
document.querySelectorAll(".faq").forEach((faq) => {
  console.log(faq);
  const answer = faq.querySelector(".answer");

  faq.addEventListener("click", (e) => {
    e.stopPropagation();

    // feature to display only current faq
    document.querySelectorAll(".faq").forEach((otherFaq) => {
      if (otherFaq !== faq) {
        const otherAnswer = otherFaq.querySelector(".answer");
        otherAnswer.classList.add("hidden");
        otherFaq.classList.remove("active");
      }
    });

    //toggling faq's
    answer.classList.toggle("hidden");
    faq.classList.toggle("active");
  });
});

// Reset UI
document.addEventListener("click", (e) => {
  const parentContainer = document.querySelector(".parent-container");

  if (!parentContainer.contains(e.target)) {
    document.querySelectorAll(".faq").forEach((faq) => {
      const answer = faq.querySelector(".answer");
      answer.classList.add("hidden");
      faq.classList.remove("active");
    });
  }
});
