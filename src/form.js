// Opisany w dokumentacji
import iziToast from 'izitoast';
// Opcjonalny import stylów
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const galleryList = document.querySelector('.gallery-list');
const result = document.querySelector('.result');
const moreButton = document.querySelector('.more-btn');
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45116673-24298b0cd3e8b5c60e15e7e67';

const createToggle = selector => ({
  enable: () => document.querySelector(selector).classList.remove('disabled'),
  disable: () => document.querySelector(selector).classList.add('disabled'),
});

const loader = createToggle('.text');
const loadText = createToggle('.loading-text');
const resultText = createToggle('.result-text');
const moreBtn = createToggle('.more-btn');

let currentPage = 1;
let totalHits = 0;
let per_page = 30;
let currentQuery = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  currentQuery = input.value.trim();
  if (currentQuery === '' || input.value === ' ') {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
    });
    return;
  }
  currentQuery = input.value;
  currentPage = 1;
  fetchImages(currentQuery, currentPage);
  result.textContent = currentQuery;
});

moreButton.addEventListener('click', () => {
  currentPage + 1;
  fetchImages(currentQuery, currentPage);
  result.textContent = currentQuery;
});

async function fetchImages(currentQuery, page) {
  loader.enable();
  loadText.enable();
  if (page === 1) {
    galleryList.innerHTML = '';
  }
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: '45116673-24298b0cd3e8b5c60e15e7e67',
        q: currentQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
      },
    });

    const totalPages = Math.ceil(response.data.totalHits / per_page);
    if (response.data.hits) {
      totalHits = response.data.totalHits;
      displayImages(response.data.hits);
      loader.disable();
      loadText.disable();
      resultText.enable();

      currentPage = page;
    } else if (page > totalPages) {
      moreBtn.disable();
      loadText.disable();
      loader.disable();
      iziToast.warning({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      moreBtn.disable();
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
      });
    }
    return response.data;
  } catch (error) {
    loader.disable();
    loadText.disable();
    moreBtn.disable();
    console.error(error);
    iziToast.warning({
      message: "We're sorry, but you've reached the end of search results.",
    });
    throw error;
  }
}

const message =
  'Sorry, there are no images matching your search query. Please try again!';

function displayImages(images, page) {
  if (page === 1) {
    galleryList.innerHTML = '';
  }
  if (totalHits > images.length) {
    moreBtn.enable();
  }
  if (images.length === 0) {
    loader.disable();
    loadText.disable();
    resultText.disable();
    moreBtn.disable();

    iziToast.warning({
      message: message,
      backgroundColor: '#ef4040',
      messageColor: `#fff`,
      position: 'topRight',
      timeout: 2000,
    });
    setTimeout(clearValue, 2000);

    return;
  }
  const imagesMarkup = images.map(makeImgItem).join('');
  galleryList.insertAdjacentHTML('beforeend', imagesMarkup);
  setTimeout(clearValue, 500);

  //   galleryList.appendChild(moreButton);

  lightbox.refresh();
}

function clearValue() {
  input.value = '';
}

const lightbox = new SimpleLightbox('.gallery-list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
  className: 'simpleLightboxGallery',
  doubleTapZoom: 2,
  scrollZoom: true,
  overlay: true,
});

function makeImgItem({
  webformatURL,
  tags,
  downloads,
  likes,
  comments,
  views,
}) {
  return `<li class="list-container">
    <div >
      <div class="image-container">
        <a href="${webformatURL}" data-source="${webformatURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
      </div>
      <div class="descr-element">
        <ul class="descr-list">
          <li>
            <h3>Likes</h3>
              <p>${likes}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${views}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${comments}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${downloads}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`;
}

const galleryItemHeight = document
  .querySelector('.gallery-list')
  .getBoundingClientRect().height;
window.scrollBy({
  top: galleryItemHeight * 2,
  behavior: 'smooth',
});
