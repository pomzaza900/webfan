// Tiny sfx (optional): use your own file in assets/yes.mp3
const sfx = new Audio('assets/yes.mp3');

function go(url){
  try{ sfx.currentTime = 0; sfx.play().catch(()=>{});}catch(e){}
  location.href = url;
}

// Sprinkle floating hearts
function hearts(el){
  const box = el || document.body;
  let i=0;
  setInterval(()=>{
    const h = document.createElement('span');
    h.className='hfloat';
    const x = Math.random()*100;
    const s = 0.7 + Math.random()*0.9;
    h.style.left = x+'%';
    h.style.setProperty('--s', s);
    h.textContent = '❤';
    box.appendChild(h);
    setTimeout(()=>h.remove(), 5000);
    if(++i>30) i=0;
  }, 600);
}

document.addEventListener('DOMContentLoaded', ()=>{
  // add minimal CSS for hearts
  const style = document.createElement('style');
  style.textContent = `
    .hfloat{
      position:fixed; bottom:-10px; font-size: calc(14px * var(--s));
      color:#ff7fb3; opacity:.8; animation: rise 5s ease-in forwards;
      filter: drop-shadow(0 2px 6px rgba(255,111,169,.3));
    }
    @keyframes rise{
      0%{ transform:translate(-50%, 0) scale(var(--s)); }
      100%{ transform:translate(-50%, -100vh) scale(calc(var(--s)*1.4)); opacity:0; }
    }
  `;
  document.head.appendChild(style);
  hearts();
});
