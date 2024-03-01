import React, { useState, useEffect } from "react";
import "./Board.css";
import { finalData, generateInitialData } from "./data";
import CheckSudoku from "./CheckSudoku";
import ResetBoard from "./ResetBoard";

export default function Board() {
    // const rows = [];
    // for (let i = 1; i < 10; i++) {
    //     rows.push(<Row row={i} />);
    // }
    // return <div className="board">{rows}</div>;

    let [isChecking, setIsChecking] = useState(false);
    let [wrongData, setWrongData] = useState([]);
    const [grid, setGrid] = useState(generateInitialData(finalData));
    const initialGrid = grid;

    function handleChange(row, col, value) {
        const newGrid = [...grid];
        newGrid[row][col] = value;
        setGrid(newGrid);
    }

    function handleInitialData() {
        setGrid(generateInitialData(finalData));
        setIsChecking(false);
        setWrongData([]);
    }

    function handleIsChecking() {
        setIsChecking(!isChecking);
    }

    function handleWrongData(data) {
        setWrongData(data);
    }

    function setBorderColor(row, col) {
        if (isChecking) {
            for (let i = 0; i < wrongData.length; i++) {
                if (row === wrongData[i][0] && col === wrongData[i][1]) {
                    return "2px solid red";
                }
            }
        }
    }

    return (
        <div>
            {wrongData.length === 0 && isChecking ? (
                <h1>Congratulations You have solved the sudoku!</h1>
            ) : wrongData.length !== 0 && isChecking ? (
                <h1>Sorry Wrong!</h1>
            ) : (
                <h1>Sudoku!</h1>
            )}
            <div>
                {grid.map((row, i) => (
                    <div key={i} className="row">
                        {row.map((cell, j) => (
                            <input
                                id={`${i}-${j}`}
                                key={j}
                                type="number"
                                min="1"
                                max="9"
                                value={cell === "0" ? "" : cell}
                                onChange={(e) =>
                                    handleChange(i, j, e.target.value)
                                }
                                disabled={
                                    typeof initialGrid[i][j] !== "string"
                                        ? true
                                        : false
                                }
                                style={{
                                    backgroundColor:
                                        typeof initialGrid[i][j] !== "string"
                                            ? "lightgray"
                                            : "white",
                                    border: setBorderColor(i, j),
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="button">
                <CheckSudoku
                    gridToCheck={grid}
                    handleIsChecking={handleIsChecking}
                    handleWrongData={handleWrongData}
                />
            </div>
            <div className="button">
                <ResetBoard handleInitialData={handleInitialData} />
            </div>
        </div>
    );
}
