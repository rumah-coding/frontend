function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    const resultEl = document.getElementById('result');
    
    if (!selected) {
      resultEl.textContent = "Pilih jawaban dulu!";
      resultEl.className = "wrong";
      return;
    }
  
    if (selected.value === "A") {
      resultEl.textContent = "Benar!";
      resultEl.className = "correct";
    } else {
      resultEl.textContent = "Salah! Jawaban yang benar: Jakarta";
      resultEl.className = "wrong";
    }
  }