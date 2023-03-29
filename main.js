 let divPopup = document.querySelector('nav .menu')
 let divTrigger = document.querySelector('.m-trigger')

 divTrigger.addEventListener('click', () =>{
setTimeout(() => {
   if(!divPopup.classList .contains('show')){
    divPopup.classList.add('show')
    document.body.classList.add('menu-visible')
   }
}, 250);
 })

//    ========================menu=====================================

document.addEventListener('click', (e) => {
    let closes = e.target.closest('nav .menu')

    if(!closes && divPopup.classList.contains('show')){
        divPopup.classList.remove('show')
        document.body.classList.remove('menu-visible')
    }
} )


// ================== Search=======================

let Triger = document.querySelector('.s-trigger')
let addClass = document.querySelector('.site')


Triger.addEventListener('click', () => {
    addClass.classList.toggle('showsearch')
}) 

// ================sqroll======================

const sliderThumb = new Swiper('.thumb_nav', {
    spaceBetwen:10,
    slidesPerView:3,
    slidesPerGroup:false,
    breakpoints: {

        992: {
            direction:'vertical'
        }
    }

  });
const theSlider = new Swiper('.thumb_big', {
    slidePerView:1,
    pagination: {
        el: '.swiper-pagination',
      },
      thumbs: {
        swiper: sliderThumb,
      }

  });

//   =================================Tabbe
const tabbeNav = new Swiper('.tnava', {
    spaceBetwen:20,
    slidesPerView:6,
    senteredSlides: true,
    slidesPerGroup:false,

  });
const theTab = new Swiper('.tabbed-item', {
    loop:true,
    slidePerView:1,
    autoHeight:true,
      thumbs: {
        swiper: tabbeNav,
      }

  });


// ==============  scroll=============
