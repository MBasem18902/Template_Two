let butn = document.querySelector(".butn");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    butn.style.display = "block";
  } else {
    butn.style.display = "none";
  }
};

butn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
