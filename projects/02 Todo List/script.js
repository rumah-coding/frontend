function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    //cek apakah input kosong. kalau kosong keluar dari fungsi
    if (taskText === '') return;
  
  //buat element list item baru
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn" onclick="this.parentElement.remove()">Hapus</button>
    `;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }


