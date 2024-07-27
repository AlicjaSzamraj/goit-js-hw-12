import{i as l,S as h}from"./vendor-8c59ed88.js";const p=document.querySelector(".form"),n=document.querySelector(".input"),u=document.querySelector(".gallery-list"),f=document.querySelector(".result"),c=e=>({enable:()=>document.querySelector(e).classList.remove("disabled"),disable:()=>document.querySelector(e).classList.add("disabled")}),a=c(".text"),o=c(".loading-text"),d=c(".result-text");p.addEventListener("submit",e=>{e.preventDefault();const s=n.value;y(s)});function y(e){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"45116673-24298b0cd3e8b5c60e15e7e67",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${s}?${r}`;a.enable(),o.enable(),fetch(i).then(t=>{if(!t.ok)throw new Error(`Error! status: ${t.status}`);return t.json()}).then(t=>{a.disable(),o.disable(),d.enable(),f.textContent=n.value,t.hits?v(t.hits):l.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})}).catch(t=>{a.disable(),o.disable(),console.error(t),l.warning({title:"Error",message:"An error occurred while fetching images"})})}const b="Sorry, there are no images matching your search query. Please try again!";function v(e){if(u.innerHTML="",e.length===0){a.disable(),o.disable(),d.disable(),l.warning({message:b,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(m,2e3);return}const s=e.map($).join("");u.insertAdjacentHTML("beforeend",s),setTimeout(m,500),S.refresh()}function m(){n.value=""}const S=new h(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function $({webformatURL:e,tags:s,downloads:r,likes:i,comments:t,views:g}){return`<li class="list-container">
    <div >
      <div class="image-container">
        <a href="${e}" data-source="${e}">
          <img src="${e}" alt="${s}" />
        </a>
      </div>
      <div class="descr-element">
        <ul class="descr-list">
          <li>
            <h3>Likes</h3>
              <p>${i}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${g}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${t}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${r}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}
//# sourceMappingURL=form-7d00ade6.js.map
