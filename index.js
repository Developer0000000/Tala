(function () {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
})()






var menu = document.querySelector("nav .ri-menu-3-fill");
var fullMenu = document.querySelector(".full_scr_nav_menu");
var navH2 = document.querySelector("nav h2");
var navH3 = document.querySelector("nav h3");
var navI = document.querySelector("nav i");

menu.addEventListener("click", () => {
    fullMenu.classList.toggle("opacity-100");
    fullMenu.classList.toggle("full_scr_nav_menu__top");
    navH2.classList.toggle('text_color');
    navH3.classList.toggle('text_color');
    navI.classList.toggle('text_color');
});


//* page 1 heading
gsap.from('.page1 h1 span', {
    opacity: 0,
    duration: 0.7,
    stagger: .3,
})

var tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl
    .from("nav", {
        y: -150,
        opacity: 0,
        duration: 0.6,
    })
    .from(".page1 h1", {
        y: 150,
        opacity: 0,
    })
    .from(".page1 h2", {
        y: 70,
        opacity: 0,
        duration: 0.6,
    })
    .from(".page1 h3", {
        y: 60,
        opacity: 0,
        duration: 0.5,
        delay: -0.4
    })
    .to(".page2 img", {
        opacity: 1,
        duration: 0.6,
        scale: 0.98,
        scrollTrigger: {
            trigger: ".page2 img",
            scroller: "main",
            // markers: true,
            start: "top 80%",
            end: "top 2%",
            scrub: 4
        }
    })


// gsap.from(".page2 .pag2_heading h1", {
//     opacity: 0,
//     duration: 0.3,
//     stagger: 0.3,
//     y: 50,
// scrollTrigger: {
//     trigger: ".page2 .pag2_heading h1",
//     scroller: "main",
//     markers: true,
//     start: "top 94%",
//     end: "top 20%",
//     scrub: 2
// }
// })


//* page 2 text

gsap.from(".page2 .pag2_heading h1", {
    y: 50,
    scale: 1.13,
    opacity: 0,
    rotateX: '-90deg',
    // stagger: 0.3,
    scrollTrigger: {
        trigger: ".page2 .pag2_heading h1",
        scroller: "main",
        // markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    }
});


//* page 3


gsap.to('.page3 .line', {
    width: '100%',
    scrollTrigger: {
        trigger: '.page3 .line',
        scroller: "main",
        // markers: true,
        start: "top 80%",
        end: "top 40%",
        scrub: 3
    }
})



let fruits = [
    { id: "#mango", box: ".mango_box" },
    { id: "#banana", box: ".banana_box" },
    { id: "#pineapple", box: ".pineapple_box" },
    { id: "#pithaya", box: ".pithaya_box" }
];

const setupFruitBox = (fruit) => {
    let card = document.querySelector(fruit.id);
    let boxLeft = document.querySelector(`${fruit.box} .fruit_box_left`);
    let boxH1 = document.querySelector(`${fruit.box} h1`);

    boxH1.addEventListener('mouseenter', () => {
        card.style.opacity = 1;
        card.style.transform = `translate(-50%, -25%) rotate(20deg)`;
        card.style.left = `40%`;
    });

    boxLeft.addEventListener('mousemove', (e) => {
        card.style.left = `${e.x}px`;
    });

    boxLeft.addEventListener('mouseleave', () => {
        card.style.opacity = 0;
        card.style.transform = `translate(0%,-25%) rotate(0deg)`;
        card.style.left = `20%`;
    });
};

fruits.forEach(setupFruitBox);




// document.querySelector(".fruit_box .fruit_box_left h1").addEventListener('mousemove', (e) => {
//     document.querySelector(".fruits_card").style.opacity = 1;
//     document.querySelector(".fruits_card").style.left = `${e.x - 50}px`;
//     console.log("enter")
// });

// document.querySelector(".fruit_box .fruit_box_left h1").addEventListener('mouseleave', () => {
//     document.querySelector(".fruits_card").style.opacity = 0;
//     console.log("leave")
// });




//* page4 big text

const page4Tl = gsap.timeline({ ease: "power4.out" })

let page4Heading1 = document.querySelector('.heading_1');
let page4Heading2 = document.querySelector('.heading_2');
let page4Heading3 = document.querySelector('.heading_3');

const str1 = 'I FINISHED THE'
const str2 = 'BOX & REGRET';
const str3 = 'NOTHING.';
function splitting(str, page4Heading) {
    let wordSplit = str.split('');
    wordSplit.forEach((item) => {
        page4Heading.innerHTML += `<span>${item}</span>`
    })
}
splitting(str1, page4Heading1);
splitting(str2, page4Heading2);
splitting(str3, page4Heading3);



gsap.from('.page4 article h1', {
    opacity: 0,
    x: -400,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.page4 article h1',
        scroller: "main",
        // markers: true,
        start: 'top 30%',
    }
});

page4Tl
    .from('.page4 article h1 span', {
        opacity: 0,
        duration: 0.75,
        stagger: 0.23
    })
    .to('.page4 .line', {
        width: '100%',
        scrollTrigger: {
            trigger: '.page4 .page5_article_2',
            scroller: "main",
            // markers: true,
            start: "top 80%",
            end: "top 40%",
            scrub: 3
        }
    })
    .to('.page4 .line2', {
        width: '100%',
        scrollTrigger: {
            trigger: '.page4 .page5_article_2',
            scroller: "main",
            // markers: true,
            start: "top 80%",
            end: "top 40%",
            scrub: 3
        }
    })





//* page6, animate for word [ONE] 

let slide1h1 = document.querySelectorAll(".page6 .slide1_h1_one");
slide1h1.forEach((item) => {
    gsap.to(item, {
        transform: "translateX(-100%)",
        duration: 4,
        ease: 'linear',
        scrollTrigger: {
            trigger: '.page6',
            scroller: "main",
            // markers: true,
            scrub: 3
        },
    })
});

let slide2h1 = document.querySelectorAll(".page6 .slide2_h1_one");
slide2h1.forEach((item) => {
    gsap.to(item, {
        transform: "translateX(0%)",
        duration: 4,
        ease: 'linear',
        scrollTrigger: {
            trigger: '.page6',
            scroller: "main",
            // markers: true,
            scrub: 3
        },
    })
});





//* page7, animate images on box 

document.querySelector(".elem_yes").addEventListener('mousemove', (e) => {
    document.querySelector(".elem_yes img").style.opacity = 1;
    document.querySelector(".elem_yes img").style.top = `${e.y - 150}px`;
    document.querySelector(".elem_yes img").style.left = `${e.x}px`;
});

document.querySelector(".elem_yes").addEventListener('mouseleave', () => {
    document.querySelector(".elem_yes img").style.opacity = 0;
});

document.querySelector(".elem_no").addEventListener('mousemove', (e) => {
    document.querySelector(".elem_no img").style.opacity = 1;
    document.querySelector(".elem_no img").style.top = `${e.y - 150}px`;
    document.querySelector(".elem_no img").style.left = `${e.x}px`;
});

document.querySelector(".elem_no").addEventListener('mouseleave', () => {
    document.querySelector(".elem_no img").style.opacity = 0;
});
