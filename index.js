window.onload = function() {
  window.setTimeout(fadein, 10000); //8 seconds
  
  
}


 function fadein(){
  document.getElementById("text").style.fontSize="50px";

 }
function test() {


     var x=document.getElementById("type");
      
   // alert(x.value.length);
   //     document.getElementById("type").style.borderBottomColor="green";
   
        x.addEventListener('input', function() {
            
            if(x.value.length>0)
            document.getElementById("type").style.borderBottomColor="green";
              else document.getElementById("type").style.borderBottomColor="red";
       
            } );

            x.addEventListener('keypress', animation);
  
            function animation(evt) {
              if (evt.keyCode == 13) {
               
                x.style.opacity = '0';
                a=x.value ;
                document.getElementById("text").innerHTML=a;
                document.getElementById("text").style.bottom="500px";
                
                fadein();
                
           
              }
            }
           
}
test();
function f0() {
  setTimeout(function(){  
    document.getElementById("text").style.opacity='0';
    document.getElementById("text").value="";
    

  
     f1();
  }, 11000);
}
f0();
function f1(){
  setTimeout(function(){
     location.reload();},12000);
}

function test2(){

 
 
       if(document.getElementById("myaudio").muted==true)
     document.getElementById("myaudio").muted=false;
     else document.getElementById("myaudio").muted=true;

  

  
}
