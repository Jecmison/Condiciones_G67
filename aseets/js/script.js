// Ejercicio 1.

let imgAsta = document.querySelector('#asta');

imgAsta.addEventListener('click', () => {
    imgAsta.classList.toggle('border');

})

// Ejercicio 2.


function SumadorSticker() {
    let sticker1 = Number(document.getElementById('noelle').value);
    let sticker2 = Number(document.getElementById('yuno').value);
    let sticker3 = Number(document.getElementById('vanessa').value);
    let total = document.getElementById('pinchar')

    let stickerSum = sticker1 + sticker2 + sticker3;

    if (stickerSum <= 10){
        total.innerHTML = (`Tienes ${stickerSum} stickers`);
    }
    else {
        total.innerHTML = 'Llevas demasiados stickers';
    }
}

// Ejercicio 3.

function tuContraseña() {
    const userOption1 = Number(document.getElementById('caja1').value);
    const userOption2 = Number(document.getElementById('caja2').value);
    const userOption3 = Number(document.getElementById('caja3').value);
    const passwordResult = document.getElementById('verif-passw');
    let alertapassword = 'Password incorrecto';

    if (userOption1 === 9 && userOption2 === 1 && userOption3 === 1) {
        alertapassword = 'Password 1 es correcto';
    } else if (userOption1 === 7 && userOption2 === 1 && userOption3 === 4) {
        alertapassword = 'Password 2 es correcto';
    }
    passwordResult.innerHTML = alertapassword;
}