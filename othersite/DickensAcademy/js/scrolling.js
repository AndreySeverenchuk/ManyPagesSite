const $link = document.querySelectorAll('[data-scroll]')

$link.forEach(function(a) {
    a.addEventListener("click", function(event) {
        event.preventDefault()

        let aIndex = a.getAttribute('data-scroll')
        
        if(aIndex === 'courses') {
            document.getElementById('courses').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        else if(aIndex === 'about') {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        else if(aIndex === 'home') {
            document.getElementById('home').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
})