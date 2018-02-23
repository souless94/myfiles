function calc(){
        var m_5= parseInt(document.getElementById("m5").value);
        var m_10=parseInt(document.getElementById("m10").value);
        var m_15=parseInt(document.getElementById("m15").value);
        var m_30=parseInt(document.getElementById("m30").value);
        var m_60=parseInt(document.getElementById("h1").value);
        var h_3 =parseInt(document.getElementById("h3").value);
        var h_8 =parseInt(document.getElementById("h8").value);
        var h_15 =parseInt(document.getElementById("h15").value);
        var m_5r= parseInt(document.getElementById("m5r").value);
        var m_10r=parseInt(document.getElementById("m10r").value);
        var m_15r=parseInt(document.getElementById("m15r").value);
        var m_30r=parseInt(document.getElementById("m30r").value);
        var m_60r=parseInt(document.getElementById("h1r").value);
        var h_3r =parseInt(document.getElementById("h3r").value);
        var h_8r =parseInt(document.getElementById("h8r").value);
        var h_15r =parseInt(document.getElementById("h15r").value);
        var normal =m_5*5 + m_10*10 +m_15*15+m_30*30+m_60*60 +h_3*60*3 +h_8*60*8 +h_15*60*15; // normal speed ups
        var research=m_5r*5 + m_10r*10 +m_15r*15+ m_30r*30 +m_60r*60 +h_3r*60*3 +h_8r*60*8 +h_15r*60*15; // research speed ups
        var summ= normal + research; // convert to minutes first
        // normal total
        var minutes_n= normal %60;
        var hour_n = (normal - minutes_n)/60;
        var days_n = (hour_n - hour_n % 24)/24;
        var hours_n = hour_n%24;
        //reasearch total
        var minutes_r= research % 60;
        var hour_r = (research - minutes_r)/60;
        var days_r = (hour_r - hour_r % 24)/24;
        var hours_r = hour_r%24;
        // total
        var minutes= summ %60;
        var hour = (summ - minutes)/60;
        var days = (hour - hour % 24)/24;
        var hours = hour%24;
        
    
        document.getElementById("normal").value=" total normal speed up is : " +days_n +" days " +hours_n +" hours "+minutes_n +" minutes";
        document.getElementById("research").value=" total research speed up is : " +days_r +" days " +hours_r +" hours "+minutes_r +" minutes";
        document.getElementById("total").value=" total speed ups is : " +days +" days " +hours +" hours "+minutes +" minutes";
        return false;
    }

function calc_p(){
    var err = document.getElementById("calc_form").checkValidity();
    if (err == true){
        document.getElementById("calculate").click();
        return false;
    }
    else{
        document.getElementById("normal").value="error";
        document.getElementById("research").value="error";
        document.getElementById("total").value="error";
        return false;
        
    }
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}