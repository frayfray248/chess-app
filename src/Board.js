import StyledBoardSquare from "./StyledBoardSquare";

// board dimensions
const boardWidth = 8;
const boardHeight = 8;

// constructing board IIFE
const boardArr = (() => {
    // The code below creates a 2D array using spreading and mapping.
    // The elements are alternating booleans to determine if a chess 
    // square is dark or light.
    // Each row is filled with alternating booleans
    // Each row also alternates starting booleans
    return [...new Array(boardHeight)].map((_, colIndex) => 
    [... new Array(boardWidth)].map((_, rowIndex) => {
        if (colIndex % 2 === 0) {
            return rowIndex % 2 !== 0
        } else {
            return rowIndex % 2 === 0
        }
    }))
})();


const Board = () => (
    <table>
        <tbody>
            <tr>
                <th></th>
                <th>a</th>
                <th>b</th>
                <th>c</th>
                <th>d</th>
                <th>e</th>
                <th>f</th>
                <th>g</th>
                <th>h</th>
            </tr>
            {boardArr.map((row, index) => (
                <tr>
                    <th>{index}</th>
                    {row.map(dark => <StyledBoardSquare dark={dark}/>)}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Board;