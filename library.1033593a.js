!function(){var e=document.querySelector(".dark-mode__icon"),t=document.querySelector(".light-mode__icon"),o=document.querySelector(".toggleButton"),l=function(o){o?(e.style.display="none",t.style.display="block",document.body.classList.add("light-theme")):(e.style.display="block",t.style.display="none",document.body.classList.remove("light-theme"))};o.addEventListener("click",(function(){var e=document.body.classList.contains("light-theme");localStorage.setItem("isLightMode",!e),l(!e)}));var c=JSON.parse(localStorage.getItem("isLightMode"));null!==c&&l(c)}();
//# sourceMappingURL=library.1033593a.js.map
