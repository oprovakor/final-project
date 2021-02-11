    // start Slider=========


    var firstshow = 0;
    var time = 500;
    document.getElementById('radio' + 2).checked = true;
    var counter = 3;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter ++;
        if(counter > 4){
            counter =1;
        }
    },5000);
//End Slider======
