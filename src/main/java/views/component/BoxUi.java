package views.component;

import com.vaadin.flow.component.*;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.templatemodel.TemplateModel;
import org.vaadin.stefan.dnd.drag.DragSourceExtension;
import org.vaadin.stefan.dnd.drop.DropTargetExtension;
import views.Variable;


/**
 * A Designer generated component for the box-ui template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */


@Tag("div")
@CssImport("./styles/nodeStyle.css")
public class BoxUi extends Component implements Comparable {
    private String status;
    private int indexR, indexC;
    private final String WALL = "wall";
    private final String UNVISITED = "unvisited";
    private final String VISITED = "visited";
    private final String START = "start";
    private final String TARGET = "target";
    private final String SHADOW = "shadow";
    //added two vars to BoxUi : distance and predecessor(for shortest path search)
    private int dist = Integer.MAX_VALUE;
    private BoxUi pre;



    public BoxUi() {
        getElement().getStyle().set("width", "25px");
        getElement().getStyle().set("height", "25px");
        setUnvisited();

        getElement().addEventListener("click", e -> {
            handleClick();
        });

        DragSourceExtension<BoxUi> extend = DragSourceExtension.extend(this);
        extend.addDragStartListener(event -> {
            if (event.getComponent().getStatus().equals(START))
                Variable.isStart = true;
            else if (event.getComponent().getStatus().equals(TARGET))
                Variable.isTarget = true;
            else {
                Variable.isStart = false;
                Variable.isTarget = false;
            }
        });

        // BUG when start or target node drag over one another -> the node under will be set to unvisited
        // why? bc the condition for drag leave will set everything apart from wall to unvisited
        // BUG when start or target node being drag away to fast then the origin location (BoxUI) won't be set to visited
        // which result in more then one start and target node
        // BUG when start or target node is drag and drop into the position where there's no present of DropTargetExtension
        // (out of the grid and the origin position has already set to unvisited after dropping then the start and target
        // node will disappear bc it's origin has changed to unvisited
        DropTargetExtension<BoxUi> dropTargetExtension = DropTargetExtension.extend(this);
        dropTargetExtension.addDragEnterListener(event -> {
            event.getDragSource().ifPresent(e -> {
                event.getComponent().getElement().getStyle().set("animation-delay", "0ms");
                if (Variable.isStart || Variable.isTarget)
                    event.getComponent().setShadow();
                else
                    if (!(event.getComponent().getStatus().equals(START) || event.getComponent().getStatus().equals(TARGET)))
                        event.getComponent().setWall();
            });
        });

        dropTargetExtension.addDragLeaveListener(event -> {
            event.getDragSource().ifPresent(e -> {
                if (!event.getComponent().getStatus().equals(WALL))
                    event.getComponent().setUnvisited();
            });
        });

        dropTargetExtension.addDropListener(event -> {
            event.getDragSource().ifPresent(e -> {
                if (Variable.isStart)
                    event.getComponent().setStart();
                else if (Variable.isTarget)
                    event.getComponent().setTarget();
                Variable.isStart = false;
                Variable.isTarget = false;
            });
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

    public int getDist() {
        return dist;
    }

    public void setDist(int dist) {
        this.dist = dist;
    }

    public BoxUi getPre() {
        return pre;
    }

    public void setPre(BoxUi pre) {
        this.pre = pre;
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

    private void clearStyle(){
        if (getElement().getClassList().contains(WALL))
            getElement().getClassList().remove(WALL);
        if (getElement().getClassList().contains(SHADOW))
            getElement().getClassList().remove(SHADOW);
        if (getElement().getClassList().contains(TARGET))
            getElement().getClassList().remove(TARGET);
        if (getElement().getClassList().contains(UNVISITED))
            getElement().getClassList().remove(UNVISITED);
        if (getElement().getClassList().contains(VISITED))
            getElement().getClassList().remove(VISITED);
        if (getElement().getClassList().contains(START))
            getElement().getClassList().remove(START);
    }

    public void setShadow() {
        if(!status.equals(WALL)){
            clearStyle();
            getElement().getClassList().add(SHADOW);
        }
    }

    public void setUnvisited() {
        clearStyle();
        getElement().getClassList().add(UNVISITED);
        status = UNVISITED;
    }

    public void setVisited() {
        clearStyle();
       getElement().getClassList().add(VISITED);
        status = VISITED;
    }

    public void setStart() {
        clearStyle();
        getElement().getClassList().add(START);
        status = START;
    }

    public void setTarget() {
        clearStyle();
        getElement().getClassList().add(TARGET);
        status = TARGET;
    }


    public void setWall() {
        clearStyle();
        getElement().getClassList().add(WALL);
        status = WALL;
    }

    public void handleClick() {
        getElement().getStyle().set("animation-delay", "0ms");
        if(status.equals(UNVISITED))
            setWall();
        else if (status.equals(WALL))
            setUnvisited();
    }

    //used for priority queue in greedy algorithm
    @Override
    public int compareTo(Object o) {
        if(this.dist > ((BoxUi)o).dist) return 1;
        if(this.dist < ((BoxUi)o).dist) return -1;
        else                   return 0;
    }

    public interface BoxUiModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }

}
