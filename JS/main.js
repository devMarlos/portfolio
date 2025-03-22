window.onload = function() {
    document.querySelector("#home").scrollIntoView({
        behavior: "smooth"
    });
};

/*============================================ DOWNLOAD ==============================================*/ 
function downloadFile() {
    const link = document.createElement("a");
    
    link.href = "docs/marlos_ilan_curriculo_jr.pdf";
    link.download = "docs/marlos_ilan_curriculo_jr.pdf"; 
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
  }


/*============================================ TOGGLE ICON NAVBAR ==============================================*/ 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*============================================ SCROLL SECTION ACTIVE LINK ==============================================*/

let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*============================================ STICKY NAVBAR ==============================================*/

    let header = document.querySelector('header');
    header.classList.toggle('stick', window.scrollY > 100);

    /*============================================ REMOVE TOGGLE ICON AND NAVBAR ==============================================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

/*============================================ SCROLL REVEAL ==============================================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .technologies-container, .portfolio-box, .contact form', {origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'rigth'});

/*============================================ TYPED JS ==============================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor de Software', 'Bacharelando em Ciência da Computação'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: false
});

