var welcomeWrapper = document.querySelector('.welcome-wrapper');

document.addEventListener('DOMContentLoaded', () => {
 if(sessionStorage.getItem('welcomeScreen')=='true'){
   welcomeWrapper.remove();
 }else{
        sessionStorage.setItem('welcomeScreen', true);
        // Wrapper animation
        anime.timeline({
          targets: ".welcome-wrapper",
          easing: "easeOutExpo",
        })
        .add({
          delay: 5000,
          opacity: 0,
          duration: 1000,
        })
        .add({
          targets: ".welcome-wrapper",
          complete: function (anime) {
           // welcomeWrapper.remove();
          }
        });
      
        // Welcome class animation
        anime({
          targets: ".welcome",
          easing: 'easeInOutCubic',
          duration: 1300,
          opacity:1,
          //   clipPath: ["circle(0%)", "circle(100%)"],
        });
        // Loader animation
        anime({
          targets: ".loader",
          delay: 2000,
          duration: 3000,
          width: ["0", "100%"],
          easing: "easeOutExpo",
        });

       // Loader-wrapper animation
        anime({
          targets: ".loader-wrapper",
          delay: 0,
          duration: 1000,
          opacity: 1,
          easing: "easeOutExpo",
        });
               // Loader-wrapper animation
               anime({
                targets: ".nav",
                easing: "easeOutExpo",
              });


  }

  });  