/* ======================================
   CHIPON Production Pro 1.5
   Main JavaScript
====================================== */

// ------------------------------
// Loading Screen
// ------------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    },1200);

});


// ------------------------------
// Typing Effect
// ------------------------------

const typingElement = document.getElementById("typing");

const text = "Every Frame Has A Story";

let index = 0;

function typing(){

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,80);

    }

}

typing();


// ------------------------------
// Progress Bar
// ------------------------------

window.addEventListener("scroll",()=>{

    let scrollTop = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight-document.documentElement.clientHeight;

    let percent = (scrollTop/height)*100;

    document.getElementById("progress-bar").style.width = percent + "%";

});


// ------------------------------
// Navbar Change Color
// ------------------------------

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="rgba(0,0,0,.85)";

    }else{

        header.style.background="rgba(0,0,0,.35)";

    }

});


// ------------------------------
// Back To Top
// ------------------------------

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ------------------------------
// Mobile Menu
// ------------------------------

const menuBtn=document.getElementById("menu-btn");

const menu=document.getElementById("menu");

menuBtn.addEventListener("click",()=>{

    menu.classList.toggle("active");

});


// ปิดเมนูเมื่อกดลิงก์

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});


// ------------------------------
// Scroll Reveal
// ------------------------------

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach(item=>{

    observer.observe(item);

});


// ------------------------------
// Card Hover Effect (ปิดไว้ชั่วคราวเพื่อเช็กการคลิก)
// ------------------------------
/*
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mousemove", (e) => { ... });
    card.addEventListener("mouseleave", () => { ... });
});
*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=`radial-gradient(circle at ${x}px ${y}px,#1e90ff33,#111)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#121212";

    });

});


// ------------------------------
// Particles
// ------------------------------

if(typeof particlesJS!=="undefined"){

particlesJS("particles-js",{

particles:{

number:{value:70},

color:{value:"#00bfff"},

shape:{type:"circle"},

opacity:{value:0.4},

size:{value:3},

line_linked:{

enable:true,

distance:150,

color:"#00bfff",

opacity:0.25

},

move:{

enable:true,

speed:2

}

}

});

}


// ------------------------------
// Footer Year
// ------------------------------

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" CHIPON Production";

}
/* ==========================
   Dark / Light Mode
========================== */

const themeBtn=document.getElementById("theme-btn");

let dark=true;

themeBtn.onclick=function(){

if(dark){

document.body.style.background="#eeeeee";

document.body.style.color="#111";

themeBtn.innerHTML="☀";

dark=false;

}else{

document.body.style.background="#050505";

document.body.style.color="white";

themeBtn.innerHTML="🌙";

dark=true;

}

}
function counter(id,target){

let num=0;

let timer=setInterval(()=>{

num++;

document.getElementById(id).innerHTML=num;

if(num>=target){

clearInterval(timer);

}

},20);

}

// ปรับตัวเลขตามผลงานจริงของคุณ
counter("count1", 50); // จำนวน Projects
counter("count2", 20); // จำนวน Clients
counter("count3", 5);  // จำนวน Awards / ผลงานโดดเด่น

// ดึงการ์ด Photography (การ์ดแรก) แล้วสั่งให้เปลี่ยนหน้าไป /gallery เมื่อคลิก
const photoCard = document.querySelector(".cards .card:nth-child(1)");
if (photoCard) {
    photoCard.style.cursor = "pointer"; // เปลี่ยนรูปเมาส์เป็นรูปมือ
    photoCard.addEventListener("click", () => {
        window.location.href = "/gallery";
    });
}