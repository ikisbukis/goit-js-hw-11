import{S as p,i as c}from"./assets/vendor-Dg3uDB0e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="56842497-86210550798b8b78fed208621";function h(s){const r=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error("Search error");return t.json()})}const l=document.querySelector(".gallery"),m=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d=document.querySelector(".loader");function f(s){const r=s.map(t=>`
        <li class="list-item">
                <a class="gallery-img" href=${t.largeImageURL}>
                    <img src=${t.webformatURL} alt="${t.tags}"></img>
                </a>
                <div class="info">
                    <div class="info-element" style="margin-right:28px;width=34px;height=40px">
                        <p class="tags-container-text">Likes</p>
                        <p class="tags-container-value">${t.likes}</p>
                    </div>
                    <div class="info-element" style="margin-right:28px;width=48px;height=40px">
                        <p class="tags-container-text">Views</p>
                        <p class="tags-container-value">${t.views}</p>
                    </div>
                    <div class="info-element" style="margin-right:32px;width=72px;height=40px">
                        <p class="tags-container-text">Comments</p>
                        <p class="tags-container-value">${t.comments}</p>
                    </div>
                    <div class="info-element" style="width=74px;height=40px">
                        <p class="tags-container-text">Downloads</p>
                        <p class="tags-container-value">${t.downloads}</p>
                    </div>
                </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),m.refresh()}function g(){l.innerHTML=""}function y(){d.classList.remove("hidden")}function v(){d.classList.add("hidden")}const w=document.querySelector(".form"),x=document.querySelector('input[name="search-text"]');let n;x.addEventListener("input",s=>{n=s.target.value});w.addEventListener("submit",s=>{s.preventDefault(),n.trim()&&(g(),y(),h(n).then(r=>{if(r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",iconColor:"white",position:"topRight",color:"red",class:"my-custom-toast"});return}f(r.hits)}).catch(r=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",iconColor:"white",position:"topRight",color:"red",class:"my-custom-toast"})}).finally(()=>v()))});
//# sourceMappingURL=index.js.map
