const e=document.querySelector(".dark-mode__icon"),t=document.querySelector(".light-mode__icon"),o=document.querySelector(".toggleButton"),l=o=>{o?(e.style.display="none",t.style.display="block",document.body.classList.add("light-theme")):(e.style.display="block",t.style.display="none",document.body.classList.remove("light-theme"))};o.addEventListener("click",(()=>{const e=document.body.classList.contains("light-theme");localStorage.setItem("isLightMode",!e),l(!e)}));const s=JSON.parse(localStorage.getItem("isLightMode"));null!==s&&l(s);
//# sourceMappingURL=library.834488c4.js.map
