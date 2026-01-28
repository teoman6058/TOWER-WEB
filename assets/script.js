window.addEventListener("scroll",()=>{
  const h=document.querySelector(".header");
  h.style.padding=window.scrollY>60?"8px 32px":"18px 32px";
});
