package views.mazes;

import views.Maze;
import views.component.Box;

import java.util.ArrayList;

public class StairMaze implements Maze {
    ArrayList<ArrayList<Box>> board;
    ArrayList<Box> wallQueue; // adding the queue for box to be animated
    int row, col;
    public StairMaze(int r, int c, ArrayList<ArrayList<Box>> boxes) {
        row = r - 1;
        col = c - 1;
        board = boxes;
        wallQueue = new ArrayList<>();
        makeMaze();
    }

    @Override
    public void makeMaze() {
        int count = -1;
        for (int i = this.row; i >= 0; i--) {
            count++;
            if (!board.get(i).get(count).getStatus().equals("start") && !board.get(i).get(count).getStatus().equals("target"))
                wallQueue.add(board.get(i).get(count));
        }

        for (int i = 1; i < this.row - 1; i++) {
            count++;
            if (!board.get(i).get(count).getStatus().equals("start") && !board.get(i).get(count).getStatus().equals("target"))
                wallQueue.add(board.get(i).get(count));
        }


        for (int i = this.row - 1; i >= 0; i--) {
            if (count < this.col - 1) {
                count++;
                if (!board.get(i).get(count).getStatus().equals("start") && !board.get(i).get(count).getStatus().equals("target"))
                    wallQueue.add(board.get(i).get(count));
            } else {
                break;
            }
        }
    }

    @Override
    public ArrayList<Box> getMaze() {
        return wallQueue;
    }
}
