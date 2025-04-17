// navbar-component.js
class navbarComponent extends HTMLElement {
    connectedCallback() {
      fetch('componentes/navbar.html')
        .then(response => response.text())
        .then(data => {
          this.innerHTML = data;
        });
    }
  }
  customElements.define('navbar-component', navbarComponent);