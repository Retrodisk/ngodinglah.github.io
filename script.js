let appear = document.querySelector(".lesson .lcolumn");

window.addEventListener('scroll', function() {
    let nilai = window.scrollY;

    if ( nilai = 10 ) {
        appear.classList.add("appear");
    }
});