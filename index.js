import{a as v,S as w,i as f}from"./assets/vendor-C9cvWQx7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const E="29465833-2a7a79fc7318dfcd77a5c91cc",S="https://pixabay.com/api/",d=15,q=async(t,s=1)=>(await v.get(S,{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:d}})).data,y=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),P=new w(".gallery a",{captionsData:"alt",captionDelay:250}),B=t=>{const s=t.map(({webformatURL:o,largeImageURL:n,tags:e,likes:a,views:r,comments:L,downloads:b})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
          <ul class="gallery-info">
            <li class="gallery-info-item">
              <span class="gallery-info-label">Likes</span>
              <span class="gallery-info-value">${a}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-label">Views</span>
              <span class="gallery-info-value">${r}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-label">Comments</span>
              <span class="gallery-info-value">${L}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-label">Downloads</span>
              <span class="gallery-info-value">${b}</span>
            </li>
          </ul>
        </a>
      </li>`).join("");y.insertAdjacentHTML("beforeend",s),P.refresh()},$=()=>{y.innerHTML=""},M=()=>{m.classList.add("is-visible")},O=()=>{m.classList.remove("is-visible")},T=()=>{g.classList.add("is-visible")},x=()=>{g.classList.remove("is-visible")},c=document.querySelector(".form"),A=document.querySelector(".load-more");let p="",l=1,u=0;const i=t=>f.error({message:t,position:"topRight",messageColor:"#ffffff",backgroundColor:"#ef4040",class:"custom-toast",timeout:4e3}),R=t=>f.info({message:t,position:"topRight",timeout:4e3}),h=async()=>{M(),x();try{const t=await q(p,l);if(t.hits.length===0){i("Sorry, there are no images matching your search query. Please, try again!");return}if(u=t.totalHits,B(t.hits),l*d>=u?R("We're sorry, but you've reached the end of search results."):T(),l>1){const s=document.querySelector(".gallery-item");if(s){const{height:o}=s.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}}catch{i("Something went wrong. Please try again later!")}finally{O()}};c.addEventListener("submit",async t=>{t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();if(!s){i("Please enter a search query!");return}p=s,l=1,$(),await h(),c.reset()});A.addEventListener("click",async()=>{l+=1,await h()});
//# sourceMappingURL=index.js.map
