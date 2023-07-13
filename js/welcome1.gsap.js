
var welcomeWrapper = document.querySelector('.welcome-wrapper');
document.addEventListener("DOMContentLoaded",()=>{
  if(sessionStorage.getItem('communityScreen')=='true'){
    welcomeWrapper.remove();
  }else{
    sessionStorage.setItem('communityScreen', true);  
        // Wrapper animation
        var tl = gsap.timeline({
          defaults:{
            ease:"Circ.easeInOut"
          }
        });
        tl
        .to("#line1",{
          opacity: 1,
          duration: 0.3,
          y:0,
        })
        .to("#line2",{
            opacity: 1,
            duration: 0.3,
            y:0,
        })
        .to('.welcome-wrapper',{
          //opacity: 0,
          duration: 1,
          delay:1,
          y:"100%",
        })
        .to('.welcome-wrapper',{
          onComplete: function () {
            document.querySelector('.welcome-wrapper').remove();
          }
        })
        .fromTo('nav',{
          opacity:0,
          y:-70,
        },
        { opacity:1,
          y:0,
          duration:0.3,
          delay:0.2,
        }
        )
        .fromTo(".hero-img img",{
          opacity:0,
        },
        { opacity:1,
          duration:0.4,
          delay:-0.2,
        })
        .fromTo('#htext',{
          opacity:0,
          y:50,
        },
        { opacity:1,
          y:0,
          duration:0.3,
          delay:-0.2,
        }
        )
        .fromTo('#highlight',{
          opacity:0,
          y:-50,
        },
        { opacity:1,
          y:0,
          duration:0.3,
          delay:-0.2,
        }
        )
        // .fromTo(["#cimg1","#cimg2","#cimg3","#cimg4","#cimg5","#cimg6"],
        // {opacity:0,scale:1.5},
        // {
        //   opacity: 1,
        //   scale:1,
        //   duration: 0.5,
        //   delay:0,
        //   stagger:0.5,
        // })
  }

})