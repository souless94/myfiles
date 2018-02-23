var d,h,m,s,animate;

function clock(){
    var od=new Date();
    var utc = od.getTime() + (od.getTimezoneOffset() * 60000);
    var offset=-5; // gmt x
    d=new Date(utc +3600000*offset);
    hour=d.getHours();
    minute=d.getMinutes();
    ss=d.getSeconds();
    
    function checkTime(i){
        if(i<10){
            i='0'+i;
        }
        return i;
    }
    hour=checkTime(hour);
    minute=checkTime(minute);
    ss=checkTime(ss);
    if ( hour > 12 ) {
        hour = hour - 12;
    if ( hour == 12 ) {
        hour = checkTime(hour);
        document.getElementById("clock2").innerHTML = hour+":"+minute+":"+ss+" AM";
  }
  else {
    hour = checkTime(hour);
    document.getElementById("clock2").innerHTML = hour+":"+minute+":"+ss+" PM";
  }
    }
    else {
    document.getElementById("clock2").innerHTML = hour+":"+minute+":"+ss+" AM";;
    }
    var time = setTimeout(clock,1000);
}

function  datee(){
    var od=new Date();
    var utc = od.getTime() + (od.getTimezoneOffset() * 60000);
    var offset=-5; // gmt x
    d=new Date(utc + 3600000*offset);
    
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    function getDate2() {
    document.getElementById("date1").innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    }
    getDate2();
}
function final(){
    clock();
    datee();
}

window.onload=final;


