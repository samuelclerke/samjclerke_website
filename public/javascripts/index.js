document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('h1-details');
  const text = "Software Engineer";
  let i = 0;
  let isCursorVisible = true;

  function typeNextChar() {
    if (i < text.length) {
      div.textContent = text.slice(0, i + 1) + (isCursorVisible ? "_" : "");
      i++;
      setTimeout(typeNextChar, 100);
    } else {
      toggleCursor();
    }
  }

  function toggleCursor() {
    isCursorVisible = !isCursorVisible;
    div.textContent = text + (isCursorVisible ? "_" : "");
    setTimeout(toggleCursor, 500); // Adjust the speed of the blinking effect here
  }

  typeNextChar();
});
