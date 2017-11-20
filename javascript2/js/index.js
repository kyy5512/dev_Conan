    function button(sitename) {
    var site
    console.log("check="+check);
    if(sitename === '네이버'){
        site = '네이버' ;
        }else if(sitename ==='다음'){
        site = '다음' ;
        }
      var check = confirm(site+'으로 이동합니다')  ;

      if((sitename === '네이버') && check) {
         window.open("https://www.naver.com");
    } else if((sitename === '다음') && check) {
         window.open("https://www.daum.net");
    }
}

    function btn_mouseover(){   //mouseover 마우스오버
    alert('마우스가 올라갔습니다.');
    }

    function input_alert(){
    alert('세글자 이상 입력해야됩니다');
    }
