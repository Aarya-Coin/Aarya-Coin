document.addEventListener('DOMContentLoaded', () => {
  // Wrapper animation
  anime.timeline({
    easing: "linear",
  })
  .add({
    targets: ".welcome-wrapper",
    delay: 2000,
    opacity: 0,
    translateY:["0%", "100%"],
    duration: 100,
    easing: "linear"
  })
  .add({
    targets: ".welcome-wrapper",
    complete: function (anime) {
       document.querySelector('.welcome-wrapper').remove();
    }
  });

  // Text animation
  anime.timeline({
    easing: "easeInOutCirc",
  })
  .add({
    targets: ".cheading #line1",
    translateY: ["80%", "0%"],
    opacity: [0, 1],
    delay: 0,
    duration: 300,
  })
  .add({
    targets: ".cheading #line2",
    translateY: ["80%", "0%"],
    opacity: [0, 1],
    delay: 0,
    duration: 300,
  })
  .add({
    complete: function(anime){
 anime.timeline({
    easing: "easeInOutCirc",
  })
  .add({
    targets: ".charity-grid #cimg1",
    translateY: ["80%", "0%"],
    opacity: [0, 1],
    delay: 200,
    duration: 200,
  })
  .add({
    targets: ".charity-grid #cimg2",
    translateY: ["80%", "0%"],
    opacity: [0, 1],
    delay: 200,
    duration: 200,
  })
  .add({
    targets: ".charity-grid #cimg3",
    translateY: ["80%", "0%"],
    opacity: [0, 1],
    delay: 200,
    duration: 200,
  })
  .add({
    targets: ".charity-grid #cimg4",
    translateY: ["80%", "0%"],
    opacity: [0, 1],
    delay: 200,
    duration: 200,
  })
  .add({
    targets: ".charity-grid #cimg5",
    translateY: ["80%", "0%"],
    opacity: [0, 1],
    delay: 200,
    duration: 200,
  })
  .add({
    targets: ".charity-grid #cimg6",
    translateY: ["80%", "0%"],
    opacity: [0, 1],
    delay: 200,
    duration: 200,
  })
    }
  })

  //hero animation
 
});