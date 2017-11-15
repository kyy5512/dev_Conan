/*
var name = "John" ;
var name2 = "Jane";
var number = 20 ;
var check = true ;
var check2 = false ;

function displayCon(){
    console.log("안녕하세요");
} ;
var displayCon2 = function(){
    console.log("안녕하세요 2....");
}


var arr = ["John", "Jane", "Mark", "Tom"]
var arr2 = [new Array("John", "Jane", "Mark", "Tom") ;
var arr3 = [10,11,12,13,14,15,16,17,18,19] ;
var arr4 = ["John",11, true, arr2, displayCon2] ;

document.write(arr) ;

var tag = "<h1>안녕하세요</h1>" ;
document.write(tag) ;


var numb = 10 ;  console.log(number2);  //10
num = num + 1 ;   console.log(number2) ;  //11
num++ ; console.log(num) ; //12
num += 1;   console.log(num) ; //13

num +=3;    console.log(num) ; // num= num +3, 16

for(var i=0 ; i<10 ; i+=2){
    console.log(i);
}
*/
/*
// 짝수만출력
var num3 = 10/2 ;
var num4 = 11%2 ;
var number = 0

if(number){
    console.log("number true");
} else {
    console.log("number false")
}

var name ; // name="John";
if(name){
    console.log("name true");
}else{
    console.log("name false")
}

*/
/*
for(var i=0 ; i<10 ; i++){
    if(i%2)  {
        console.log(i);
    }
}
*/

/*
for (var i=0 ; i <10; i++)
{

    if(i==1) {
    //1일때는 "안녕하세요"
        console.log("안녕하세요");
    {else if(i==5){
    //5일때는 "절반입니다"
        continue ;
    }   console.log("절반입니다");
    {else if(i==8){
    //8일때는 "거의 끝나갑니다"
    }   console.log("거의 끝나갑니다");
    {else {
    //나머지는 숫자
    console.log(i+"num") ;
    }
}
*/

//8보다작았을대는 아무것도 실행되지않고 8부터는 나머지그대로있게
 /*
   for (var i=0 ; i <10; i++)
     if(i<=7) {
        continue ;
        {else if(i==8){
        console.log("안녕하세요");
    }else {
    //나머지는 숫자
      console.log(i+"num") ;
    }
}
*/
//<=, >= &&.\\
//3보다크고 ,7보다 작거나 같으면 "안녕하세요"출력
 /*
 for (var i=0 ; i <10; i++)
     {else if(i>3 && i<=7) {
        console.log("안녕하세요")
     }
        {else if(i<=8){
        console.log("거의끝나갑니다");
    }else {
      console.log(i+"num") ;

 /*var i=0 ;
 // i가 10보다 크거나 같을때 빠져나온다(break i를 더하는코드)
 while(true){
    i++ ;
    if(i>=10){
    break;
    }
        console.log("안녕하세요:["+i+"1");
}


 /*var i=0 ;
    while(i < 10){
    i++ ;

    console.log("안녕하세요:["+i+"1");
}
/* var col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
   var col1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] ;
   var col2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] ;
   var col3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ;
   var col4 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50] ;
   var col5 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60] ;
   var col6 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70] ;
   var col7 = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80] ;
   var col8 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90] ;
   var col9 = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100] ;

   var row = [col, col2, col3, col4, col5, col6, col7, col8, col9];
        console.log(col[3]);
        console.log(col,length);

   for(var i=0 ; i<col7,length ; i++){
        console.log(col7[i]);  //col7 개별 원소들이 출력
   }



   //작업 후
   for(var i=100; i< 121 ; i++){
    col10.push(i);
   }

   console.log(col10);
   */

   /* var col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
   var col1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] ;
   var col2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] ;
   var col3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ;
   var col4 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50] ;
   var col5 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60] ;
   var col6 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70] ;
   var col7 = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80] ;
   var col8 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90] ;
   var col9 = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100] ;

   var row = [col, col1, col2, col3, col4, col5, col6, col7, col8, col9];

   console.log(row[0][0]);
   console.log(row[1][0]);


   for(var i=0 ; i< row.length ; i++){
    console.log(row[i])

       for(var a=0 ; a < row[i].length ; a++){
           console.log(row[i][a]);
       }
    }

    //1~100 까지 입력하고, 출력하는 2차원배열

    var arr = [] ;
    for(var i=0; i<10 ; i++){
    arr[i] = [];
        for(var a=0 ; a<10 ; a++){

            var num = i*10+ a+1 ;
            arr[i][a] = num ;
            //console.log(num);
        }

    }

    var arr = [] ;
    for(var i=0; i<10 ; i++){
    arr[i] = [];
        for(var a=0 ; a<10 ; a++){

            var num = i*10+ a+1 ;
            arr[i][a] = num ;
            //console.log(num);

        }
    }

    for(var i=0; i<arr.length; i++){
        for(var a=0 ; a<arr[i].length ; a++){
            console.log(arr[i][a])
        }}
        *//