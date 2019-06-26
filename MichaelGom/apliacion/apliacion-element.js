import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `apliacion-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ApliacionElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'apliacion-element',
      },
    };
  }
}

window.customElements.define('apliacion-element', ApliacionElement);
