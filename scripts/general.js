document.addEventListener("DOMContentLoaded", () => {
    
    let carrito = [];


   let productoTemporal = {};

   window.mostrarCombo = (nombre, precio) =>{
    productoTemporal = { nombre, precio };
    const modal = new bootstrap.Modal(document.getElementById('comboModal'));
    modal.show();

    document.getElementById("btn-con-combo").onclick = () => {
      agregarAlCarrito(productoTemporal.nombre + " (Combo)", productoTemporal.precio + 5000);
      modal.hide();
    };

    document.getElementById("btn-sin-combo").onclick = () => {
      agregarAlCarrito(productoTemporal.nombre, productoTemporal.precio);
      
      modal.hide();
    };
     };


    // Agregar producto al carrito
    window.agregarAlCarrito = (nombre, precio) => {
        if (!nombre || isNaN(precio) || precio <= 0) {
            alert("⚠️ Error al agregar el producto. Datos inválidos.");
            return;
        }

        carrito.push({ nombre, precio });
        mostrarConfirmacion(nombre);
        actualizarCarrito();
    };


    function mostrarConfirmacion(nombre) {
        const confirmText = document.getElementById("confirmText");
        confirmText.textContent = `✅ "${nombre}" ha sido seleccionado`;
    
        const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        modal.show();
    
        // Cerrar automáticamente en 1.5s
        setTimeout(() => modal.hide(), 1500);
    }
    
    // Agregar producto al carrito
    window.agregarAlCarritoV = (nombre, precio) => {
        if (!nombre || isNaN(precio) || precio <= 0) {
            alert("⚠️ Error al agregar el producto. Datos inválidos.");
            return;
        }
        carrito.push({ nombre, precio });
        actualizarCarrito();
        mostrarConfirmacion(nombre);
    };

    // Actualizar carrito en la UI
    function actualizarCarrito() {
        const cantidadCarrito = document.getElementById("cantidad-carrito");
        const cantidadCarrito2 = document.getElementById("cantidad-carrito2");
        const listaCarrito = document.getElementById("lista-carrito");
        const totalCarrito = document.getElementById("total-carrito");

        cantidadCarrito2.innerText = carrito.length;
        cantidadCarrito.innerText = carrito.length;
        listaCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((item, index) => {
            total += item.precio;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.nombre}</td>
                <td>💲${item.precio.toFixed(2)}</td>
                <td><button class='btn btn-danger btn-sm' onclick='eliminarDelCarrito(${index})'>❌</button></td>
            `;
            listaCarrito.appendChild(row);
        });

        totalCarrito.innerText = total.toFixed(2);
    }

    // Eliminar producto del carrito
    window.eliminarDelCarrito = (index) => {
        if (index < 0 || index >= carrito.length) {
            alert("⚠️ No se pudo eliminar el producto. Índice inválido.");
            return;
        }

        carrito.splice(index, 1);
        actualizarCarrito();
    };

    // Confirmar compra
    window.confirmarCompra = () => {
        const nombreInput = document.getElementById("nombreCliente");
        const telefonoInput = document.getElementById("telefonoCliente");
        const nombre = nombreInput.value.trim();
        const telefono = telefonoInput.value.trim();

        // Validaciones
        if (carrito.length === 0) {
            alert("⚠️ No puede finalizar la compra con el carrito vacío.");
            return;
        }

        if (!nombre.match(/^[a-zA-Z\s]+$/)) {
            alert("⚠️ Nombre inválido. Solo se permiten letras y espacios.");
            nombreInput.focus();
            return;
        }

        if (!telefono.match(/^\d{7,15}$/)) {
            alert("⚠️ Número de teléfono inválido. Debe contener entre 7 y 15 dígitos.");
            telefonoInput.focus();
            return;
        }

        alert(`✅ Gracias por su compra, ${nombre}. Nos comunicaremos al ${telefono}.`);
        let texto = carrito.map(item => `• ${item.nombre} - $${item.precio}`).join('\n');
        alert(texto);
        carrito = [];
        actualizarCarrito();

        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById("modalDatosCliente"));
        modal.hide();

        // Limpiar campos del formulario
        nombreInput.value = "";
        telefonoInput.value = "";
    };

    // Manejo del botón flotante del carrito
    const floatingCart = document.getElementById("floatingCart");
    const navbarToggler = document.querySelector(".navbar-toggler");

    function toggleFloatingCart() {
        if (window.innerWidth < 992 && !document.getElementById("navbarNav").classList.contains("show")) {
            floatingCart.style.display = "block";
        } else {
            floatingCart.style.display = "none";
        }
    }

    if (navbarToggler) {
        navbarToggler.addEventListener("click", toggleFloatingCart);
    }
    window.addEventListener("resize", toggleFloatingCart);
    toggleFloatingCart();
});

