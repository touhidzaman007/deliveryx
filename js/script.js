let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero-image',
        start: 'right center',
        end: 'left center',
        scrub: true,
        markers: true,
        pin:true,
        pinSpacing: false
    }
})
tl.to('.hero-image', {
    duration: .5,
    opacity: 1,
    x: 0,
    scale: 1,
    ease: Power4.easeOut
})


// Section Container

// let sc = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.hero-image',
//         start: 'right center',
//         end: 'left center',
//         scrub: false,
//         markers: true,
//         pin:true,
//         pinSpacing: false,
//         toggleActions: 'play pause reverse complete',
//     }
// })

// sc.to('.image-one', {
//     x: -20,
//     duration: .5,
// })

// Smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
