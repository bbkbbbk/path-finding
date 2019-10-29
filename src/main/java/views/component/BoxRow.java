package views.component;

import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

public class BoxRow extends HorizontalLayout {

    public BoxRow() {
        setWidth("100%");
        setSpacing(false);
        getStyle().set("margin", "0");
        setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
    }
}
