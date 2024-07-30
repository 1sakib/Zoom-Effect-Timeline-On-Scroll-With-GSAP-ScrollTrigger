const { innerHeight } = window;


// zoom-in
gsap.to("#zoom-in h2", {
    scale:25,
    x:500,
    y: 250,
    duration: 1,
    scrollTrigger: ".test",
    
});

