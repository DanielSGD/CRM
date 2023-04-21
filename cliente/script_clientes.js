$(document).ready(function () {
    $("#form_registro").submit(function (e) {
      e.preventDefault();
  
      let datos = $(this).serialize();
  
      $.ajax({
        url: "http://localhost:3000/registroClientes",
        method: "post",
        data: datos,
        success: function (resp) {
          alert(resp);
          window.location.href = "http://localhost:3000/";
        },
      });
    });
  });