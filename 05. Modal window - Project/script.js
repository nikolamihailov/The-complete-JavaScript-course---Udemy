"use strict";

const showModalBtns = document.querySelectorAll(".show-modal");
const modalWindow = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
};

showModalBtns.forEach(b => b.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        closeModal();
    }
    console.log(e);
});


