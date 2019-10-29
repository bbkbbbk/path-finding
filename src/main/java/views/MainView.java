package views;

import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;
import views.component.BoxRow;
import views.component.BoxUi;
import views.component.MenuBanner;
import views.component.NavBar;
import views.mazes.mazeRecursiveDivision;

import java.util.*;


@Route("")
@PWA(name = "Path Finding", shortName = "Path Finding")
public class MainView extends VerticalLayout {
    private ArrayList<ArrayList<BoxUi>> boxes;
    BoxUi start, target;
    final int NUMROW = 21;
    final int NUMCOL = 51;
    private int speed = 5;
    private int algo_num = 0;

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
    }

    public void resetBoard(){
        for (ArrayList<BoxUi> row : boxes)
            for (BoxUi box : row)
                    box.setUnvisited();
        setDefault();
    }

    public void changeSpeed(int newSpeed){
        this.speed = newSpeed;
        Notification noti = new Notification(String.format("Chage to speed %s", this.speed), 2000, Notification.Position.TOP_END);
        noti.open();
    }

    //manhattan distance (4 directions)
    public int heuristic(BoxUi node){
        int val = 0;
        int x = Math.abs(node.getIndexC()-target.getIndexC());
        int y = Math.abs(node.getIndexR()-target.getIndexR());
        val = x+y;
        return val;
    }

    public boolean greedyBFSearch(){
        System.out.println("BFS shortest path");
        PriorityQueue<BoxUi> queue = new PriorityQueue<>();

        //enqueue start and set as visited
        start.setDist(0);
        start.setVisited();
        queue.add(start);
        BoxUi temp;
        BoxUi sideBox;

        while(!queue.isEmpty()){
            temp = queue.remove();
            if (temp == target){
                return true;
            }

            int row = temp.getIndexR();
            int col = temp.getIndexC();


            //enqueue bottom box
            if (row < NUMROW-1) {
                sideBox = boxes.get(row+1).get(col);
                visitNodePriorityQueue(sideBox,temp,queue);
            }
            //enqueue above box
            if (row > 0) {
                sideBox = boxes.get(row-1).get(col);
                visitNodePriorityQueue(sideBox,temp,queue);
            }
            //enqueue box right
            if (col < NUMCOL-1) {
                sideBox = boxes.get(row).get(col+1);
                visitNodePriorityQueue(sideBox,temp,queue);
            }
            //enqueue box left
            if (col > 0) {
                sideBox = boxes.get(row).get(col-1);
                visitNodePriorityQueue(sideBox,temp,queue);
            }

        }
        return false;
    }

    public void visitNodePriorityQueue(BoxUi sideBox, BoxUi temp,Queue queue){
        if (sideBox.getStatus() != "visited" && sideBox.getStatus() != "wall"){
            sideBox.setVisited();
            sideBox.setDist(heuristic(sideBox));
            sideBox.setPre(temp);
            queue.add(sideBox);
        }
    }

    //for unweighted graph
    //does not check which vertex to visit next based on cost of path
    // because all of it is one.
    public boolean dijkstraAlgoSearch(){
        Queue<BoxUi> queue = new LinkedList<>();

        //enqueue start and set as visited
        start.setDist(0);
        start.setVisited();
        queue.add(start);
        BoxUi temp;
        BoxUi sideBox;

        while(!queue.isEmpty()){
            temp = queue.remove();
            if (temp == target){
                return true;
            }
            temp.setVisited();
            int row = temp.getIndexR();
            int col = temp.getIndexC();

            //enqueue above box
            if (row > 0) {
                sideBox = boxes.get(row-1).get(col);
                visitNodeQueue(sideBox,temp,queue);
            }

            //enqueue bottom box
            if (row < NUMROW-1) {
                sideBox = boxes.get(row+1).get(col);
                visitNodeQueue(sideBox,temp,queue);
            }

            //enqueue box left
            if (col > 0) {
                sideBox = boxes.get(row).get(col-1);
                visitNodeQueue(sideBox,temp,queue);
            }

            //enqueue box right
            if (col < NUMCOL-1) {
                sideBox = boxes.get(row).get(col+1);
                visitNodeQueue(sideBox,temp,queue);
            }

        }
        return false;
    }

    public boolean breadthFirstSearch() {
        Queue<BoxUi> queue = new LinkedList<>();

        //enqueue start and set as visited
        start.setDist(0);
        start.setVisited();
        queue.add(start);
        BoxUi temp;
        BoxUi sideBox;

        while(!queue.isEmpty()){
            temp = queue.remove();
            if (temp == target){
                return true;
            }
            int row = temp.getIndexR();
            int col = temp.getIndexC();

            //enqueue above box
            if (row > 0) {
                sideBox = boxes.get(row-1).get(col);
                visitNodeQueue(sideBox,temp,queue);
            }

            //enqueue bottom box
            if (row < NUMROW-1) {
                sideBox = boxes.get(row+1).get(col);
                visitNodeQueue(sideBox,temp,queue);
            }

            //enqueue box left
            if (col > 0) {
                sideBox = boxes.get(row).get(col-1);
                visitNodeQueue(sideBox,temp,queue);
            }

            //enqueue box right
            if (col < NUMCOL-1) {
                sideBox = boxes.get(row).get(col+1);
                visitNodeQueue(sideBox,temp,queue);
            }

        }
        return false;
    }

    public void visitNodeQueue(BoxUi sideBox, BoxUi temp,Queue queue){
        if (sideBox.getStatus() != "visited" && sideBox.getStatus() != "wall"){
            sideBox.setVisited();
            sideBox.setDist(temp.getDist() +1);
            sideBox.setPre(temp);
            queue.add(sideBox);
        }
    }

    //does not guarantee shortest path, will only find a path to target
    //
    public boolean depthFirstSearch(){
        System.out.println("DFS shortest path");
        Stack<BoxUi> stack = new Stack<BoxUi>();

        //push start into stack and set as visited
        start.setDist(0);
        start.setVisited();
        stack.push(start);
        BoxUi temp;
        BoxUi sideBox;

        while(!stack.isEmpty()){
            temp = stack.pop();
            if (temp == target){
                return true;
            }
            temp.setVisited();
            int row = temp.getIndexR();
            int col = temp.getIndexC();

            //push above box
            if (row > 0) {
                sideBox = boxes.get(row-1).get(col);
                visitNodeStack(sideBox,temp,stack);
            }

            //push bottom box
            if (row < NUMROW-1) {
                sideBox = boxes.get(row+1).get(col);
                visitNodeStack(sideBox,temp,stack);
            }


            //push box left
            if (col > 0) {
                sideBox = boxes.get(row).get(col-1);
                visitNodeStack(sideBox,temp,stack);
            }


            //push box right
            if (col < NUMCOL-1) {
                sideBox = boxes.get(row).get(col+1);
                visitNodeStack(sideBox,temp,stack);
            }

        }

        return false;
    }

    public void visitNodeStack(BoxUi sideBox, BoxUi temp, Stack stack){
        if (sideBox.getStatus() != "visited" && sideBox.getStatus() != "wall"){
            sideBox.setVisited();
            sideBox.setDist(temp.getDist()+1);
            sideBox.setPre(temp);
            stack.push(sideBox);
        }
    }




    //bug will print the last known shortest path if cannot reach target
    //need to reset predecessor nodes
    public void printShortestPath(){
        BoxUi temp;
        temp = target;
        while (temp != start){
            temp.setShadow();
            temp = temp.getPre();
        }

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

    public void makeMaze(ArrayList<BoxUi> maze) {
        for(BoxUi box: maze){
            box.setWall();
        }
    }

    public void makeAnimation(ArrayList<BoxUi> queue, String type) {
        int count = 20;
        boolean flag = true;
        for(BoxUi box: queue){
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

        //create change event listener
        menu.speed.addValueChangeListener(event -> {
            if (event.getValue().toLowerCase().equals("fast"))
                changeSpeed(5);
            else if (event.getValue().toLowerCase().equals("medium"))
                changeSpeed(15);
            else if (event.getValue().toLowerCase().equals("slow"))
                changeSpeed(30);
        });

        //"Dijkstra's Algorithm", "A* Search", "Greedy Best-first Search", "Swarm Algorithm",
        //"Convergent Swarm Algorithm", "Bidirectional Swarm Algorithm", "Breadth-first Search", "Depth-first Search"
        menu.algorithms.addValueChangeListener(event -> {
            if (event.getValue().toString().equals("Dijkstra's Algorithm")){
                System.out.println("Dijkstra's Algorithm");
                this.algo_num = 0;
            }
            else if (event.getValue().toString().equals("A* Search")){
                System.out.println("A* Search");
                this.algo_num = 1;
            }
            else if (event.getValue().toString().equals("Greedy Best-first Search")){
                System.out.println("Greedy Best-first Search");
                this.algo_num = 2;
            }
            else if (event.getValue().toString().equals("Swarm Algorithm")){
                System.out.println("Swarm Algorithm");
                this.algo_num = 3;
            }
            else if (event.getValue().toString().equals("Convergent Swarm Algorithm")){
                System.out.println("Convergent Swarm Algorithm");
                this.algo_num = 4;
            }
            else if (event.getValue().toString().equals("Bidirectional Swarm Algorithm")){
                System.out.println("Bidirectional Swarm Algorithm");
                this.algo_num = 5;
            }
            else if (event.getValue().toString().equals("Breadth-first Search")){
                System.out.println("Breadth-first Search");
                this.algo_num = 6;
            }
            else if (event.getValue().toString().equals("Depth-first Search")){
                System.out.println("Depth-first Search");
                this.algo_num = 7;
            }

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

        menu.visualize.addClickListener(event ->{
            boolean found = false;

            switch(algo_num){
                case 0:
                    found = dijkstraAlgoSearch();
                    break;
                case 1:
                    break;
                case 2:
                    found = greedyBFSearch();
                    break;
                case 3:

                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    found = breadthFirstSearch();
                    break;
                case 7:
                    found = depthFirstSearch();
                    break;
                default:
                    found = false;
            }

            if (found){
                printShortestPath();
            }
        });




    }
}


