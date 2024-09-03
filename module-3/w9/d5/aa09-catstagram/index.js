// Your code here 
window.onload = async () => {
  try {  
    const numberOfImages = 4; 
    
    const gallery = document.createElement('div');
    gallery.classList.add('cat-gallery');

    for (let i = 0; i < numberOfImages; i++) {
      
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      const catImageUrl = data[0].url;

      
      const container = document.createElement('div');
      container.classList.add('cat-container');

      const header = document.createElement('h1');
      header.textContent = `Random Cat Image ${i + 1}`;

      const catImage = document.createElement('img');
      catImage.src = catImageUrl;
      catImage.alt = `Random cat ${i + 1}`;

      
      container.appendChild(header);
      container.appendChild(catImage);
      
      gallery.appendChild(container);
    }

    document.body.appendChild(gallery);

  } catch (error) {
    console.error('Error fetching the cat images:', error);
  }
};
