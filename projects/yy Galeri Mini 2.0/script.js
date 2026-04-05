// Fungsi untuk generate array ID unik acak
function getRandomUniqueIds(count, min = 0, max = 1000) {
    const ids = new Set();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(ids);
  }
  
  // Ambil ID acak saat halaman dimuat
  const imageIds = getRandomUniqueIds(4); // 4 gambar unik
  
  // Tampilkan gambar utama pertama
  const mainImage = document.getElementById('mainImage');
  mainImage.src = `https://picsum.photos/id/${imageIds[0]}/400/300`;
  
  // Bangun thumbnail
  const thumbnailsContainer = document.getElementById('thumbnails');
  imageIds.forEach(id => {
    const thumb = document.createElement('img');
    thumb.src = `https://picsum.photos/id/${id}/100/100`;
    thumb.alt = `Thumbnail ${id}`;
    thumb.onclick = () => changeImage(id);
    thumb.style.cursor = 'pointer';
    thumbnailsContainer.appendChild(thumb);
  });
  
  // Fungsi ganti gambar berdasarkan ID
  function changeImage(id) {
    document.getElementById('mainImage').src = `https://picsum.photos/id/${id}/400/300`;
  }