// Initiates the parralax
document.body.onload = castParallax();



// Play audio when start shopping cliked
musicPlay = () => {
  audio.play()
}

// Confetti Hero
const play = document.querySelector('button');
const audio = document.getElementById('music')
const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
});

play.addEventListener('click', () => {
    svgContainer.classList.remove('hide');
    animItem.goToAndPlay(0,true);

})

animItem.addEventListener('complete', () => {
    svgContainer.classList.add('hide');
    
})


// Parallax of Hero
function castParallax() {
    let above = this.scrollY;
    let layers = document.getElementsByClassName("parallax");
    let layer, speed;
  
  
    for (let increment = 0; increment < layers.length; increment++) {
      layer = layers[increment];
      speed = layer.getAttribute('data-speed');
      let yPos = -(above * speed / 100);
      layer.setAttribute('style', 'transform: translate3d(60px, ' + (yPos-50) + 'px, 10px)');
      
    }
    window.addEventListener("scroll", function(event){
      let top = this.scrollY;
      let layers = document.getElementsByClassName("parallax");
      let layer, speed;
      const [red, green, blue] = [254, 245, 237]
      const y = 1 + (window.scrollY || window.pageYOffset) / 40
      const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
      document.getElementById("home").style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        for (let i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        let yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(60px, ' + (yPos-50) + 'px, 10px)');
      }
    });
  
  }
  
 // The Scrolling effect
gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray('.section')
sections.forEach(function (sec, i) {  
  const y = sec.offsetTop - 100

  gsap.fromTo(sec, {
    y: 200,
    opacity: 0,
    scale: 0.9,
  }, {
    y: 0,
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: sec,
      scrub: 1,
      start: 'top bottom',
      end: '+=200'
    }
  })
 
  // match the footer and set the y to 10
}) 

// Outer Space Particles BG
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });