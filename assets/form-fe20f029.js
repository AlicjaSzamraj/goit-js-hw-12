import{a as x,i as n,S as q}from"./vendor-c493984e.js";const L=document.querySelector(".form"),h=document.querySelector(".input"),d=document.querySelector(".gallery-list"),y=document.querySelector(".result"),T=document.querySelector(".more-btn"),w="https://pixabay.com/api/",c=e=>({enable:()=>document.querySelector(e).classList.remove("disabled"),disable:()=>document.querySelector(e).classList.add("disabled")}),s=c(".text"),o=c(".loading-text"),b=c(".result-text"),r=c(".more-btn");let l=1,p=0,m=30,i="";L.addEventListener("submit",e=>{e.preventDefault(),i=h.value,l=1,f(i,l),y.textContent=i});T.addEventListener("click",()=>{l++,f(i,l),y.textContent=i});async function f(e,a){s.enable(),o.enable(),a===1&&(d.innerHTML="");try{const t=await x.get(w,{params:{key:"45116673-24298b0cd3e8b5c60e15e7e67",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}}),u=Math.ceil(t.data.totalHits/m);return t.data.hits?(p=t.data.totalHits,C(t.data.hits),s.disable(),o.disable(),b.enable(),l=a):a>u?(r.disable(),o.disable(),s.disable(),n.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(r.disable(),n.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})),t.data}catch(t){throw s.disable(),o.disable(),r.disable(),console.error(t),n.warning({message:"We're sorry, but you've reached the end of search results."}),t}}const $="Sorry, there are no images matching your search query. Please try again!";function C(e,a){if(a===1&&(d.innerHTML=""),p>e.length&&r.enable(),e.length===0){s.disable(),o.disable(),b.disable(),r.disable(),n.warning({message:$,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(g,2e3);return}const t=e.map(H).join("");d.insertAdjacentHTML("beforeend",t),setTimeout(g,500),k.refresh()}function g(){h.value=""}const k=new q(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function H({webformatURL:e,tags:a,downloads:t,likes:u,comments:v,views:S}){return`<li class="list-container">
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
              <p>${S}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${v}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${t}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}const B=document.querySelector(".gallery-list").getBoundingClientRect().height;window.scrollBy({top:B*2,behavior:"smooth"});
//# sourceMappingURL=form-fe20f029.js.map
