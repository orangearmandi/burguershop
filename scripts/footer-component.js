// footer-component.js
class FooterComponent extends HTMLElement {
    connectedCallback() {
      fetch('footer.html')
        .then(response => response.text())
        .then(data => {
          this.innerHTML = data;
        });
    }
  }
  customElements.define('footer-component', FooterComponent);