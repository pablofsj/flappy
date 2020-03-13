$(document).ready(function() {

  
  
  // me traigo el elemento canvas

  var canvas = $('#canvas')[0];

  // ahora le indico que contexto usara el programa, en este caso 2d

  var ctx = canvas.getContext('2d');

  

  // para borrar canvas 

  var ancho = 800;
  var alto = 400;

  function borraCanvas(){
    canvas.width = ancho;
    canvas.height = alto;
  }


  //mostrar elementos
  function apareceHomero(){
    ctx.drawImage(homero,0,0,224,148,100,movHomero.y,75,49);
  }

  function apareceEnemigo(){
    ctx.drawImage(enemigo,0,0,360,450,movEnemigo.x,movEnemigo.y,90,112.5);
  }

  function apareceEnemigo2(){
    ctx.drawImage(enemigo2,0,0,360,450,movEnemigo.x,movEnemigo.y,90,112.5);
  }

  function apareceNube(){
    ctx.drawImage(nube,0,0,512,512,movNube.x,movNube.y,51.2,51.2);
  }

  

  
  //atributos/posicion de elementos -----------------------------------
  var movHomero = {y:350, velocidad_elevacion_y:0, gravedad:2, pixeles_salto:20, velocidad_bajar_y:7, saltando:false};
  var escenario= {velocidad_escenario: 15 , puntaje:0 };
  var movEnemigo = {x:ancho + 100, y:330};
  var movNube = {x:ancho + 100, y:30};
  

  

  $(document).keydown(function(ev) {

    if(ev.keyCode == 38){
      saltar();
      audiosalto.play();
      

    }  
    
  })

  function saltar(){
    movHomero.saltando=true;
    movHomero.velocidad_elevacion_y = movHomero.pixeles_salto;
  }

  function fisicaPersonaje(){
    if(movHomero.saltando == true){
      if(movHomero.y > 350){
        movHomero.saltando = false;
        movHomero.velocidad_elevacion_y = 0;
        movHomero.y = 350;

      }
      else{
        movHomero.velocidad_elevacion_y -= movHomero.gravedad;
        movHomero.y -= movHomero.velocidad_elevacion_y;

      }
    }
  }

  function fisicaEnemigo(){
    if(movEnemigo.x < -100){
      movEnemigo.x = ancho + 100;
    }
    else{
      movEnemigo.x -= escenario.velocidad_escenario;
    }
  }

  function fisicaNube(){
    if(movNube.x < -100){
      movNube.x = ancho + 100;
    }
    else{
      movNube.x -= escenario.velocidad_escenario - 10;
    }
  }

  







  //bucle principal del juego, fijado en 0,3 segundos---------------------------------------------------------

  
  function cargar_elementos() {
    borraCanvas();
    fisicaPersonaje();
    fisicaEnemigo();
    fisicaNube();
    apareceEnemigo();
    apareceHomero();
    apareceNube();
  
    

  }
  
  setInterval(function() { 
    cargar_elementos();
    
  }, 30);

  
  

});