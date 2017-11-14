function first(par){
    console.log('test') ;
}

var first2 = function (par){
    console.log('test') ;
}

var names= ['John', 'Jane', 'Mark'] ;
var numbers = [10 ,11 ,12, 13, 14, 15, 16, 17, 18, 19] ;
var testArr = [1, 'John', 'true', 'names'] ;

//document.write(names);
//console.log(names);
//document.write("<br>");
//document.write(testArr);
//console.log(testArr);

//console.log(names[1]);
//names.push("Log");
//document.write(names) ;
//names.pop();
//names.pop() //맨끝을 뽑아내는것
//var popStr = names.pop() ;
//console.log(popStr);
//names.push("Log")
//console.log(names[3]);

//console.log(names[2]);
//names.push("Log");
//console.log(names[3]);
//names.push("Log2");
//console.log(names[4]);
//names.push("Log3");
//names.push("Log4");

//console.log(names[names.length-1]);

//console.log(names.indexOf('Jane')); //indexof 몇번째 배열에있는지
//console.log(names.indexOf('Log4'));

//초기값 ; 비교해서 참/거짓 ; 액션
console.log("length="+numbers.length) ;
for(var i=0 ;i < numbers.length; i++) {
if(i<3){
    console.log(numbers[i]) ;
}   else if(i>5){

    console.log(numbers[i])

    if(i==17){
    console.log("값은"numbers[i]+"입니다"]);
    //break ;
    } else {
         console.log(numbers[i]) ;
         }
    // "----------------------------------" console 출력
    } else{
         console.log("--------------------------"+numbers[i]+"----------------------------");

    }

}



console.log(length[numbers.length)]);
for(var i=2 ;i <numbers.length; i++)
    //if
    //0,1,2 || 6,7,8,9 번째 출력
    console.log(numbers[i]) ;


//numbers 배열을 0번째에서 2번째까지 도는 6번째 끝까지 console 출력하시오
//0,1,2 || 6,7,8,9
//3이거나 5이면 숫자를 출력하세요
if(3 || 5) {
    console.log("숫자를 출력하세요")
}
//3이고 5이면 and
if((3 && 5){
    console.log("숫자를 출력하세요")
}


for(var i=0 ;i <numbers.length; i++)