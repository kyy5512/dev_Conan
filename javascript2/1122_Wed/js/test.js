function display(birth) {
    var now = now Date ;
    var age = now.getFullYear()-birth ;
    alert(birth+"몇년도입니다.")
}


var people = function (name,birthYear, job, house, postcode, today, time) {
    this.name = name ;
    this.job = job ;
    this.house = house;
    this.postcode = postcode;
    this.today = today;
    this.time = time;
}

var now = new Date();
var year = new.getFullYear();
var month = new.getMonth();
var date = new.getDate();
var hours = new.getHours();
var minutes = new.getMinutes();
var seconds = new.getMilliSeconds();


var people2 = [];
people2.push(new people("youn","big boss","seoul","503","year+"="+(month+1)+"-"+date, hour+":"+minute+":"+second"));
people2.push(new people("park","person","busan","401","year+"="+(month+1)+"-"+date, hour+":"+minute+":"+second"));
people2.push(new people("lee","cat mom","france","511","year+"="+(month+1)+"-"+date, hour+":"+minute+":"+second"));
people2.push(new people("shin","road killer","japan","468","year+"="+(month+1)+"-"+date, hour+":"+minute+":"+second"));
people2.push(new people("min","boss2","china","159","year+"="+(month+1)+"-"+date, hour+":"+minute+":"+second"));


var text = "";


text +="<h1>게시판</h1>"
text +="<table border='1' bordercolor='orange'>";
text +="    <tr>";
text +="         <th>#</th>" ;
text +="         <th>이름</th>" ;
text +="         <th>생년</th>" ;
text +="         <th>직업</th>" ;
text +="         <th>주소</th>" ;
text +="         <th>우편번호</th>" ;
text +="         <th>가입년도</th>" ;
text +="         <th>가입시간</th>" ;
text +=    "</tr>";


for(var i =0 ; i<people2.length; i++){
    text+="<tr>";
    text +="         <td>"+(people2.length-i)+"</td>" ;
    text +="         <td>"+people2[i].name+"</td>" ;
    text +="         <td><button onclick=\"display("people2[i].birthYear+")\">"+people2[i].birthYear+"</button></td>"

    text +="         <td>"+people2[i].job+"</td>" ;
    text +="         <td>"+people2[i].house+"</td>" ;
    text +="         <td>"+people2[i].postcode+"</td>" ;
    text +="         <td>"+people2[i].today+"</td>" ;
    text +="         <td>"+people2[i].time+"</td>" ;


    var day = people2[i].date;
    text +="    <td>"+day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"</td>";
    text +="    <td>"+day.getHours()+"-"+(day.getMinutes()+1)+"-"+day.getSeconds()+"</td>";
    text+="</tr>";

}
text +="</table>" ;


document.write(text);
