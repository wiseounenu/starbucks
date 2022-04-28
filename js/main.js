
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 우리가 보고있는 화면자체다
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    gsap.to(badgeEl, .6, {
          // gsap.to(요소, 지속시간 , 옵션);
    //500보다 커지면 배지를 숨겨준다
      opacity: 0,
      display: 'none'
    });
    //버튼보이기
    gsap.to('#to-top', .2, {
      x: 0
    });

  }else{
    //배지보여주기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)



// 할당할것을 찾는다
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){ //반복적으로 실행될때
  gsap.to(fadeEl, 1, {
    // 딜레이시간
    // index 는 0 부터 시작 + 1을 붙히는건 0*0.7=0이기에 1을 붙힌다
    delay:(index + 1) * .7, // 0.7 / 1.4 초마다 등장
    opacity: 1
  });
});

// 공지사항 슬라이드
// new Swiper(선택자 , 옵션)
new Swiper('.notice-line .swiper-container',{
direction: 'vertical',
autoplay: true,
loop:true
});

new Swiper('.promotion .swiper-container',{
  slidesPerView: 3, //한번에 3개를 보여주겠다
  spaceBetween:10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이가 가운데로 보이게
  loop:true,
  // autoplay:{
  //   delay: 5000
  // }
  pagination:{
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween:30,
  slidesPerView:5,
  navigator:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});









const promotionEl =  document.querySelector('.promotion');
const promotionToggleBtn =  document.querySelector('.toggle-promotion');
  // 다른값으로 할당될수있다
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  // 느낌표붙어있는 값이 반대가 되게 해주세요 라는 뜻
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max){
  return parseFloat(Math.random()*(max - min).toFixed(2))
}


function floatingObject(selector, delay, size){
  gsap.to(selector, 
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1,
      yoyo:true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}
floatingObject('.floating1' , 1, 15);
floatingObject('.floating2' , .5, 15);
floatingObject('.floating3' , 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소를 반복
spyEls.forEach(function(spyEl){
  // 대문자시작
  // 특정한 요소를 감지해준다
  new ScrollMagic
  .Scene({
    // 강제적으로 일으킬때 사용
    triggerElement: spyEl, // 보여짐 여부를 감시할요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});

