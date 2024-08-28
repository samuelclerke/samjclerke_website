function mouseTracker() {
  let body = document.getElementById("body");

  document.addEventListener('mousemove', e => {
    let x = e.clientX;
    let y = e.clientY;

    body.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.2))`;
  })
};

document.addEventListener('DOMContentLoaded', () => {
  mouseTracker();
});
 