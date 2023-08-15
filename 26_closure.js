function outside (){
    var a = 20;
     function inside( ){
        console.log(a)
     }

      inside()
}

outside();


var z =20

function external( ){
   console.log(z);
   function internal(){
      console.log(z);
   }
   internal();
}

external();