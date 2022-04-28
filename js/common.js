const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 서치를 DIV를 클릭하면 포커스해라 라는 의미
searchEl.addEventListener('click', function(){
  //Logic..
  searchInputEl.focus();
  // 아무곳이나 클릭하면 효과가 적용된다
});

// 만약에 포커스가 되면 두번째로 작성하는 인수가 실행될거다 ( 핸들러 )
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  // 클래스에서 에드를 추가하겠다
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  // 클래스에서 에드를 추가하겠다
  searchInputEl.setAttribute('placeholder','');
});

const thisYear = document.querySelector('.this-year');
                      //자바스크립트 생성자 함수
                      //데이터 정보가 반환된다
thisYear.textContent = new Date().getFullYear();