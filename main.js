const showBtn = document.getElementById("open-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.getElementById("close-btn");
const modal = document.querySelector(".modal");

closeBtn.addEventListener("click", () => {
  console.log("salommm");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
