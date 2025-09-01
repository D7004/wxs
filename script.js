document.addEventListener('DOMContentLoaded', function(){
    const accessButt = document.getElementById('accessibility-butt');
    const accessOpt = document.getElementById('accessibility-options');

    accessButt.addEventListener('click', function (){
        accessButt.classList.toggle('rotation-butt');
        accessOpt.classList.toggle('show-list');

        const buttSelect = accessButt.getAttribute('aria-expanded') === 'true';
        accessButt.setAttribute('aria-expanded', !buttSelect)
    })

    const biggerFontButt = document.getElementById('bigger_font');
    const smallerFontButt = document.getElementById('smaller_font');

    const diffContrast = document.getElementById('contrasting');

    let currentSize = 1;

    biggerFontButt.addEventListener('click', function(){
        currentSize += 0.1;
        document.body.style.fontSize = `${currentSize}rem`
    })

    smallerFontButt.addEventListener('click', function(){
        currentSize -= 0.1;
        document.body.style.fontSize = `${currentSize}rem`
    })

    diffContrast.addEventListener('click', function(){
        document.body.classList.toggle('contrasting');
    })
})

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#wxs', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });