import{i,a as x,S as q}from"./vendor-c493984e.js";const w=document.querySelector(".form"),n=document.querySelector(".input"),m=document.querySelector(".gallery-list"),b=document.querySelector(".result"),C=document.querySelector(".more-btn"),L="https://pixabay.com/api/",u=e=>({enable:()=>document.querySelector(e).classList.remove("disabled"),disable:()=>document.querySelector(e).classList.add("disabled")}),o=u(".text"),r=u(".loading-text"),y=u(".result-text"),l=u(".more-btn");let c=1,p=0,g=30,s="";w.addEventListener("submit",e=>{if(e.preventDefault(),s=n.value.trim(),s===""||n.value===" "){i.warning({message:"Please enter a search term.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}s=n.value,c=1,f(s,c),b.textContent=s});C.addEventListener("click",()=>{f(s,c),b.textContent=s});async function f(e,a){o.enable(),r.enable(),a===1&&(m.innerHTML="");try{const t=await x.get(L,{params:{key:"45116673-24298b0cd3e8b5c60e15e7e67",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:g}}),d=Math.ceil(t.data.totalHits/g);return t.data.hits?(p=t.data.totalHits,$(t.data.hits),o.disable(),r.disable(),y.enable(),c=a):a>d?(l.disable(),r.disable(),o.disable(),i.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(l.disable(),i.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})),t.data}catch(t){throw o.disable(),r.disable(),l.disable(),console.error(t),i.warning({message:"We're sorry, but you've reached the end of search results."}),t}}const T="Sorry, there are no images matching your search query. Please try again!";function $(e,a){if(a===1&&(m.innerHTML=""),p>e.length&&l.enable(),e.length===0){o.disable(),r.disable(),y.disable(),l.disable(),i.warning({message:T,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(h,2e3);return}const t=e.map(H).join("");m.insertAdjacentHTML("beforeend",t),setTimeout(h,500),k.refresh()}function h(){n.value=""}const k=new q(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function H({webformatURL:e,tags:a,downloads:t,likes:d,comments:v,views:S}){return`<li class="list-container">
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
//# sourceMappingURL=form-2fbbe8d5.js.map
