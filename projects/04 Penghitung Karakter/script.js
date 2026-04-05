const textarea = document.getElementById('textInput');
const counter = document.getElementById('counter');
const MAX = 100;

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  counter.textContent = `Karakter: ${length} / ${MAX}`;
  
  if (length > MAX) {
    counter.classList.add('over');
  } else {
    counter.classList.remove('over');
  }
});