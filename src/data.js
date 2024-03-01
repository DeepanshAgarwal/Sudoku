const finalData = [
    [8, 1, 7, 2, 9, 4, 5, 3, 6],
    [6, 9, 2, 1, 5, 3, 4, 7, 8],
    [3, 4, 5, 7, 8, 6, 2, 1, 9],
    [5, 7, 6, 3, 4, 8, 9, 2, 1],
    [4, 8, 3, 9, 1, 2, 6, 5, 7],
    [1, 2, 9, 6, 7, 5, 3, 8, 4],
    [2, 3, 4, 8, 6, 1, 7, 9, 5],
    [7, 6, 8, 5, 2, 9, 1, 4, 3],
    [9, 5, 1, 4, 3, 7, 8, 6, 2],
];

function getRandomNumbers(n) {
    let arr = [];
    while (arr.length < n) {
        let r = Math.floor(Math.random() * 9);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

function generateInitialData(data) {
    const newData = data.map((row) => row.slice());
    for (let i = 0; i < 9; i++) {
        const random = Math.floor(Math.random() * 6) + 2;
        let randomIndexes = getRandomNumbers(random);
        for (let j = 0; j < randomIndexes.length; j++) {
            newData[i][randomIndexes[j]] = "0";
        }
    }
    return newData;
}

export { finalData, generateInitialData };
