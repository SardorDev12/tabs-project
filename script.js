const btns = document.querySelectorAll(".tab-btn");
const aboutSection = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

aboutSection.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const activeEl = document.getElementById(id);
    activeEl.classList.add("active");
  }
});
