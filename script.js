import { LinkRenderer } from './linkRenderer.js';

fetch('./me.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error loading JSON file');
    }
    return response.json();
  })
  .then(data => {
    const renderer = new LinkRenderer(data.links);
    renderer.render();

    document.querySelector('.footer').innerHTML = `<h4>${data.subname}</h4>`;
  })
  .catch(error => {
    console.error('There was a problem with the fetch request:', error);
  });
