package views.mazes;

import com.vaadin.flow.component.notification.Notification;
import views.component.Box;
import java.util.*;

public class RecursiveDivisionMaze {

    int rows;
    int cols;
    int act_rows;
    int act_cols;

    ArrayList<ArrayList<Box>> board;
    ArrayList<Box> wallQueue; // adding the queue for box to be animated


    public RecursiveDivisionMaze(int row, int col, ArrayList<ArrayList<Box>> boxes) {

        //initialize instance variables
        rows = row * 2 + 1;
        cols = col * 2 + 1;
        act_rows = row;
        act_cols = col;
        board = boxes;

        wallQueue = new ArrayList<>();

    }

    public ArrayList<Box> getMaze() {
        return wallQueue;
    }

    // set the border boxes to wall
    public void makeBound(){
        for(int i=0; i<rows; i++){
            wallQueue.add(board.get(i).get(0));
            wallQueue.add(board.get(i).get(cols - 1));
        }

        for(int i=0; i<cols; i++){
            wallQueue.add(board.get(0).get(i));
            wallQueue.add(board.get(rows - 1).get(i));
        }
    }

    // storefront method to make the maze
    public void makeMaze() {
        makeMaze(0,cols - 1,0,rows - 1);
        makeOpenings();
    }

    // behind the scences actual mazemaking
    private void makeMaze(int left, int right, int top, int bottom) {
        int width = right-left;
        int height = bottom-top;

        // makes sure there is still room to divide, then picks the best
        // direction to divide into
        if(width > 2 && height > 2){

            if(width > height)
                divideVertical(left, right, top, bottom);

            else if(height > width)
                divideHorizontal(left, right, top, bottom);

            else if(height == width){
                Random rand = new Random();
                boolean pickOne = rand.nextBoolean();

                if(pickOne)
                    divideVertical(left, right, top, bottom);
                else
                    divideHorizontal(left, right, top, bottom);
            }
        } else if(width > 2 && height <= 2) {
            divideVertical(left, right, top, bottom);
        } else if(width <= 2 && height > 2) {
            divideHorizontal(left, right, top, bottom);
        }
    }

    private void divideVertical(int left, int right, int top, int bottom) {
        Random rand = new Random();

        // find a random point to divide at
        // must be even to draw a wall there
        int divide =  left + 2 + rand.nextInt((right - left - 1) / 2) * 2;

        //draw a line at the halfway point
        for(int i=top; i<bottom; i++) {
            if (board.get(i).get(divide).getStatus().equals("start") || board.get(i).get(divide).getStatus().equals("target"))
                continue;
            wallQueue.add(board.get(i).get(divide));
        }

        // get a random odd integer between top and bottom and clear it
        int clearSpace = top + rand.nextInt((bottom - top ) / 2) * 2 + 1;

        if(!(board.get(clearSpace).get(divide).getStatus().equals("start") || board.get(clearSpace).get(divide).getStatus().equals("target"))) {
            wallQueue.remove(board.get(clearSpace).get(divide));
        }
        makeMaze(left, divide, top, bottom);
        makeMaze(divide, right, top, bottom);
    }

    private void divideHorizontal(int left, int right, int top, int bottom) {
        Random rand = new Random();

        // find a random point to divide at
        // must be even to draw a wall there
        int divide =  top + 2 + rand.nextInt((bottom - top - 1) / 2) * 2;
        if(divide % 2 == 1)
            divide++;

        // draw a line at the halfway point
        for(int i = left; i < right; i++){
            if(board.get(divide).get(i).getStatus().equals("start") || board.get(divide).get(i).getStatus().equals("target"))
                continue;
            wallQueue.add(board.get(divide).get(i));
        }

        // get a random odd integer between left and right and clear it
        int clearSpace = left + rand.nextInt((right-left) / 2) * 2 + 1;

        if (!(board.get(divide).get(clearSpace).getStatus().equals("start") || board.get(divide).get(clearSpace).getStatus().equals("target")))
            wallQueue.remove(board.get(divide).get(clearSpace));

        // recur for both parts of the newly split section
        makeMaze(left, right, top, divide);
        makeMaze(left, right, divide, bottom);
    }

    public void makeOpenings(){

        Random rand = new Random(); // two different random number generators
        Random rand2 = new Random();// just in case

        // a random location for the entrance and exit
        int entrance_row = rand.nextInt(act_rows - 1) * 2 + 1;
        int exit_row = rand2.nextInt(act_rows - 1) * 2 + 1;

        // clear the location
        if(!(board.get(entrance_row).get(0).getStatus().equals("start") || board.get(entrance_row).get(0).getStatus().equals("target")))
            wallQueue.remove(board.get(exit_row).get(cols - 1));

        if(!(board.get(exit_row).get(cols-1).getStatus().equals("start") || board.get(exit_row).get(cols-1).getStatus().equals("target")))
            wallQueue.remove(board.get(exit_row).get(cols - 1));


    }
}