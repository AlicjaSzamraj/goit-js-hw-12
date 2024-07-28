import{a as S,i as n,S as q}from"./vendor-c493984e.js";const L=document.querySelector(".form"),h=document.querySelector(".input"),c=document.querySelector(".gallery-list"),b=document.querySelector(".result"),T=document.querySelector(".more-btn"),$="https://pixabay.com/api/",u=e=>({enable:()=>document.querySelector(e).classList.remove("disabled"),disable:()=>document.querySelector(e).classList.add("disabled")}),s=u(".text"),o=u(".loading-text"),p=u(".result-text"),r=u(".more-btn");let l=1,y=0,m=30,i="";L.addEventListener("submit",e=>{e.preventDefault(),i=h.value,l=1,f(i,l),b.textContent=i.value});T.addEventListener("click",()=>{l++,f(i,l),b.textContent=i});async function f(e,a){s.enable(),o.enable(),a===1&&(c.innerHTML="");try{const t=await S.get($,{params:{key:"45116673-24298b0cd3e8b5c60e15e7e67",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}}),d=Math.ceil(t.data.totalHits/m);return t.data.hits?(y=t.data.totalHits,C(t.data.hits),s.disable(),o.disable(),p.enable(),l=a):a>d?(r.disable(),o.disable,s.disable(),n.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(r.disable(),n.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})),t.data}catch(t){throw s.disable(),o.disable(),r.disable(),console.error(t),n.warning({title:"Error",message:"An error occurred while fetching images"}),t}}const w="Sorry, there are no images matching your search query. Please try again!";function C(e,a){if(a===1&&(c.innerHTML=""),y>e.length&&r.enable(),e.length===0){s.disable(),o.disable(),p.disable(),r.disable(),n.warning({message:w,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(g,2e3);return}const t=e.map(H).join("");c.insertAdjacentHTML("beforeend",t),setTimeout(g,500),k.refresh()}function g(){h.value=""}const k=new q(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function H({webformatURL:e,tags:a,downloads:t,likes:d,comments:v,views:x}){return`<li class="list-container">
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
              <p>${d}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${x}</p>
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
  </li>`}c.getBoundingClientRect();
//# sourceMappingURL=form-ad954035.js.map
