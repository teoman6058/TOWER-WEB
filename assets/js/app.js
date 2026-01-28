const header=document.querySelector('.header');
window.addEventListener('scroll',()=>{
  header.classList.toggle('shrink',window.scrollY>60);
});

document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});

const search=document.querySelector('.search');
const results=document.querySelector('.search-results');
search.addEventListener('input',()=>{
  results.classList.toggle('show',search.value.trim().length>0);
});
