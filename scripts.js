function openNav() {
    document.querySelector('.navbar-mobile').style.right = '0';
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.navbar-mobile').classList.add('open');
}

function closeNav() {
    document.querySelector('.navbar-mobile').style.right = '-250px';
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.navbar-mobile').classList.remove('open');
}

// Function to close mobile navbar when clicking a link
document.querySelectorAll('.navbar-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        closeNav();
    });
});
