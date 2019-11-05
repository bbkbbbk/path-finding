package views.mazes;

import views.component.Box;

import java.util.ArrayList;
import java.util.concurrent.ThreadLocalRandom;

public class BasicRandomMaze {
    ArrayList<ArrayList<Box>> board;
    ArrayList<Box> wallQueue; // adding the queue for box to be animated
    int row, col;
    public BasicRandomMaze(int r, int c, ArrayList<ArrayList<Box>> boxes) {
        row = r;
        col = c;
        board = boxes;
        wallQueue = new ArrayList<>();
    }

    public ArrayList<Box> getMaze() {
        int count = 0;
        for (ArrayList<Box> row : board)
            for (Box box : row){
                int randomNum = ThreadLocalRandom.current().nextInt(1, this.col);
                count ++;
                if(count % randomNum == 0 || count % randomNum / 3 == 0)
                    if (!box.getStatus().equals("start") || !box.getStatus().equals("target"))
                        wallQueue.add(box);
            }

        return this.wallQueue;
    }
}
