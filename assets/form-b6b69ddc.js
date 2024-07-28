import{a as q,i as n,S as L}from"./vendor-c493984e.js";const T=document.querySelector(".form"),g=document.querySelector(".input"),c=document.querySelector(".gallery-list"),y=document.querySelector(".result"),b=document.querySelector(".more-btn"),w="https://pixabay.com/api/",d=e=>({enable:()=>document.querySelector(e).classList.remove("disabled"),disable:()=>document.querySelector(e).classList.add("disabled")}),s=d(".text"),o=d(".loading-text"),p=d(".result-text"),r=d(".more-btn");let l=1,f=0,m=30,i="";T.addEventListener("submit",e=>{e.preventDefault(),i=g.value,l=1,v(i,l),y.textContent=i});b.addEventListener("click",()=>{l++,v(i,l),y.textContent=i});async function v(e,a){s.enable(),o.enable(),a===1&&(c.innerHTML="");try{const t=await q.get(w,{params:{key:"45116673-24298b0cd3e8b5c60e15e7e67",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}}),u=Math.ceil(t.data.totalHits/m);return t.data.hits?(f=t.data.totalHits,$(t.data.hits),s.disable(),o.disable(),p.enable(),l=a):a>u?(r.disable(),o.disable(),s.disable(),n.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(r.disable(),n.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})),t.data}catch(t){throw s.disable(),o.disable(),r.disable(),console.error(t),n.warning({message:"We're sorry, but you've reached the end of search results."}),t}}const C="Sorry, there are no images matching your search query. Please try again!";function $(e,a){if(a===1&&(c.innerHTML=""),f>e.length&&r.enable(),e.length===0){s.disable(),o.disable(),p.disable(),r.disable(),n.warning({message:C,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(h,2e3);return}const t=e.map(H).join("");c.insertAdjacentHTML("beforeend",t),setTimeout(h,500),c.appendChild(b),k.refresh()}function h(){g.value=""}const k=new L(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function H({webformatURL:e,tags:a,downloads:t,likes:u,comments:S,views:x}){return`<li class="list-container">
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
//# sourceMappingURL=form-b6b69ddc.js.map
