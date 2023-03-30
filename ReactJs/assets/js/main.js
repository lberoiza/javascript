// Agrega Articulos 
let articleTemplate = document.getElementById('template-article').content;
let fragment = document.createDocumentFragment();

let imageUrl = 'https://picsum.photos/300/200';

for(let i=0; i<5; i++) {
  let articleNr = i+1;
  let clone = document.importNode(articleTemplate, true);
  let image = clone.querySelector('img');
  image.setAttribute('src', `${imageUrl}?random=${articleNr}`);
  let h2 = clone.querySelector('h2');
  h2.innerHTML += ` ${articleNr}`;
  fragment.appendChild(clone);
}

document.getElementById('article-container').appendChild(fragment);