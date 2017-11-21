function check() {
    //alert('check 입니다')
    var name = document.getElementById('name').value ;
    var id = document.getElementById('id').value ;


    if(name =="") {
        alert("이름을 입력하세요.");
        document.frm.name.focus() ;
        document.getElementById('name_error').textContent='이름을 입력하세요';
        return false ;

    }
    var id = document.frm.id.value
    if(id=="") {
        alert("아이디를 입력하세요");
        document.frm.id.focus() ;
        return false;


}
    var password = document.frm.password.value
    var password2 = document.frm.password2.value;
    if(password==""){
        alert("비밀번호를 입력하세요");
        document.frm.password.focus();
        return false;
    }
    if(password2 =="") {
        alert("패스워드 확인을 입력하세요");
        document.frm.password2.focus();
        return false;
    }


    if(password != password2){
        alert("비밀번호가 같지 않습니다.");
        document.frm.password2.value="";
        document.frm.password2.focus()
        return false;
    }
    //패스워드 2개를 비교해서 같지 않으면 처리하기

    var chk = confirm('입력된 데이터를 서버로 전송합니다.');
    if(chk) {
        console.log("name="+name+", id="+id);
        document.frm.submit();
    }else{
        return false;
    }
}