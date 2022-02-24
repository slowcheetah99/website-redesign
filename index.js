const faqAnswer = document.querySelectorAll(".faq-answer");
const faqDiv = document.querySelectorAll(".faq-div");
const faqIcon = document.querySelectorAll(".faq-div div .iconify");
const featureImgs = document.querySelectorAll(".feature img");
const featureText = document.querySelectorAll(".feature div");
const arrowRight = document.querySelector(".header-transition-arrow1");
const arrowLeft = document.querySelector(".header-transition-arrow2");

//header content
const headerSibling = document.querySelector(".header-sibling");
const headerTransition1 = document.querySelector(".header-transition1");
const headerTransition2 = document.querySelector(".header-transition2");
const header = document.querySelector("header");

arrowRight.addEventListener("click", () => {
  if (
    !headerSibling.classList.contains("open") ||
    headerSibling.classList.contains("reverse")
  ) {
    //removing reverse class
    headerSibling.classList.remove("reverse");
    headerTransition2.classList.remove("reverse");
    headerTransition1.classList.remove("reverse");

    //adding open class
    headerTransition1.classList.add("open");
    headerTransition2.classList.add("open");
    headerSibling.classList.add("open");
  } else {
    return;
  }
});

arrowLeft.addEventListener("click", () => {
  if (
    !headerSibling.classList.contains("reverse") ||
    headerSibling.classList.contains("open")
  ) {
    //removing open class
    headerTransition1.classList.remove("open");
    headerTransition2.classList.remove("open");
    headerSibling.classList.remove("open");

    //adding reverse class to reverse animation
    headerSibling.classList.add("reverse");
    headerTransition2.classList.add("reverse");
    headerTransition1.classList.add("reverse");
  } else {
    return;
  }
});

for (let i = 0; i < faqDiv.length; i++) {
  faqDiv[i].addEventListener("click", () => {
    //try and use easings.net to add the animation
    faqAnswer[i].style.transition = "1s ease";
    faqAnswer[i].classList.toggle("fit");
  });
}

//intersection observer
const options = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const fadeInAnimation = new IntersectionObserver((entries, fadeInAnimation) => {
  for (let i = 0; i < entries.length; i++) {
    if (!entries[i].isIntersecting) {
      return;
    } else if (!entries[i].target.classList.contains("feature1-animation")) {
      entries[i].target.classList.add("feature1-animation");
      fadeInAnimation.unobserve(entries[i].target);
      const entrySibling = entries[i].target.parentElement.querySelector("div");
      entrySibling.classList.add("feature-text-animation");
    } else {
      return;
    }
  }
}, options);

featureImgs.forEach((featureImg) => {
  fadeInAnimation.observe(featureImg);
});
