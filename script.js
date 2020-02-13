const whiteKeys = ["z", "x", "c", "v", "b", "n", "m"];
const blackKeys = ["s", "d", "g", "h", "j"];

const wKeys = document.querySelectorAll(".key.white");
const bKeys = document.querySelectorAll(".key.black");

const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", e => {
  if (e.repeat) return;

  const key = e.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);
  const blackKeyIndex = blackKeys.indexOf(key);

  if (whiteKeyIndex > -1) playNote(wKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(bKeys[blackKeyIndex]);
  
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;

  noteAudio.play();
}
