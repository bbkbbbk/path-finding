package views.component;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

public class MenuBanner extends HorizontalLayout {
    public ComboBox<String> algorithms, mazes, speed;
    public Button visualize, makeMaze, resetBoard, clearPath, clearWall;
    public MenuBanner() {
        getStyle().set("align-items", "baseline");
        getStyle().set("margin-bottom", "40px");
        algorithms = new ComboBox<>("Algorithms");
        algorithms.setItems("Dijkstra's Algorithm", "A* Search", "Greedy Best-first Search", "Swarm Algorithm",
                "Convergent Swarm Algorithm", "Bidirectional Swarm Algorithm", "Breadth-first Search", "Depth-first Search");
        algorithms.setPlaceholder("Dijkstra's Algorithm");

        mazes = new ComboBox<>("Mazes");
        mazes.setItems("Recursive Division", "Basic Random Maze", "Basic Weight Maze", "Simple Stair Pattern");
        mazes.setPlaceholder("Recursive Division");

        speed = new ComboBox<>("Speed");
        speed.setItems("Fast", "Medium", "Slow");
        speed.setPlaceholder("Fast");

        visualize = new Button("Visualize");
        visualize.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        makeMaze = new Button("Make Maze");
        makeMaze.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        resetBoard = new Button("Reset Board");
        resetBoard.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        clearPath = new Button("Clear Path");
        clearPath.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        clearWall = new Button("Clear Wall");
        clearWall.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        add(algorithms);
        add(mazes);
        add(speed);
        add(visualize);
        add(makeMaze);
        add(resetBoard);
        add(clearPath);
        add(clearWall);
    }
}
