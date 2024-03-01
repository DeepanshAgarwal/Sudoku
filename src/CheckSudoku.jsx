import { finalData } from "./data.js";

export default function CheckSudoku({
    gridToCheck,
    handleIsChecking,
    handleWrongData,
}) {
    function fixGridDataType(gridToCheck) {
        let grid = gridToCheck;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                grid[i][j] = parseInt(grid[i][j]);
            }
        }
        return grid;
    }

    function handleClick() {
        handleIsChecking();
        let finalGrid = fixGridDataType(gridToCheck);

        let wrongData = [];

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (finalGrid[i][j] !== finalData[i][j]) {
                    wrongData.push([i, j]);
                    // return;
                }
            }
        }
        handleWrongData(wrongData);
    }

    return (
        <div>
            <button onClick={handleClick}>Check</button>
        </div>
    );
}
