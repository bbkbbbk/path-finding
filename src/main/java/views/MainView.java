
package views;

import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;
import views.component.BoxRow;
import views.component.Box;
import views.component.MenuBanner;
import views.component.NavBar;
import views.mazes.BasicRandomMaze;
import views.mazes.RecursiveDivisionMaze;
import views.mazes.StairMaze;

import java.util.*;


@Route("")
@PWA(name = "Path Finding", shortName = "Path Finding")
public class MainView extends VerticalLayout {
    private ArrayList<ArrayList<Box>> boxes;
//    private Box start = Variable.start;
//    private Box target = Variable.target;
    final int NUMROW = 21;
    final int NUMCOL = 51;
    private int speed = 5;
    private int algo_num, maze_num = 0;
    private boolean isFound = false;


    public BoxRow createRow (int index) {
        BoxRow row = new BoxRow();
        for(int i = 0; i < NUMCOL; i++)
            row.add(this.boxes.get(index).get(i));
        return row;
    }

    public void setDefault() {
        Variable.start = boxes.get(10).get(14);
        Variable.start.setStart();
        Variable.target = boxes.get(10).get(40);
        Variable.target.setTarget();
    }

    public void clearWall(){
        for (ArrayList<Box> row : boxes)
            for (Box box : row)
                if (box.getStatus().equals("wall"))
                    box.setUnvisited();
    }

    public void clearPath(){
        for (ArrayList<Box> row : boxes)
            for (Box box : row)
                if (box.getStatus().equals("visited") || box.getStatus().equals("shadow"))
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
    }

    //manhattan distance (4 directions)
    public int heuristic(Box node){
        int val = 0;
        int x = Math.abs(node.getIndexC() - Variable.target.getIndexC());
        int y = Math.abs(node.getIndexR() - Variable.target.getIndexR());
        val = x+y;
        return val;
    }

