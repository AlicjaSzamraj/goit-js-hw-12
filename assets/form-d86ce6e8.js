import{a as v,i,S as q}from"./vendor-c493984e.js";const S=document.querySelector(".form"),l=document.querySelector(".input"),n=document.querySelector(".gallery-list"),x=document.querySelector(".result"),L=document.querySelector(".more-btn"),T="https://pixabay.com/api/",c=e=>({enable:()=>document.querySelector(e).classList.remove("disabled"),disable:()=>document.querySelector(e).classList.add("disabled")}),s=c(".text"),o=c(".loading-text"),h=c(".result-text"),r=c(".more-btn");S.addEventListener("submit",e=>{e.preventDefault();const a=l.value;p(a,d),x.textContent=l.value});let d=1,b=0,m=30;async function p(e,a=1){s.enable(),o.enable(),a===1&&(n.innerHTML="");try{const t=await v.get(T,{params:{key:"45116673-24298b0cd3e8b5c60e15e7e67",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}}),u=Math.ceil(t.data.totalHits/m);return t.data.hits?(b=t.data.totalHits,w(t.data.hits),s.disable(),o.disable(),h.enable(),d=a):a>u?(r.disable(),o.disable,s.disable(),i.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(r.disable(),i.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})),t.data}catch(t){throw s.disable(),o.disable(),r.disable(),console.error(t),i.warning({title:"Error",message:"An error occurred while fetching images"}),t}}const $="Sorry, there are no images matching your search query. Please try again!";function w(e,a){if(a===1&&(n.innerHTML=""),b>e.length&&r.enable(),e.length===0){s.disable(),o.disable(),h.disable(),r.disable(),i.warning({message:$,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(g,2e3);return}const t=e.map(C).join("");n.insertAdjacentHTML("beforeend",t),setTimeout(g,500),k.refresh()}function g(){l.value=""}const k=new q(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function C({webformatURL:e,tags:a,downloads:t,likes:u,comments:y,views:f}){return`<li class="list-container">
    <div >
      <div class="image-container">
        <a href="${e}" data-source="${e}">
          <img src="${e}" alt="${a}" />
        </a>
      </div>
      <div class="descr-element">
        <ul class="descr-list">
          <li>
            <h3>Likes</h3>
              <p>${u}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${f}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${y}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${t}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}n.getBoundingClientRect();L.addEventListener("click",()=>{const e=l.value;p(e,d+1)});
//# sourceMappingURL=form-d86ce6e8.js.map
