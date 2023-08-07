console.log('test');

let loader = document.getElementById("preloader");

window.addEventListener("load" , function(){
  loader.style.display = "none"
})

// scrollHeader



const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 0 ? header.classList.add('sticky')
    : header.classList.remove('sticky');

}
window.addEventListener('scroll', scrollHeader);



//heroSlider
const swiper = new Swiper('.hero-slider', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,

  breakpoints: {
    0: {

    },
    480: {
      slidesPerView: 1,
      spaceBetween: 3,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1320: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ' .next',
    prevEl: '.prev',
  },
});


//about

let accordion = document.getElementsByClassName('content-container');


for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}




var swiper2 = new Swiper(".slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    0: {

    },
    480: {
      slidesPerView: 1,
      spaceBetween: 3,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


//photos 

let heddin = document.querySelector('.second-part');
let show = document.getElementById('show');

show.addEventListener('click', function () {
  if (heddin.classList.contains('en')) {
    if (heddin.classList.contains('heddin')) {
      heddin.classList.remove('heddin');
      heddin.classList.add('showing');
      this.innerHTML = `Show Less <i class="fa-solid fa-angle-up"></i>`;

    }

    else if (heddin.classList.contains('showing')) {
      heddin.classList.add('heddin');
      heddin.classList.remove('showing');
      this.innerHTML = `Show More <i class="fa-solid fa-angle-down"></i>`;

    }

  }

  else if (heddin.classList.contains('ar')) {
    if (heddin.classList.contains('heddin')) {
      heddin.classList.remove('heddin');
      heddin.classList.add('showing');
      this.innerHTML = `عرض أقل <i class="fa-solid fa-angle-up"></i>`;

    }

    else if (heddin.classList.contains('showing')) {
      heddin.classList.add('heddin');
      heddin.classList.remove('showing');
      this.innerHTML = `عرض المزيد <i class="fa-solid fa-angle-down"></i>`;

    }
  }


});





// photos for mobile 





// header
let list = document.getElementById("list");
let asid = document.getElementById("asid");
let overlay = document.getElementById("overlay");
let closeSide = document.getElementById("closeSide");



// if we resize window asid & overlay will changing 

function handleWindowResize() {
  const mediaQuerymin = window.matchMedia('(min-width: 991px)');
  const mediaQuerymax = window.matchMedia('(max-width: 991px)');

  if (mediaQuerymin.matches) {
    overlay.style.display = 'none';
  }
  else if (mediaQuerymax.matches){
    if(asid.style.left="0"){
      overlay.style.display = 'block';
    }
    else
    overlay.style.display = 'none';
  }
  else
  overlay.style.display = 'none';
    
}

window.addEventListener('resize', handleWindowResize);



if (asid.style.display == "none") {
  overlay.style.display = 'none';
}


list.onclick = function () {
  asid.style.left = "0"
    overlay.style.display = 'block';

}


closeSide.onclick = function () {
  asid.style.left = "-250px";
  overlay.style.display = 'none';


}

overlay.onclick = function () {
  asid.style.left = "-250px";
  overlay.style.display = 'none';


}







// form


function validtion() {
  var form = document.getElementById('paymentForm');
  var numCrad = document.getElementById('numCrad').value;
  var cardError = document.getElementById('errorr');


  if (numCrad.length === 0 && numCrad.length <=9) {
    cardError.innerHTML = 'Please  should be 10 should be correct card';
    cardError.style.cssText = "font-size: 14px; color:red;"

  }

  else if (numCrad.length >= 10) {
    cardError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    cardError.style.cssText = "color:seagreen; "
  }

  else if (numCrad.length <10) {
    cardError.innerHTML = 'Please  should be 10 should be correct card';
    cardError.style.cssText = "font-size: 14px; color:red;"

  }

  else {
    form.classList.add("valid")
    form.classList.remove("invalid")
  }



}

function validtioni() {
  var form = document.getElementById('paymentForm');
  var currency = document.getElementById('currency-vid').value;

  var donation = document.getElementById('donation-error');
  

}

let mobile = document.querySelectorAll('.mobile-link');

mobile.forEach(function (ele) {
  ele.onclick = function () {
    mobile.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add('active');


  };
});





document.getElementById('button1').addEventListener('click', function() {
  window.location.href = 'form.html?option=option1';
});

document.getElementById('button2').addEventListener('click', function() {
  window.location.href = 'form.html?option=option2';
});

document.getElementById('button3').addEventListener('click', function() {
  window.location.href = 'form.html?option=option3';
});

document.getElementById('button4').addEventListener('click', function() {
  window.location.href = 'form.html?option=option4';
});

document.getElementById('button5').addEventListener('click', function() {
  window.location.href = 'form.html?option=option5';
});

document.getElementById('button6').addEventListener('click', function() {
  window.location.href = 'form.html?option=option6';
});

document.getElementById('button7').addEventListener('click', function() {
  window.location.href = 'form.html?option=option7';
});



