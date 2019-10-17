package views.component;

import com.vaadin.flow.component.*;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.polymertemplate.EventHandler;
import com.vaadin.flow.templatemodel.TemplateModel;


/**
 * A Designer generated component for the box-ui template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */


@Tag("div")
//@Tag("box-ui")
//@JsModule("./box-ui.js")
@CssImport("./styles/nodeStyle.css")
//public class BoxUi extends PolymerTemplate<BoxUi.BoxUiModel> {
public class BoxUi extends Component {
    private String status;
    private int indexR, indexC;

    public BoxUi() {
        getElement().getStyle().set("width", "25px");
        getElement().getStyle().set("height", "25px");
        setUnvisited();

        getElement().addEventListener("click", e -> {
            handleClick();
        });

    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String s){ this.status = s;}

    public void setIndex(int r, int c) {
        indexR = r;
        indexC = c;
    }

    public int getIndexR() {
        return indexR;
    }

    public int getIndexC() {
        return indexC;
    }

    public int[] getIndex() {
        return new int[]{indexR, indexC};
    }

    public void setUnvisited() {
        getElement().getStyle().set("animation-delay", "0ms");
        getElement().getClassList().remove("wall");
        getElement().getClassList().add("unvisited");
        status = "unvisited";
    }

    public void setVisited() {
        getElement().getStyle().set("background", "green");
        getElement().getStyle().set("border", "1px solid rgb(175, 216, 248)");
        status = "visited";
    }

    public void setStart() {
        getElement().getStyle().set("background", "yellow");
        getElement().getStyle().set("border", "1px solid rgb(175, 216, 248)");
        status = "start";
    }

    public void setTarget() {
        getElement().getStyle().set("background", "red");
        getElement().getStyle().set("border", "1px solid rgb(175, 216, 248)");
        status = "target";
    }


    public void setWall() {
        getElement().getClassList().remove("unvisited");
        getElement().getClassList().add("wall");
        status = "wall";
    }

    @EventHandler
    public void handleEvent() {
        if(status.equals("unvisited"))
            setWall();
    }

    @EventHandler
    public void handleClick() {
        if(status.equals("unvisited"))
            setWall();
        else if (status.equals("wall"))
            setUnvisited();
    }

    public interface BoxUiModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }

}
