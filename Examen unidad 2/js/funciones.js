$(document).ready(function () {
  $("#dv-datos").hide();
  $("#menu").hide();
  var mesas = 6;
  var registros = [];
   let arr = [1,2,3,4,5,6];
  var verificador = true;
  console.log(registros);
  $("#btn-arreglo").click(function () {
    if (
      ($("#nombre").val() == "") |
      ($("#fecha").val() == "")
      
    )  {

      alert("Campos incompletos");
    } else {
      $("#menu").show();
      let alumno = {
        nombre: $("#nombre").val(),
        fecha: $("#fecha").val(),
        estatus: "Pendiente"
      };
      registros.push(alumno);
      alert("RESERVACIÓN REGISTRADA CORRECTAMENTE");
      console.log(registros);
      formulario.reset();
    }
  });
   $("#btn-opciones").click(function () {
       $("#dv-datos").hide();
          
    let opc = $("#opcion").val();
    switch (opc) {
      case "1":
      let nomCliente = prompt("Ingrese el nombre del cliente");
      if (nomCliente == "") {
          alert("No escribiste ningun nombre xD");
        }

      for (let x = 0; x < registros.length; x++) {
        console.log(registros[x].nombre);
        
        if (registros[x].nombre == nomCliente) {
          registros[x].estatus= "Confirmada";
          registros[x].mesa = mesas;
          mesas--;
          if (registros[x].mesa <= 6 & registros[x].mesa >= 1 ) {
            alert("RESERBACIÓN CONFIRMADA \n Le corresponde la mesa: " + registros[x].mesa);
          }
          

          console.log(registros);
        }
      }
      for (let y = 0; y < registros.length; y++) {
        if (registros[y].mesa > 6 | registros[y].mesa < 1) {
          registros[y].estatus = "Pendiente";
          registros[y].mesa = "Te quedaste sin mesa";
           alert("Lo sentimos, por el momento no contamos con mesas disponibles\nEspere un momento...");
           console.log(registros[y].mesa);
           console.log(registros[y].estatus);
           console.log(registros);
          
        }
        
      }

      break;
      case "2":
        $("#dv-datos").hide();
      for (let i = 0; i < registros.length; i++) {
        alert(
              "RESERVACION REGISTRADA NUMERO: "+(i+1)+"\n\nNombre de quien reservo: " +
                registros[i].nombre +
                "\nfecha: " +
                registros[i].fecha +
                "\nEstatus: " +
                registros[i].estatus 
            );
        
      }

        break;
      case "3":
      dataTable(registros);
        break;
      case "4":
        $("#dv-datos").hide();
      mesasDisponibles(registros,arr); 
        break;
      case "5":
      dataTable2(registros);
        break;
      case "6":
        $("#dv-datos").hide();
      confirmada(registros);    
        break;
    }
  });
  function dataTable(registros) {
    $("#pizarra").empty();
    $("#h2").empty();
      $("#dv-datos").show();
      $("#h2").append("MESAS OCUPADAS");
      if (registros.length == 0) {
        
      }else{
                  for (let x = 0; x < registros.length; x++) {
        if (registros[x].estatus == "Confirmada") {
           $("#pizarra").append(
        "<tr class'1'>" +
          "<td class'1'>" +
          registros[x].nombre +
          "</td>" +
          "<td class'1'>" +
          registros[x].fecha +
          "</td>" +
          "<td class'1'>" +
          registros[x].estatus +
          "</td>" +
          "<td class'1'>" +
          registros[x].mesa  +
          "</td>" +
          "</tr>"
      );
        }
      }
      }

  }

    function dataTable2(registros) {
    $("#pizarra").empty();
    $("#h2").empty();
      $("#dv-datos").show();
      $("#h2").append("RESERVACIONES PENDIENTES");
      if (registros.length == 0) {
        
      }else{
                  for (let x = 0; x < registros.length; x++) {
        if (registros[x].estatus == "Pendiente") {
           $("#pizarra").append(
        "<tr class'1'>" +
          "<td class'1'>" +
          registros[x].nombre +
          "</td>" +
          "<td class'1'>" +
          registros[x].fecha +
          "</td>" +
          "<td class'1'>" +
          registros[x].estatus +
          "</td>" +
          "<td class'1'>" +
          "</tr>"
      );
        }
      }
      }

  }
  function mesasDisponibles(arreglo, arr) {
   
    for (let x = 0; x < arreglo.length; x++) {
      if (arreglo[x].mesa == 1) {
        delete arr[0];
        
      }
      if (arreglo[x].mesa == 2) {
        delete arr[1];
        
      }
      if (arreglo[x].mesa == 3) {
        delete arr[2];
        
      }
      if (arreglo[x].mesa == 4) {
        delete arr[3];
        
      }
      if (arreglo[x].mesa == 5) {
        delete arr[4];
        
      }
      if (arreglo[x].mesa == 6) {
        delete arr[5];
        
      }

    }
    if (arr == [,,,,,]) {

    }else{
      alert("Las mesas desocupadas son: "+ arr);
    }
    
    console.log(arr);

  };
   function confirmada(registros) {
     for (let x = 0; x < registros.length; x++) {
        if (registros[x].estatus == "Confirmada") {
          alert("RESERVACIÓN CONFIRMADA NO: " + (x+1)+"\n Mesa: "+registros[x].mesa+"\n Nombre: "+registros[x].nombre+
          "\n Estatus: "+registros[x].status+
          "\n Fecha de registro: "+registros[x].fecha);
        }
      }

  }
});