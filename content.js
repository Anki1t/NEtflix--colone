function loadVideo1() {
  var videoEl = document.getElementsByTagName("video")[0];
  var sourceEl = videoEl.getElementsByTagName("source")[0];
  sourceEl.src = "netflix-videos/vid1.mp4";
  videoEl.load();
}
function loadVideo2() {
  var videoEl = document.getElementsByTagName("video")[0];
  var sourceEl = videoEl.getElementsByTagName("source")[0];
  sourceEl.src = "video2.mp4";
  videoEl.load();
}
