var imagen = document.getElementsByClassName("animal");
var select = document.getElementById("select");
  select.onchange = function(){
    if(select.value == "original"){
      for(var i=0; i<imagen.length; i++){
        imagen[i].classList.remove("blanco-negro");
        imagen[i].classList.remove("convertir-colores");
        imagen[i].classList.remove("sepia");
        imagen[i].classList.add("original");
      }
    }

    if(select.value == "sepia"){
      for(var i=0; i<imagen.length; i++){
        imagen[i].classList.remove("blanco-negro");
        imagen[i].classList.remove("convertir-colores");
        imagen[i].classList.remove("original");
        imagen[i].classList.add("sepia");
      }
    }

    if(select.value == "blanco-negro"){
      for(var i=0; i<imagen.length; i++){
        imagen[i].classList.remove("sepia");
        imagen[i].classList.remove("convertir-colores");
        imagen[i].classList.remove("original");
        imagen[i].classList.add("blanco-negro");
      }
    }

    if(select.value == "convertir-colores"){
      for(var i=0; i<imagen.length; i++){
        imagen[i].classList.remove("blanco-negro");
        imagen[i].classList.remove("sepia");
        imagen[i].classList.remove("original");
        imagen[i].classList.add("convertir-colores");
      }
    }
  }
