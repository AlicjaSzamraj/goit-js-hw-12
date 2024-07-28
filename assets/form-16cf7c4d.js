import{a as q,i as n,S as w}from"./vendor-c493984e.js";const L=document.querySelector(".form"),h=document.querySelector(".input"),c=document.querySelector(".gallery-list"),b=document.querySelector(".result"),p=document.querySelector(".more-btn"),T="https://pixabay.com/api/",d=e=>({enable:()=>document.querySelector(e).classList.remove("disabled"),disable:()=>document.querySelector(e).classList.add("disabled")}),o=d(".text"),s=d(".loading-text"),y=d(".result-text"),r=d(".more-btn");let l=1,f=0,m=30,i="";L.addEventListener("submit",e=>{e.preventDefault(),i=h.value,l=1,v(i,l),b.textContent=i});p.addEventListener("click",()=>{l++,v(i,l),b.textContent=i});async function v(e,a){o.enable(),s.enable(),a===1&&(c.innerHTML="");try{const t=await q.get(T,{params:{key:"45116673-24298b0cd3e8b5c60e15e7e67",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}}),u=Math.ceil(t.data.totalHits/m);return t.data.hits?(f=t.data.totalHits,$(t.data.hits),o.disable(),s.disable(),y.enable(),l=a):a>u?(r.disable(),s.disable(),o.disable(),n.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(r.disable(),n.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})),t.data}catch(t){throw o.disable(),s.disable(),r.disable(),console.error(t),n.warning({title:"Error",message:"An error occurred while fetching images"}),t}}const C="Sorry, there are no images matching your search query. Please try again!";function $(e,a){if(a===1&&(c.innerHTML=""),f>e.length&&r.enable(),e.length===0){o.disable(),s.disable(),y.disable(),r.disable(),n.warning({message:C,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(g,2e3);return}const t=e.map(H).join("");c.insertAdjacentHTML("beforeend",t),setTimeout(g,500),c.appendChild(p),k.refresh()}function g(){h.value=""}const k=new w(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function H({webformatURL:e,tags:a,downloads:t,likes:u,comments:S,views:x}){return`<li class="list-container">
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
              <p>${x}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${S}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${t}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}const B=document.querySelector(".gallery-list").getBoundingClientRect().height;window.scrollBy({top:B*2,behavior:"smooth"});
//# sourceMappingURL=form-16cf7c4d.js.map
