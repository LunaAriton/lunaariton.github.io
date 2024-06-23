function changeMenuColor() {
    var menuIcon = document.querySelector('.menu-icon');
    var navBar = document.querySelector('nav');

    if (window.innerWidth <= 768) {
        menuIcon.style.color = 'rgba(44, 62, 80, 0.8)';
        navBar.style.backgroundColor = 'transparent';
    } else {
        menuIcon.style.color = '#2c3e50';
        navBar.style.backgroundColor = 'rgba(44, 62, 80, 0.8)';
    }
}

function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");

    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');

    if (menuIcon.classList.contains('active')) {
        menuIcon.style.color = 'lightpink';
    } else {
        menuIcon.style.color = '';
    }
}
function moveImage(event) {
    const hoverImage = document.getElementById('hover-image');
    hoverImage.style.left = `${event.clientX}px`;
    hoverImage.style.top = `${event.clientY}px`;
}

document.getElementById('contact').addEventListener('mousemove', moveImage);

window.addEventListener('resize', changeMenuColor);
changeMenuColor(); // Initial call to set color on page load
document.body.addEventListener('click', function (event) {
    if (!event.target.closest('.nav-links') && !event.target.closest('.menu-icon')) {
        document.getElementById('nav-links').classList.remove('active');
        document.querySelector('.menu-icon').classList.remove('active');
        document.querySelector('.menu-icon').style.color = '';
    }
});
