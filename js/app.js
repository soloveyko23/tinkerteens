(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function buttonRipple() {
        const ANIMATED_CLASS_NAME = "animated";
        const elements = document.querySelectorAll("[data-ripple]");
        const elementsSpan = [];
        elements.forEach(((element, index) => {
            let addAnimation = false;
            if (element.classList.contains("FLASH")) {
                element.addEventListener("animationend", (() => {
                    element.classList.remove(ANIMATED_CLASS_NAME);
                }));
                addAnimation = true;
            }
            if (!elementsSpan[index]) elementsSpan[index] = element.querySelector(".circle");
            element.addEventListener("mousemove", (e => {
                const buttonRect = element.getBoundingClientRect();
                const offsetX = e.clientX - buttonRect.left;
                const offsetY = e.clientY - buttonRect.top;
                elementsSpan[index].style.left = offsetX + "px";
                elementsSpan[index].style.top = offsetY + "px";
                if (addAnimation) element.classList.add(ANIMATED_CLASS_NAME);
            }));
        }));
    }
    function copyReferral() {
        document.addEventListener("DOMContentLoaded", (function() {
            const button = document.querySelector(".button-copy-link-referral");
            const inputReferral = document.querySelector(".input-referral");
            inputReferral.value = inputReferral.getAttribute("data-value");
            button.addEventListener("click", (function() {
                inputReferral.select();
                document.execCommand("copy");
                window.getSelection().removeAllRanges();
                inputReferral.value = inputReferral.getAttribute("data-after-text");
                setTimeout((() => {
                    inputReferral.value = inputReferral.getAttribute("data-value");
                }), 3e3);
            }));
        }));
    }
    copyReferral();
    buttonRipple();
    window["FLS"] = true;
    isWebp();
})();