window.addEventListener("scroll",()=>{
  const h=document.querySelector(".header");
  window.scrollY>40 ? h.classList.add("shrink") : h.classList.remove("shrink");
});
