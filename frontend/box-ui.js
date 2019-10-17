import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class BoxUi extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
                .box {
                    height: 25px;
                    width: 25px;
                }
            </style>
<div on-click="handleClick" on-dragover="handleEvent" class="box"></div>
`;
    }

    static get is() {
        return 'box-ui';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }

}

customElements.define(BoxUi.is, BoxUi);
