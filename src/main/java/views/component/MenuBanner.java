package views.component;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

public class MenuBanner extends HorizontalLayout {
    public ComboBox<String> algorithms, mazes, speed;
    public Button search, makeMaze, resetBoard, makePath, clearWall, clearPath;
    public MenuBanner() {
        getStyle().set("align-items", "baseline");
        getStyle().set("margin-bottom", "40px");
        algorithms = new ComboBox<>("Algorithms");
//        algorithms.setItems("Dijkstra's Algorithm", "A* Search", "Greedy Breadth-first Search", "Swarm Algorithm",
//                "Convergent Swarm Algorithm", "Bidirectional Swarm Algorithm", "Breadth-first Search", "Depth-first Search");
        algorithms.setItems("Dijkstra's Algorithm", "Greedy Breadth-first Search", "Breadth-first Search", "Depth-first Search");
        algorithms.setPlaceholder("Dijkstra's Algorithm");

        mazes = new ComboBox<>("Mazes");
        mazes.setItems("Recursive Division Maze", "Basic Random Maze", "Simple Stair Pattern");
        mazes.setPlaceholder("Recursive Division");

        speed = new ComboBox<>("Speed");
        speed.setItems("Fast", "Medium", "Slow");
        speed.setPlaceholder("Fast");

        search = new Button("Search");
        search.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        makeMaze = new Button("Make Maze");
        makeMaze.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        resetBoard = new Button("Reset Board");
        resetBoard.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        makePath = new Button("Make Path");
        makePath.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        makePath.setEnabled(false);

        clearWall = new Button("Clear Wall");
        clearWall.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        clearPath = new Button("Clear Path");
        clearPath.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        add(algorithms);
        add(mazes);
        add(speed);
        add(search);
        add(makePath);
        add(makeMaze);
        add(resetBoard);
        add(clearWall);
        add(clearPath);
    }
}
