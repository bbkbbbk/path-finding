package views;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;
import views.component.BoxRow;
import views.component.BoxUi;
import views.component.MenuBanner;
import views.component.NavBar;
import views.mazes.mazeRecursiveDivision;

import java.util.ArrayList;

@Route("")
@PWA(name = "Path Finding", shortName = "Path Finding")
public class MainView extends VerticalLayout {
    private ArrayList<ArrayList<BoxUi>> boxes;
    BoxUi start, target;
    final int NUMROW = 21;
    final int NUMCOL = 51;

    public BoxRow createRow (int index) {
        BoxRow row = new BoxRow();
        for(int i = 0; i < NUMCOL; i++)
            row.add(this.boxes.get(index).get(i));
        return row;
    }

    public void setDefault() {
        start = boxes.get(8).get(10);
        start.setStart();
        target = boxes.get(8).get(40);
        target.setTarget();
    }

    public void clearWall(){
        for (ArrayList<BoxUi> row : boxes)
            for (BoxUi box : row)
                if (box.getStatus().equals("wall"))
                    box.setUnvisited();

        try {
            Thread.sleep(20);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }

    public void breadthFirstSearch() {
        ArrayList template = new ArrayList();
        template.add(start);
        template.add(new int[2]);
        ArrayList<BoxUi> queue = new ArrayList<>();

        int[] dr = new int[]{-1, 1, 0, 0};
        int[] dc = new int[]{0, 0, 1, -1};
        int moveCount;
    }

    public void createMaze() {
        clearWall();
        mazeRecursiveDivision maze = new mazeRecursiveDivision(NUMROW / 2 , NUMCOL / 2, boxes);
        maze.makeMaze();
        maze.makeBound();

        // draw maze without animation (appears immediately)
        makeMaze(maze.getMaze());

        // draw maze with animation
        // makeAnimation(maze.getWallQueue(), "maze");
    }

    public void makeMaze(ArrayList<BoxUi> maze) {
        for(BoxUi box: maze){
            box.setWall();
        }
    }

    public void makeAnimation(ArrayList<BoxUi> queue, String type) {
        int count = 15;
        boolean flag = true;
        for(BoxUi box: queue){
            if(flag) {
                try {
                    Thread.sleep(1000);
                    flag = false;
                } catch (InterruptedException e) {
                    System.out.println(e);
                }
            }
            String time = Integer.toString((count++) * 10 + 1000);

            if(type.equals("maze")) {
                box.getElement().getStyle().set("animation-delay", String.format("%sms", time));
                box.setWall();
            }
        }

    }


    public MainView() {
        NavBar nav = new NavBar();
        MenuBanner menu = new MenuBanner();
        add(nav);
        add(menu);

        // create boxes
        boxes = new ArrayList<>();
        for (int i = 0; i < NUMROW; i++){
            ArrayList<BoxUi> row = new ArrayList<>();
            for (int j = 0; j < NUMCOL; j++) {
                BoxUi box = new BoxUi();
                box.setIndex(i, j);
                String id = String.format("%s-%s",i, j);
                box.setId(id);
                row.add(box);
            }
            boxes.add(row);
        }

        // add box to main view for display
        for (int i = 0; i < NUMROW; i++)
            add(createRow(i));

        // set default start and target box
        setDefault();

        // add button event listener
        menu.clearBoard.addClickListener(event -> {
            clearWall();
            setDefault();
        });
        menu.clearWall.addClickListener(event -> {
            clearWall();
        });
        menu.makeMaze.addClickListener(event -> {
            createMaze();
        });




    }
}
