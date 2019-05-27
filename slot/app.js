
  class Demo extends HTMLElement {
    constructor() {
      super();

      const noContent = `У меня нет содержимого :(`;

      this.attachShadow({mode: "open"});
      this.shadowRoot.innerHTML = `
        <section id="red"><slot name="red">${noContent}</slot></section>
        <section id="white"><slot>${noContent}</slot></section>
        <section id="black"><slot name="black">${noContent}</slot></section>
        <section id="yellow"><slot name="yellow">${noContent}</slot></section>
        <style>
          :host {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-wrap: wrap;
          }
          section {
            height: 50%;
            width: 50%;
          }
          #white {
            background-color: white;
          }
          #red {
            background-color: red;
          }
          #black {
            background-color: black;
            color: white;
          }
          #yellow {
            background-color: yellow;
          }
        </style>
      `;

    }
  }

  customElements.define("x-demo", Demo);
