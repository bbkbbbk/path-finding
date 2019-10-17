package views.component;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the nav-bar template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("nav-bar")
@JsModule("./nav-bar.js")
public class NavBar extends PolymerTemplate<NavBar.NavBarModel> {

    /**
     * Creates a new NavBar.
     */
    public NavBar() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between NavBar and nav-bar
     */
    public interface NavBarModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
