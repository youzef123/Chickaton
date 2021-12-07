const shop = document.getElementById('shop')
shop.addEventListener('click', shopOnclick)
function shopOnclick () {
  alert('Order first');
  location.replace("./product.html");
 }

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
