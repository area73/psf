
// 1 - dmo requestAnimationFrame --> window.requestAnimationFrame(callback);
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
requestAnimationFrame(loop);

let i = 0;
function loop() {
  console.log(i++)
  requestAnimationFrame(loop)
}



