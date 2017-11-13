/** Created by sangjunpark on 2017. 11. 13.. ...*/

var name = 'John' ;
var age = 26 ;
var isMarried = 'yes' ;
var isMarried2 = 'yes' ;


if(isMarried === 'yes'){
    console.log("John is married");
}

else if(isMarried === 'no') {
    console.log("Jane is married");
}
else if(isMarried === 'no1') {
    console.log("Jane is married");
}

else {
    console.log("I don't know");
}

 if(23 == "23"){
    console.log("23 ==") ;
 }
 if(23 == "23"){
    console.log("23 === 3개 ");
}


var job = 'driver' ;

job =  prompt('what dose john do?');

switch(job){
    case 'driver' :
        console.log('job is driver');
        break ;
    case 'teacher' :
        console.log('job is teacher');
        break ;
    case 'coach' :
        console.log('job is coach');
        break ;
    default :
        console.log('I don\'t know');
}


