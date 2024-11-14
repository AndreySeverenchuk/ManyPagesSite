import {$intro, $link} from "./constants.js"

$link.forEach(function(a) {
    a.addEventListener("click", function(event) {
        event.preventDefault()

        let aIndex = a.getAttribute('data-scroll')
        
        if(aIndex === 'contacts') {
            document.getElementById('contacts').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        else {
            let indexId = "intro" + aIndex
            document.getElementById(indexId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
})