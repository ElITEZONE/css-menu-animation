const navItem = document.querySelectorAll('.nav-item');

navItem.forEach((item) => {
    function navSwitch() {
        item.classList.remove('active')
        this.classList.add('active')
    }
    navItem.forEach((item) => {
        item.addEventListener('click', navSwitch)
    })

})