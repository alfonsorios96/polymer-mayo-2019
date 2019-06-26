import { html, LitElement } from 'lit-element';
import style from './my-cat-styles.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-card/paper-card.js';
import '@google-web-components/google-chart';

class MyCat extends LitElement {
  static get properties() {
    return {
      hello: { 
        type: String,
        hasChanged (newValue, oldValue) {
          return newValue.length > 8;
        }
       },
      myBoolean: { 
        type: Boolean,
        attribute: 'mi-patito'
       },
      superArray: { type: Array},
      dataChart: { type: Array}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello World!';
    this.dataChart = [["Month", "Days"], ["Jan", 31]];
    this.myBoolean = false;
    this.superArray = [
      {
        name: 'Alfonso'
      },
      {
        name: 'Otros'
      }
    ];
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} my-cat</h2>
        <google-chart .data="${this.dataChart}"></google-chart>
        ${
          this.superArray.map(item => {
            return html`
            <paper-card heading="${item.name}">
              <paper-input label="My input"></paper-input>
              <paper-button @click="${this._handler}">Click</paper-button>
            </paper-card>
          `;
          })
        }

        ${
          this.myBoolean ? html`<p>Soy verdadero</p>` : html`<p>No soy verdadero</p>`
        }
      `;
    }

    _handler() {
      this.myBoolean = !this.myBoolean;
    }

    updated(propertiesChanged) {
      if(propertiesChanged.has('myBoolean')) {
        console.log('my Boolean cambió');
      }
      if(propertiesChanged.has('hello')) {
        console.log('El String cambió y sí nos importa que cambió.');
      }
    }
}

window.customElements.define("my-cat", MyCat);
