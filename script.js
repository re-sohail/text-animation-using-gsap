gsap.from('.first h1',{
  opacity: 0,
  y: 40,
  duration: 0.5,
  delay: .5,
  stagger: 0.2,
})

gsap.from('.second h1',{
  opacity: 0,
  y: 40,
  duration: 0.5,
  delay: .5,
  stagger: 0.2,
  scrollTrigger: {
      trigger: ".second",
      scroller: "body",
      start: "top 30%",
      end: "top -20%",
      scrub: 0.2,
      markers: true
  }
})

gsap.from('.third h1',{
  opacity: 0,
  y: 40,
  duration: 0.5,
  delay: .5,
  stagger: 0.2,
  scrollTrigger: {
      trigger: ".third",
      scroller: "body",
      start: "top 30%",
      end: "top -20%",
      scrub: 0.2,
      markers: true
  }
})

gsap.from('.fourth h1',{
  opacity: 0,
  y: 40,
  duration: 0.5,
  delay: .5,
  stagger: 0.2,
  scrollTrigger: {
      trigger: ".fourth",
      scroller: "body",
      start: "top 30%",
      end: "top -20%",
      scrub: 0.2,
      markers: true
  }
})

gsap.from('.Fifth h1',{
  y: 40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
      trigger: ".Fifth",
      scroller: "body",
      start: "top 30%",
      end: "top -20%",
      scrub: 0.2,
      markers: true
  }
})




