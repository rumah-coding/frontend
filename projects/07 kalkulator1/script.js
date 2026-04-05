function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    let display = document.getElementById('display');
    try {
      // Ganti × dan ÷ agar bisa di-eval
      let expression = display.value
        .replace(/×/g, '*')
        .replace(/÷/g, '/');
      
      // Hindari eval langsung dari input user di proyek nyata!
      // Untuk latihan pemula, ini cukup aman jika tidak terhubung ke internet/data sensitif.
      let result = eval(expression);
      
      // Tampilkan hasil
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }