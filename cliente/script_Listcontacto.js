$(document).ready(function () {
   
  
    $.ajax({
      url: "http://localhost:3000/ListaContacto",
      method: "post",
      success: function (resp) {
        console.log(resp);
        datos= resp
          let tablaContacto = $("#tablaContacto");
          let fila;
         
        for (var i = 0; i < datos.length; i++) {
          fila = $("<tr>").append(
            $("<td>").text((i+1)),
            $("<td>").text(datos[i].cliente),
            $("<td>").text(datos[i].estado),
            $("<td>").text(datos[i].fecha),
            $("<td>").text(datos[i].descripcion),
            $("<td>").append($('<button>').addClass('btn_eliminar').text("eliminar").attr('data-id', datos[i]._id)),
          );
          tablaContacto.append(fila);
        }
      
      },
    });
    
     //Evento click para los botones Eliminar
$("#tablaContacto").on("click", ".btn_eliminar", function () {
  let id = $(this).data("id");
  console.log(id)
  $.ajax({
    url: "http://localhost:3000/ListaContacto/" + id,
    method: "delete",
    success: function (respuesta) {
      alert(respuesta);
      window.location.href = "http://localhost:3000/ListaContacto";
    },
  });
});
  });
