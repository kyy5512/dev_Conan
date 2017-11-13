/** Created by sangjunpark on 2017. 11. 13.. ...*/

function calcuateAge(year, birth){
    var age = year - birth;


    if (age===27){
            return "20대"
  } else if(age === 10) {
            return "10대" ;
  } else if(age === 7) {
            return "아동" ;
  }
    return age ;
}

var current = 2017 ;
var want = 2011 ;

var ageJohn = calcuateAge (current, want) ;
console.log(ageJohn);

console.log(ageJohn);

//var ageJohn = calcuateAge() ;


//var ageMike = 2017-2000 ;
var ageMike = calcuateAge(2000)
var ageMary = calcuateAge(2010)


//console.log("ageJohn:"+ageJohn) ;
//console.log("ageMike:"+ageJohn) ;
//console.log("ageMary:"+ageJohn) ;

var scope = "global scope" ;

function checkscope(scope) {
    var scope = scope;
    console.log(scope);
    scope = "local scope";
}
checkscope(scope);
console.log(scope);
    //console.log(scope);