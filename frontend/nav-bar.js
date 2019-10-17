import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `nav-bar`
 *
 * NavBar element.
 *
 * @customElement
 * @polymer
 */
class NavBar extends PolymerElement {

    static get template() {
        return html`
             <style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100vw; height: 60px; background: #00C6FF; margin: -1em">
 <span style="color: white; font-weight: bold; font-family: 'Helvetica Neue'; font-size: 24px; padding: 10px">Finding Path</span>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'nav-bar';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(NavBar.is, NavBar);