    public boolean greedyBFSearch(){
        System.out.println("BFS shortest path");
        PriorityQueue<Box> queue = new PriorityQueue<>();
        ArrayList<Box> result = new ArrayList<>();

        //enqueue start and set as visited
        Variable.start.setDist(0);
        Variable.start.setStatus("visited");
        queue.add(Variable.start);
        Box temp;
        Box sideBox;

        while(!queue.isEmpty()){
            temp = queue.remove();
            result.add(temp);
            if (temp == Variable.target){
                makeAnimation(result, "algo");
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

        makeAnimation(result, "algo");
        return false;
    }

    public void visitNodePriorityQueue(Box sideBox, Box temp, Queue queue){
        if (sideBox.getStatus() != "visited" && sideBox.getStatus() != "wall"){
            sideBox.setStatus("visited");
            sideBox.setDist(heuristic(sideBox));
            sideBox.setPre(temp);
            queue.add(sideBox);
        }
    }

    //for unweighted graph
    //does not check which vertex to visit next based on cost of path
    // because all of it is one.
    public boolean dijkstraAlgoSearch(){
        Queue<Box> queue = new LinkedList<>();
        ArrayList<Box> result = new ArrayList<>();

        //enqueue start and set as visited
        Variable.start.setDist(0);
        Box origin = Variable.start;
        Variable.start.setStatus("visited");
        queue.add(Variable.start);
        Box temp;
        Box sideBox;

        while(!queue.isEmpty()){
            temp = queue.remove();
            result.add(temp);
            if (temp == Variable.target){
                makeAnimation(result, "algo");
                return true;
            }
            temp.setStatus("visited");
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

        makeAnimation(result, "algo");
        return false;
    }

    public boolean breadthFirstSearch() {
        Queue<Box> queue = new LinkedList<>();
        ArrayList<Box> result = new ArrayList<>();

        //enqueue start and set as visited
        Variable.start.setDist(0);
        Variable.start.setStatus("visited");
        queue.add(Variable.start);
        Box temp;
        Box sideBox;

        while(!queue.isEmpty()){
            temp = queue.remove();
            result.add(temp);
            if (temp == Variable.target){
                makeAnimation(result, "algo");
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
        makeAnimation(result, "algo");
        return false;
    }

    public void visitNodeQueue(Box sideBox, Box temp,Queue queue){
        if (sideBox.getStatus() != "visited" && sideBox.getStatus() != "wall"){
            sideBox.setStatus("visited");
            sideBox.setDist(temp.getDist() +1);
            sideBox.setPre(temp);
            queue.add(sideBox);
        }
    }

    //does not guarantee shortest path, will only find a path to target
    //
    public boolean depthFirstSearch(){
        System.out.println("DFS shortest path");
        Stack<Box> stack = new Stack<Box>();
        ArrayList<Box> result = new ArrayList<>();

        //push start into stack and set as visited
        Variable.start.setDist(0);
        Variable.start.setStatus("visited");
        stack.push(Variable.start);
        Box temp;
        Box sideBox;

        while(!stack.isEmpty()){
            temp = stack.pop();
            if (temp == Variable.target){
                makeAnimation(result, "algo");
                return true;
            }
            temp.setStatus("visited");
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

        makeAnimation(result, "algo");
        return false;
    }

    public void visitNodeStack(Box sideBox, Box temp, Stack stack){
        if (sideBox.getStatus() != "visited" && sideBox.getStatus() != "wall"){
            sideBox.setStatus("visited");
            sideBox.setDist(temp.getDist()+1);
            sideBox.setPre(temp);
            stack.push(sideBox);
        }
    }




    //bug will print the last known shortest path if cannot reach target
    //need to reset predecessor nodes
    public ArrayList<Box> printShortestPath(){
        ArrayList<Box> queue = new ArrayList<>();
        Box temp;
        temp = Variable.target;
        while (temp != Variable.start){
            queue.add(0, temp);
            temp = temp.getPre();
        }
        return queue;
    }

    public void createMaze() {
        clearWall();
        Notification noti = new Notification("Make Maze", 2000, Notification.Position.TOP_END);
        switch (this.maze_num) {
            case 0:
                noti.setText("Make Recursive Division Maze");
                noti.open();
                RecursiveDivisionMaze recurMaze = new RecursiveDivisionMaze(NUMROW / 2 , NUMCOL / 2, boxes);
                recurMaze.makeMaze();
                recurMaze.makeBound();
                makeAnimation(recurMaze.getMaze(), "maze");
                break;
            case 1:
                noti.setText("Make Basic Random Maze");
                noti.open();
                BasicRandomMaze basicMaze = new BasicRandomMaze(NUMROW, NUMCOL, boxes);
                makeAnimation(basicMaze.getMaze(), "maze");
                break;
            case 2:
                noti.setText("Make Stair Maze");
                noti.open();
                StairMaze stairMaze = new StairMaze(NUMROW, NUMCOL, boxes);
                makeAnimation(stairMaze.getMaze(), "maze");
                break;

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

            else if(type.equals("algo")) {
                box.setVisited();
            }

            else if(type.equals("path")) {
                box.setShadow();
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

        //"Dijkstra's Algorithm", "A* Search", "Greedy Best-first Search", "Swarm Algorithm",
        //"Convergent Swarm Algorithm", "Bidirectional Swarm Algorithm", "Breadth-first Search", "Depth-first Search"
        menu.algorithms.addValueChangeListener(event -> {
            if (event.getValue().equals("Dijkstra's Algorithm")){
                this.algo_num = 0;
            }
            else if (event.getValue().equals("A* Search")){
                this.algo_num = 1;
            }
            else if (event.getValue().equals("Greedy Breadth-first Search")){
                this.algo_num = 2;
            }
            else if (event.getValue().equals("Swarm Algorithm")){
                this.algo_num = 3;
            }
            else if (event.getValue().equals("Convergent Swarm Algorithm")){
                this.algo_num = 4;
            }
            else if (event.getValue().equals("Bidirectional Swarm Algorithm")){
                this.algo_num = 5;
            }
            else if (event.getValue().equals("Breadth-first Search")){
                this.algo_num = 6;
            }
            else if (event.getValue().equals("Depth-first Search")){
                this.algo_num = 7;
            }

        });

        menu.mazes.addValueChangeListener(event -> {
            if (event.getValue().equals("Recursive Division Maze"))
                this.maze_num = 0;
            else if (event.getValue().equals("Basic Random Maze"))
                this.maze_num = 1;
            else if (event.getValue().equals("Simple Stair Pattern"))
                this.maze_num = 2;
        });

        // add button event listener
        menu.resetBoard.addClickListener(event -> {
            Notification noti = new Notification("Reset Board", 5000, Notification.Position.TOP_END);
            noti.open();
            resetBoard();
            menu.makePath.setEnabled(false);
        });

        menu.clearWall.addClickListener(event -> {
            Notification noti = new Notification("Clear Wall", 5000, Notification.Position.TOP_END);
            noti.open();
            clearWall();
            menu.makePath.setEnabled(false);
        });

        menu.clearPath.addClickListener(event -> {
            Notification noti = new Notification("Clear Path", 5000, Notification.Position.TOP_END);
            noti.open();
            clearPath();
            menu.makePath.setEnabled(false);
        });

        menu.makeMaze.addClickListener(event -> {
            createMaze();
        });

        menu.search.addClickListener(event ->{
            Notification noti = new Notification("Algorithm", 5000, Notification.Position.TOP_END);
            switch(algo_num){
                case 0:
                    noti.setText("Dijkstra Algorithm Search, Guarantees the shortest path!");
                    noti.open();
                    this.isFound = dijkstraAlgoSearch();
                    break;
                case 1:
                    break;
                case 2:
                    noti.setText("Greedy Algorithm Search, Does not guarantee the shortest path!");
                    noti.open();
                    this.isFound = greedyBFSearch();
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    noti.setText("Breadth First Search Algorithm Search, Guarantees the shortest path!");
                    noti.open();
                    this.isFound = breadthFirstSearch();
                    break;
                case 7:
                    noti.setText("Depth First Search Algorithm Search, Does not guarantee the shortest path!");
                    noti.open();
                    this.isFound = depthFirstSearch();
                    break;
                default:
                    this.isFound = false;
            }
            Variable.start.setStart();
            Variable.target.setTarget();
            if (this.isFound) {
                menu.makePath.setEnabled(true);
            }
        });

        menu.makePath.addClickListener(event -> {
            Notification noti = new Notification("Find path", 2000, Notification.Position.TOP_END);
            if (this.isFound) {
                noti.setText("Shortest path found");
                noti.open();
                makeAnimation(printShortestPath(), "path");
                Variable.start.setStart();
                Variable.target.setTarget();
            } else {
                noti.setText("Shortest path not found");
                noti.open();
            }
        });




    }
}