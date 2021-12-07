
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
   ready()
}

let chickens = document.querySelector("#chickenItems");
let items = document.querySelector("#productItems");
let cartPage = document.querySelector('.cart');
let shopButtons = document.getElementsByClassName('bx-shopping-bag')[0];
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navLeft = menu.getBoundingClientRect().left;
const navBar = document.querySelector(".nav");

navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
      menu.classList.add("show");
      document.body.classList.add("show");
      navBar.classList.add("show");
    }
  });
  
  navClose.addEventListener("click", () => {
    if (navLeft < 0) {
      menu.classList.remove("show");
      document.body.classList.remove("show");
      navBar.classList.remove("show");
    }
  });

function ready (){
    let activities = document.getElementById("activitySelector");
    shopButtons.addEventListener("click", function (){
    })

activities.addEventListener("click", function() {
    let strUser = activities.options[activities.selectedIndex].text;
    let top = document.querySelector(".top");
    chickens = document.querySelector("#chickenItems");
    items = document.querySelector("#productItems");
  
    if(strUser=="Chickens"){
        chickens.hidden=false;
        items.hidden=true;
        top.style.marginBottom = "4rem";
    }else{
        chickens.hidden=true;
        items.hidden=false;
        top.style.marginBottom = "-1rem";
    }
    
});
}


document.body.onload = () =>{
    chickens.hidden=false;
    items.hidden=true;
    cartPage.hidden = true;
}


const ref = [...document.querySelectorAll(".scroll-footer")];
ref.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);

  
    window.scrollTo(0, 10000);
  });
});
