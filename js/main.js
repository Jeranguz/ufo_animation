document.addEventListener('DOMContentLoaded', (event) =>{
    console.log('DOMContentLoaded');

    gsap.to(".ufo-container", {duration: 5, top: 1});
    gsap.to(".ufo-container", {duration: 5, top: '5rem', delay: 5});
    gsap.to(".astronaut-img", {duration: 5, top: '9rem', delay: 10})
    gsap.to(".astronaut-img", {duration: 2, top: '9rem', transform: 'rotate(25deg)', delay: 15 });
    gsap.to(".astronaut-img", {duration: 2, top: '9rem', transform: 'rotate(-25deg)', delay: 17 });
    gsap.to(".astronaut-img", {duration: 2, top: '9rem', transform: 'rotate(25deg)', delay: 19 });
    gsap.to(".astronaut-img", {duration: 2, top: '9rem', transform: 'rotate(-25deg)', delay: 21 });
    gsap.to(".astronaut-img", {duration: 1, top: '9rem',transform: 'rotate(0deg)', delay: 23})
    gsap.to(".astronaut-img", {duration: 5, top: '-4rem', delay: 24})
    gsap.to(".ufo-container",{
        duration:10,
        motionPath:{
            path:[
                {left: '2rem', top: '6rem', scale: .2},
                {left: '140rem', top: '1rem', scale: 3}
            ]
        },
        delay: 28
    })
});

