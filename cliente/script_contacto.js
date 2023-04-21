$(document).ready(function () {
   
  
    $.ajax({
      url: "http://localhost:3000/registroContacto",
      method: "post",
      success: function (resp) {
        console.log(resp);
        datos= resp
          let listado = $("#listado_clientes");
          let fila;
         
        for (var i = 0; i < datos.length; i++) {
          listado.append($("<option>").val(datos[i].nombre + " " + datos[i].apellido).text(datos[i].nombre + " " + datos[i].apellido));
        }
      
      },
    });

    $("#form_registro").submit(function (e) {
        e.preventDefault();
    
        let datas = $(this).serialize();
    
        $.ajax({
          url: "http://localhost:3000/envioContacto",
          method: "post",
          data: datas,
          success: function (resp) {
            alert(resp);
            window.location.href = "http://localhost:3000/ListaContacto";
          },
        });
      });


});