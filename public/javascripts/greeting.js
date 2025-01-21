window.onload = function greeting() {
  let time = new Date();
  let hour = time.getHours();
  let greeting_text = document.getElementById("greeting");

  if (hour < 12) {
    greeting_text.textContent = "Good morning";
  } else if (hour >= 12 && hour < 19) {
    greeting_text.textContent = "Good afternoon";
  } else if (hour >= 19) {
    greeting_text.textContent = "Good evening";
  }

  console.log("Greeting executed correctly.");
}