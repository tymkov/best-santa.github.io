const sliderWrapper = document.querySelector('.slidesWrapper');
const slidesTrack = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.sliderButton');
let position = 0;
const slidesCount = slides.length;
const slideWidth = sliderWrapper.clientWidth - 20;


const setPosition = () => {
    slidesTrack.style.transform = `translateX(${position}px)`;
};

buttons.forEach(function (button, idx) {
    button.addEventListener('click', () => {
        position = slideWidth * -idx;
        setPosition();
    }) ;
});


/* telephone mask --- begin */
window.addEventListener("DOMContentLoaded", function () {

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }


    function mask(event) {
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };

    let inputs = document.querySelectorAll(".popup__inputPhone, .form__inputPhone");

    inputs.forEach(function (input) {
        input.addEventListener('input', mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
    });


});
    
/* telephone mask --- end */

