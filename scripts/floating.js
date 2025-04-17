document.addEventListener("DOMContentLoaded", () => {
    const floatingCart = document.getElementById("floatingCart");

    function mostrarFloatingCart() {
        if (!floatingCart) return;
        floatingCart.style.display = "block";
    }

    window.addEventListener("resize", mostrarFloatingCart);
    mostrarFloatingCart(); // mostrar desde inicio
});
