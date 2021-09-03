function fade(z){
    var a=document.getElementById("box_1");
    var b=document.getElementById("box_2");
    var c= document.getElementById("box_3");
    var d= document.getElementById("box_4");
        if(z==1){
            a.style.display= "flex";
            b.style.display= "none";
            c.style.display= "none";
            d.style.display= "none";
        }
        else if(z==2){
            b.style.display= "flex";
            a.style.display= "none";
            c.style.display= "none";
            d.style.display= "none";
        }
        else if(z==3){
            c.style.display= "flex";
            b.style.display= "none";
            a.style.display= "none";
            d.style.display= "none";
        }
        else if(z==4){
            d.style.display= "flex";
            b.style.display= "none";
            c.style.display= "none";
            a.style.display= "none";
        }
     
}
