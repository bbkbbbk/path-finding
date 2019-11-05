package views.mazes;

import views.component.Box;

import java.util.ArrayList;
import java.util.concurrent.ThreadLocalRandom;

public class StairMaze {
    ArrayList<ArrayList<Box>> board;
    ArrayList<Box> wallQueue; // adding the queue for box to be animated
    int row, col;
    public StairMaze(int r, int c, ArrayList<ArrayList<Box>> boxes) {
        row = r - 1;
        col = c - 1;
        board = boxes;
        wallQueue = new ArrayList<>();
    }

    public ArrayList<Box> getMaze() {
        int count = 0;
        for (int i = this.row; i >= 0; i--)
            wallQueue.add(board.get(i).get(count++));

        for (int i = 0; i < this.row - 1; i++)
            wallQueue.add(board.get(i).get(count++));

        for (int i = this.row - 1; i >= 0; i--)
            if (count < this.col)
                wallQueue.add(board.get(i).get(count++));

        return wallQueue;
    }
}
