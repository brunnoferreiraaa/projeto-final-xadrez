const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel() {
	idx++;

	if (idx > img.length - 1) {
		idx = 0;
	}

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrosel, 1800);

class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.hadleClick = this.hadleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards $ {index / 7 + 0.3}s`);
        });
    }

    hadleClick(){
        this.navList.classList.toogle(this.activeClass);
        this.mobileMenu.classList.toogle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.hadleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileMenu = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
MobileNavbar.init();