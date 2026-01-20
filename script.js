const playBtn = document.getElementById("playBtn");
const bgm = document.getElementById("bgm");
const cover = document.getElementById("cover");
const content = document.getElementById("content");

playBtn.addEventListener("click", () => {
  bgm.volume = 0.35;
  bgm.play();

  cover.style.display = "none";
  content.style.display = "block";
});
