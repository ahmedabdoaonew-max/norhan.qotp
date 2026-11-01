/* ===== متغيرات التواصل (عدّليها من هنا فقط) ===== */
const WHATSAPP="201150860609", PHONE="+201150860609";
const TIKTOK="https://www.tiktok.com/@norhan.qotp?_r=1&_t=ZS-9B2jwHKx2Wa";
const FACEBOOK="https://www.facebook.com/share/1kDtGqg6NU/";
const MSG="السلام عليكم أستاذة نورهان، عايزة أستفسر عن جلسة تقييم لطفلي.";
const wa="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(MSG);
document.querySelectorAll("[data-wa]").forEach(e=>e.href=wa);
document.querySelectorAll("[data-ph]").forEach(e=>e.href="tel:"+PHONE);
document.querySelectorAll("[data-tt]").forEach(e=>e.href=TIKTOK);
document.querySelectorAll("[data-fb]").forEach(e=>e.href=FACEBOOK);
/* قائمة الموبايل + إغلاق البنر العلوي */
const links=document.getElementById("links");
document.getElementById("burger").onclick=()=>links.classList.toggle("open");
links.onclick=()=>links.classList.remove("open");
document.getElementById("closeStrip").onclick=e=>e.target.parentElement.remove();
/* ظهور الأقسام عند التمرير */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));

/* شريط التقدم + ظل القائمة */
const bar=document.createElement("div");bar.className="progress";document.body.prepend(bar);
const nav=document.querySelector("nav.top");
addEventListener("scroll",()=>{const m=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(m>0?scrollY/m:0)+")";nav&&nav.classList.toggle("scrolled",scrollY>10)},{passive:true});
/* حركة خفيفة للفقاعات مع الماوس + ميل الكروت (للأجهزة بماوس فقط) */
if(matchMedia("(pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
  const hero=document.querySelector(".hero");
  hero&&hero.addEventListener("mousemove",e=>{const x=(e.clientX/innerWidth-.5)*22,y=(e.clientY/innerHeight-.5)*22;hero.querySelectorAll(".bubble").forEach((b,i)=>b.style.translate=(x*(i%3+1)*.6)+"px "+(y*(i%3+1)*.6)+"px")});
  document.querySelectorAll(".card").forEach(c=>{c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(700px) rotateY("+(-x*8)+"deg) rotateX("+(y*8)+"deg) translateY(-4px)"});c.addEventListener("mouseleave",()=>c.style.transform="")});
}
