const div = document.createElement('div');
div.innerHTML = '<custom-style><style include="lumo-color lumo-typography"></style></custom-style>';
document.head.insertBefore(div.firstElementChild, document.head.firstChild);

function addCssBlock(block) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head.appendChild(tpl.content);
}
import $css_0 from 'Frontend/styles/nodeStyle.css';
addCssBlock(`<custom-style><style>${$css_0}</style></custom-style>`);

import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/flow-frontend/flow-component-renderer.js';
import '@vaadin/flow-frontend/comboBoxConnector-es6.js';
import '@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button.js';
import '@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js';
import '@vaadin/flow-frontend/comboBoxConnector.js';
import 'Frontend/nav-bar.js';