document.addEventListener('DOMContentLoaded', function(){
    const accessButt = document.getElementById('accessibility-butt');
    const accessOpt = document.getElementById('accessibility-options');

    accessButt.addEventListener('click', function (){
        accessButt.classList.toggle('rotation-butt');
        accessOpt.classList.toggle('show-list');
    })

    const biggerFontButt = document.getElementById('bigger_font');
    const smallerFontButt = document.getElementById('smaller_font');

    let currentSize = 1;

    biggerFontButt.addEventListener('click', function(){
        currentSize += 0.1;
        document.body.style.fontSize = `${currentSize}rem`
    })

    smallerFontButt.addEventListener('click', function(){
        currentSize -= 0.1;
        document.body.style.fontSize = `${currentSize}rem`
    })
})