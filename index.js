const faqAnswer = document.querySelectorAll(".faq-answer");
const faqDiv = document.querySelectorAll(".faq-div");
const faqIcon = document.querySelectorAll(".faq-div div .iconify");
const featureImgs = document.querySelectorAll(".feature img");
const featureText = document.querySelectorAll(".feature div");

for (let i = 0; i < faqDiv.length; i++) {
  faqDiv[i].addEventListener("click", () => {
    faqAnswer[i].style.transition = "1s ease";
    faqAnswer[i].classList.toggle("fit");
  });
}

//intersection observer

const options = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const textOptions = {
  threshold: 0,
  rootMargin: "-800px",
};

const fadeInAnimation = new IntersectionObserver((entries, fadeInAnimation) => {
  for (let i = 0; i < entries.length; i++) {
    if (!entries[i].isIntersecting) {
      return;
    }
    if (!entries[i].target.classList.contains("feature1-animation")) {
      entries[i].target.classList.toggle("feature1-animation");
      fadeInAnimation.unobserve(entries[i].target);
    } else {
      return;
    }
  }
}, options);

featureImgs.forEach((featureImg) => {
  fadeInAnimation.observe(featureImg);
});

const fadeUpAnimation = new IntersectionObserver((entries, fadeUpAnimation) => {
  entries.forEach((entry) => {
    if (!entry.target.classList.contains("feature-text-animation")) {
      entry.target.classList.toggle("feature-text-animation");
      fadeUpAnimation.unobserve(entry.target);
    }
    return;
  });
}, textOptions);

featureText.forEach((feature) => {
  fadeUpAnimation.observe(feature);
});
