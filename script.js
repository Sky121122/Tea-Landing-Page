   var tl = gsap.timeline({scrollTrigger:{
        trigger:"#secondframe",
        start:"50% 50%",
        end:"100% 50%",
        scrub:1.3,
        pin:true,

    }
})
tl.to("#top",{
    top:"-50%",
    delay:0.5,
    duration:1.3,
},"a")
tl.to("#bottom",{
    bottom:"-50%",
    duration:1.3,
    delay:0.5,
},"a");
// ---------- gsap for cards ------------- 
tl.from(".alldata .card",{
    top:"100%",
    duration:1.3,
    delay:1,
},"a");

tl.from(".img img",{
    scale:"0",
    duration:2,
    delay:2
},"a")



document.addEventListener("DOMContentLoaded",(event)=>{

// --------- gsap for landing page ---------- 
gsap.from("nav",{
    width:"0%",
    duration:1.5,
    delay:0.5,
})

gsap.from("nav .logo",{
    opacity:0,
    duration:1.5,
    delay:0.8,
})
gsap.from("nav .links",{
    opacity:0,
    duration:1.5,
    delay:0.8,
})
// --------- gsap for tea ------------------- 
gsap.from(".image img",{
     marginTop:"-100%",
    duration:2,
    delay:0.3
})

// --------- gsap for leafs -----------
gsap.from(".container .leaf1",{
    top:"-100%",
    rotate:"-90deg",
    duration:2,
    delay:0.5
})
gsap.from(".container .leaf2",{
    top:"100%",
    left:"60%",
    rotate:"-90deg",
    duration:2,
    delay:0.5
})
gsap.from(".container .leaf3",{
    top:"-50%",
    rotate:"-90deg",
    duration:2,
    delay:2
})
gsap.from(".slogan",{
     top:"100%",
    duration:2,
    delay:2
})



})