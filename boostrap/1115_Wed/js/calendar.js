function getDay(year,month){
                            //1,    2,3,  4,   5, 6,  7,7,  7, 10,11,12
    var lastMonth =  new Array(31, 29, 31, 30, 31,30, 31,31,30,31,30,31)
    var mon2 ;
    //윤년 체크
    if(year % 4 ==0){
        mon2 = true ;
    }
    if(year % 100 ==0){
        mon2 = false ;
    }
    if(year % 400 ==0){
        mon2 = true ;
    }
    if(mon2){
        lastMonth[1]=29;
    }else{
        lastMonth[1]=28;
    }
    return lastMonth[month];
    }

function drawCalendar(firstDay, lastDate, date, year, month) {
    document.write("firstDay="+firstDay+"lastDate="+lastDate+" date="+date+" year:"+year+", month:"+month);
    var text = "<center>" ;
    text += "<table border=\'1\'>" ;
    text += "   <th colspan='7' bgcolor='#6666FF'>" ;
    text += "        "+year+"년" +(month+1)+"월";
    text +=     "<tr>" ;


    var weekDay = new Array("일", "월", "화", "수", "목", "금","토");
    for(var i=0; i<weekDay.length ; i++){
    text +=         "<td width= '45' height='40'>"+weekDay[i]+"</td>" ;
    }
    text += "<tr>" ;

    var digit = 1; // 날짜
    var curCell =1 ; //처음 몇칸을 띄울 것인지
    var rowSize = Math.ceil( (lastDate+firstDay-1)/7 );

    for(var row = 1 ; row<=rowSize ; row++){
        text +="<tr>"

        for(var col=1 ; col <=7 ; col++){
            if(digit>lastDate){
                //마지막 남은 공간의 개수
               n = (Math.ceil((lastDate+firstDay-1)/7))*7 - (curCell+lastDate-1) ;
               for(var i=1 ; i <=n ; i++){
               text +="<td>&nbsp;</td>";
            }
               //마지막 날짜이후
               break ;
            }
            if(curCell < firstDay){
                text += "<td>&nbsp;</td>" ;
                curCell++ ;
            }else{

               text += "<td height=40>"+digit+"</td>";

               digit++;
             }
         }
    }
    text += "</table>" ;
    text += "</center>" ;
    console.log(text)

    return text;
}
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate(); //오늘 날짜

var firstDayInstance = new Date(year, month, 1) ;
//매월 1일에 대한 요일, 앞에 몇칸을 띄우는지 확인하기 위해서↓
var firstDay = firstDayInstance.getDay()+1
var days = getDay(year, month);

var mycalendar = drawCalendar(firstDay,days, date, year, month) ;
document.write(mycalendar) ;
