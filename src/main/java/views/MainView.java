package views;

import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;
import views.component.BoxRow;
import views.component.Box;
import views.component.MenuBanner;
import views.component.NavBar;
import views.mazes.mazeRecursiveDivision;

import java.util.ArrayList;



@Route("")
@PWA(name = "Path Finding", shortName = "Path Finding")
public class MainView extends VerticalLayout {
    private ArrayList<ArrayList<Box>> boxes;
    Box start, target;
    final int NUMROW = 21;
    final int NUMCOL = 51;
    private int speed = 5;

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
        for (ArrayList<Box> row : boxes)
            for (Box box : row)
                if (box.getStatus().equals("wall"))
                    box.setUnvisited();
    }

    public void resetBoard(){
        for (ArrayList<Box> row : boxes)
            for (Box box : row)
                    box.setUnvisited();
        setDefault();
    }

    public void changeSpeed(int newSpeed){
        this.speed = newSpeed;
        Notification noti = new Notification(String.format("Chage to speed %s", this.speed), 2000, Notification.Position.TOP_END);
        noti.open();
    }

    public void breadthFirstSearch() {
        ArrayList template = new ArrayList();
        template.add(start);
        template.add(new int[2]);
        ArrayList<Box> queue = new ArrayList<>();

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
//        makeMaze(maze.getMaze());

        // draw maze with animation
         makeAnimation(maze.getMaze(), "maze");
    }

    public void makeMaze(ArrayList<Box> maze) {
        for(Box box: maze){
            box.setWall();
        }
    }

    public void makeAnimation(ArrayList<Box> queue, String type) {
        int count = 20;
        boolean flag = true;
        for(Box box: queue){
            if(flag) {
                try {
                    Thread.sleep(500);
                    flag = false;
                } catch (InterruptedException e) {
                    System.out.println(e);
                }
            }
            String time = Integer.toString((count++) * this.speed + 500);
            box.getElement().getStyle().set("animation-delay", String.format("%sms", time));

            if(type.equals("maze"))
                box.setWall();
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
            ArrayList<Box> row = new ArrayList<>();
            for (int j = 0; j < NUMCOL; j++) {
                Box box = new Box();
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

        //create change event listener
        menu.speed.addValueChangeListener(event -> {
            if (event.getValue().toLowerCase().equals("fast"))
                changeSpeed(5);
            else if (event.getValue().toLowerCase().equals("medium"))
                changeSpeed(15);
            else if (event.getValue().toLowerCase().equals("slow"))
                changeSpeed(30);
        });

        // add button event listener
        menu.resetBoard.addClickListener(event -> {
            resetBoard();
        });
        menu.clearWall.addClickListener(event -> {
            clearWall();
        });
        menu.makeMaze.addClickListener(event -> {
            createMaze();
        });




    }
}


