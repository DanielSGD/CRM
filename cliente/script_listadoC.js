$(document).ready(function () {
   
  
      $.ajax({
        url: "http://localhost:3000/",
        method: "post",
        success: function (resp) {
          console.log(resp);
          datos= resp
            let tbody = $("#tbody");
            let fila;
           
          for (var i = 0; i < datos.length; i++) {
            fila = $("<tr>").append(
              $("<td>").text((i+1)),
              $("<td>").text(datos[i].nombre),
              $("<td>").text(datos[i].apellido),
              $("<td>").text(datos[i].empresa),
              $("<td>").text(datos[i].email),
              $("<td>").text(datos[i].telefono),
              $("<td>").text(datos[i].fecha),
              $("<td>").append($('<button>').addClass('btn_eliminar').text("eliminar").attr('data-id', datos[i]._id)),
            );
            tbody.append(fila);
          }
        
        },
      });
      
       //Evento click para los botones Eliminar
  $("#tbody").on("click", ".btn_eliminar", function () {
    let id = $(this).data("id");
    console.log(id)
    $.ajax({
      url: "http://localhost:3000/eliminar/" + id,
      method: "delete",
      success: function (respuesta) {
        alert(respuesta);
        window.location.href = "http://localhost:3000/";
      },
    });
  });
    });
 