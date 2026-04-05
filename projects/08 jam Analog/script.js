
const clock = document.getElementById('clock');
const radius = 130; // Jarak angka dari pusat (sedikit lebih kecil dari 150)

for (let i = 1; i <= 12; i++) {
  const angle = (i * 30 - 90) * (Math.PI / 180); // Konversi ke radian, mulai dari atas (jam 12)
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const number = document.createElement('div');
  number.className = 'number';
  number.textContent = i;
  // Posisi relatif terhadap pusat jam (150px, 150px)
  number.style.left = (150 + x - 10) + 'px'; // -10 untuk centering horizontal
  number.style.top = (150 + y - 10) + 'px';  // -10 untuk centering vertikal

  clock.appendChild(number);
}

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = ((hours % 12 + minutes / 60) / 12) * 360;

  document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

setTime();
setInterval(setTime, 1000);
