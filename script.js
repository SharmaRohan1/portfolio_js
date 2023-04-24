const btn = document.querySelector(".nav-btn i");

btn.addEventListener("click", (e) => {
  const list = document.querySelector(".nav-list-container");

  list.classList.toggle("hide");
});
