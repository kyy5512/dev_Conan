 /** Created by gaeyoungyoun on */
// function calculateAge(birth){
   // var age = 2017- birth ;
    //   return age ;
  //      }

//var ageJohn = calculateAge(1990) ; // 2017-1990
var test1 = sum(2, 5) ;
document.write("test1="+test1) ;

 function sum(first, second){
 var s= first+ second
    return s ;
}
//빼기함수
function minus(first,second){
var s = first-second
return first - second ;
}

//곱하기함수
function mul(first,second) {
var s =first * second
return first * second ;
}

//연산자 인식 함수
function calculate (num1, num2, oper){

    if(oper =="+"){

    }else if(oper =="+"){
            sum2 = sum(num1, num2) ;
    }else if(oper =="-"){
            sum2 = minus(num1, num2) ;
    }else if(oper =="*"){
            sum2 = mul(num1, num2) ;
    }
   // return sum2 ;
}


var first = 2;
var second = 5;
var operator = "+";
//document.write("("+first+"+"second+")="+sum(2,5)+"<br>") ;
//document.write("("+first+"-"second+")="+minus(2,5)"<br>") ;
//document.write("("+first+"-"second+")="+mul(2,5)"<br>") ;

document.write("("+first+operator+second+")="+calculate(first,second,operator)) ;



// console.log(ageJohn)
/*은퇴자이름, 나이, 현재년도, 총 일하는기간*/
//function  checkRetirement(retirName, retireAge, courrentYear,workPerioid){
    function checkRetirement(age, workPerioid) {
        var remain = workPerioid - age ;
        return remain;
        }
/*이름 생년, 현재년도, 총일하는 기간*/
function yearRetirement(birth, year, period){
    var age = year - birth;
    var remain= checkRetirement(age, period);
    return remain;
    }

    //document.write("<br>");
    //documnet.write("은퇴의 기준년도는"+retirementYear+"년 입니다");
    //document.write("<br>");
    //document.write("<br>");


/*은퇴 글씨 출력*/

function displayRetire(remain){
    if(remain ==0){
        document.write("올해가 은퇴합니다");
        }else if(remain >0) {
        document.write("은퇴가"+remain+"년 남았습니다");
        }else{
        documnet.write("이미 은퇴했습니다");
        }

       //document.write(age+"세");

    }

var currentYear = 2017
//var remain = yearsRetirement(2007, currentYear, 20);
//document.write("현재는" +currentYear+"년 입니다<br>");
//document.write("현재 나이는"+age+"세 입니다.<br>")
//displayRetire(remain);
//yearsRetirement('John' ,1980, 2020, 40);

var name = "John" ;

function third() {
    var c = "hey" ;
    console.log("third Hey")
}

function second() {
    var b = "Hi!";
     third();
     console.log("second Hi")
}


function first() {
    var a = "Hello";
    second();
    console.log("first Hello")
}