gsap.registerPlugin(ScrollTrigger);
gsap.to(".firstHeadline",{
    x:100,
    duration:2,
    scrub: true,
});
gsap.to(".secondHeadline",{
    x:180,
    duration:2,
    scrub:true,
});
gsap.fromTo(".a",{
    x:-400,

},{
    x:0,
    duration:1.2,
    scrollTrigger:{
        
        trigger: ".ho1 ",
        toggleActions:"play none reverse restart",
        marker: true,
    }
})
gsap.fromTo(".b",{
    x:-400,

},{
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger: ".ho2",
        // scrub:2,
        toggleActions:"play none reverse restart",
        marker: true,
    }
})
gsap.fromTo(".c",{
    x:-400,

},{
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger: ".ho3",
        // scrub:2,
        toggleActions:"play none reverse restart",
        marker: true,
    }
})
gsap.fromTo(".fo",{
    x:-400,

},{
    x:0,
    duration:2,
    scrollTrigger:{
        trigger: ".fo",
        star:"end 50%",
        marker: true,
    }
})
