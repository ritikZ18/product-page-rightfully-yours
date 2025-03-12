
// smooth scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        document.querySelector(this.getAttributed('href')).scrollIntoView({
            behavior:'smooth'
        })
    })
})

