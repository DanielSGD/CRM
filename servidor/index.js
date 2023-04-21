//Paquetes y módulos
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");


//Conexión con la BD
mongoose
  .connect(
    "mongodb+srv://garzond821:Westcon2019.@cluster0.i8iymdk.mongodb.net/customerRM?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado con la BD");
  })
  .catch(function (err) {
    console.log(err);
  });

  //Configuración
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));
const Cliente = require("./models/rClientes");
const Contacto = require("./models/rContactos");
//Ruta ----> INICIO
app.get("/", function (req, res) {
    res.sendFile(path.resolve("../cliente/listado_cliente.html"));
  });


//Ruta ----> Registro Clientes
app.get("/registroClientes", function (req, res) {
    res.sendFile(path.resolve("../cliente/registro_clientes.html"));
  });
//Ruta ----> guardar datos en la BD clientes
app.post("/registroClientes", async function (req, res) {
    let datos_registros = req.body;
    let nuevo_registro = new Cliente(datos_registros);
    await nuevo_registro.save();

    res.send("Registro exitoso");
    console.log(nuevo_registro)
  });
  //Ruta ----> optener datos de la BD clientes 
  app.post("/", async function (req, res) {
    let docs = await Cliente.find();
  res.send(docs);
  });
  //Ruta ----> Eliminar un dato de la BD clientes
app.delete("/eliminar/:id", async function (req, res) {
  let id_enviado = req.params.id;
  await Cliente.findByIdAndRemove(id_enviado);
  res.send("Cliente eliminado Correctamente");
});
//Ruta ----> Registro Contacto
app.get("/registroContacto", function (req, res) {
  res.sendFile(path.resolve("../cliente/registro_contacto.html"));
});

//Ruta ----> optener datos de la BD clientes para la bd contactos
app.post("/registroContacto", async function (req, res) {
  let docs = await Cliente.find();
res.send(docs);
});
// Ruta -----> para guardar datos en la BD Contacto
app.post("/envioContacto", async function (req, res) {
  let datos_Contacto = req.body;
  let nuevo_Contacto = new Contacto(datos_Contacto);
  await nuevo_Contacto.save();

  res.send("Contacto regristrado");
  console.log(nuevo_Contacto)
});

//Ruta ----> lista de contactos
app.get("/ListaContacto", function (req, res) {
  res.sendFile(path.resolve("../cliente/listado_contacto.html"));
});
//Ruta ----> optener datos de la BD clientes para la bd contactos
app.post("/ListaContacto", async function (req, res) {
  let docs = await Contacto.find();
res.send(docs);
});

  //Ruta ----> Eliminar un dato de la BD Contacto
  app.delete("/ListaContacto/:id", async function (req, res) {
    let id_enviado = req.params.id;
    await Contacto.findByIdAndRemove(id_enviado);
    res.send("Contacto eliminado Correctamente");
  });

//Puerto y escucha del servidor
app.listen(3000, function () {
    console.log("--------------------------------------");
    console.log("Servidor funcionando corrrrrrrrrrectamente");
  });