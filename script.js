//s toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// schroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar Links
            navLinks.forEach(link => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*=' + | +']').classList.add('active');
            });
        }
    });
    //sticky header
    let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);



}
