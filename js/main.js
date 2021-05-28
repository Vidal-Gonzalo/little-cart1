let inicio = document.getElementById("inicio");
let carrito = document.getElementById("carrito");
let listaCarrito = document.getElementById("listaCarrito");
let pantallaDetalle = document.getElementById("pantallaDetalle");
let plus = document.getElementById("plus");

let botonAgregar = document
  .getElementById("add")
  .addEventListener("click", function () {
    let producto = document.getElementById("pantallaCargaProducto").value;
    let icono = document.getElementById("pantallaCargaIcono").value;
    let info = document.getElementById("pantallaCargaDescripcion").value;
    document.getElementById("pantallaCargaProducto").value = "";
    document.getElementById("pantallaCargaIcono").value = "";
    document.getElementById("pantallaCargaDescripcion").value = "";
    if (producto == "" || icono == "" || info == "") {
      alert("¡Quedaron campos sin rellenar!");
      return false;
    }
    let modelo = `<li class="listaProductos list-group-item" data-producto="${producto}" data-icono="${icono}" data-info="${info}"><img class="pantallaListado__icono" alt="${producto}" src="${icono}">${producto}</li>`;
    listaCarrito.innerHTML += modelo;
    inicio.style.display = "none";
    carrito.style.display = "block";
  });

let abrirDetalle = document
  .getElementById("listaCarrito")
  .addEventListener("click", function (e) {
    document.getElementById("titulo_detalle").innerHTML =
      e.target.getAttribute("data-producto");
    document.getElementById("detalle_icono").src =
      e.target.getAttribute("data-icono");
    document.getElementById("detalle_detalle").innerHTML =
      e.target.getAttribute("data-info");
    carrito.style.display = "none";
    pantallaDetalle.style.display = "block";
    plus.style.display = "none";
  });

let pantallaDetalleCerrar = document
  .getElementById("pantallaDetalleCerrar")
  .addEventListener("click", function () {
    carrito.style.display = "block";
    pantallaDetalle.style.display = "none";
    plus.style.display = "block";
  });
