const btn = document.querySelectorAll(".accordion-item");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}



