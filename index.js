import{a as p,S as u,i as c}from"./assets/vendor-DPQ7gP2y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="56842497-86210550798b8b78fed208621";function h(s){const t=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return p.get(`https://pixabay.com/api/?${t}`).then(r=>r.data)}const l=document.querySelector(".gallery"),g=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d=document.querySelector(".loader");function f(s){const t=s.map(r=>`
        <li class="list-item">
                <a class="gallery-img" href=${r.largeImageURL}>
                    <img src=${r.webformatURL} alt="${r.tags}"></img>
                </a>
                <div class="info">
                    <div class="info-element" style="margin-right:28px;width=34px;height=40px">
                        <p class="tags-container-text">Likes</p>
                        <p class="tags-container-value">${r.likes}</p>
                    </div>
                    <div class="info-element" style="margin-right:28px;width=48px;height=40px">
                        <p class="tags-container-text">Views</p>
                        <p class="tags-container-value">${r.views}</p>
                    </div>
                    <div class="info-element" style="margin-right:32px;width=72px;height=40px">
                        <p class="tags-container-text">Comments</p>
                        <p class="tags-container-value">${r.comments}</p>
                    </div>
                    <div class="info-element" style="width=74px;height=40px">
                        <p class="tags-container-text">Downloads</p>
                        <p class="tags-container-value">${r.downloads}</p>
                    </div>
                </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",t),g.refresh()}function y(){l.innerHTML=""}function v(){d.classList.remove("hidden")}function x(){d.classList.add("hidden")}const L=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');let i;w.addEventListener("input",s=>{i=s.target.value});L.addEventListener("submit",s=>{s.preventDefault(),!(!i||!i.trim())&&(y(),v(),h(i).then(t=>{if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",iconColor:"white",position:"topRight",color:"red",class:"my-custom-toast"});return}f(t.hits)}).catch(t=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",iconColor:"white",position:"topRight",color:"red",class:"my-custom-toast"})}).finally(()=>x()))});
//# sourceMappingURL=index.js.map
