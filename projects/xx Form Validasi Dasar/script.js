function validateForm() {
  // Reset error & message
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.getElementById('message').textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value);

  let valid = true;

  // Validasi nama
  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'Nama minimal 3 karakter';
    valid = false;
  }

  // Validasi email
  if (!email.includes('@')) {
    document.getElementById('emailError').textContent = 'Email harus mengandung @';
    valid = false;
  }

  // Validasi umur
  if (isNaN(age) || age < 1 || age > 120) {
    document.getElementById('ageError').textContent = 'Umur harus antara 1–120';
    valid = false;
  }

  if (valid) {
    document.getElementById('message').textContent = 'Form valid!';
    document.getElementById('message').className = 'success';
  }
}