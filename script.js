
const imageGallery = document.getElementById('image-gallery');
let page = 1;
const perPage = 10;

async function fetchImages() {
  const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${perPage}&client_id=1-eU4YZT0usOQjYaOX-VOjW_uELtJR-wjjYE3YdyoZA`);
  const data = await response.json();
  data.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description;
    imgElement.className = 'image-item';
    imageGallery.appendChild(imgElement);
  });
  page++;
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    fetchImages();
  }
}

document.addEventListener('scroll', handleScroll);

fetchImages();
