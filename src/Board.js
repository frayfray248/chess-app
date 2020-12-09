import StyledBoardSquare from "./StyledBoardSquare";

const Board = () => {

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
                    return {
                        dark : rowIndex % 2 !== 0
                        }
                } else {
                    return {
                        dark: rowIndex % 2 === 0
                    }
                }
            }))
    })();

    boardArr[1][0].piece = '♟';
    boardArr[1][1].piece = '♟';
    boardArr[1][2].piece = '♟';
    boardArr[1][3].piece = '♟';
    boardArr[1][4].piece = '♟';
    boardArr[1][5].piece = '♟';
    boardArr[1][6].piece = '♟';
    boardArr[1][7].piece = '♟';
    boardArr[0][0].piece = '♜';
    boardArr[0][1].piece = '♝';
    boardArr[0][6].piece = '♝';
    boardArr[0][2].piece = '♞';
    boardArr[0][3].piece = '♚';
    boardArr[0][4].piece = '♛';
    boardArr[0][5].piece = '♞';
    boardArr[0][7].piece = '♜';

    boardArr[6][0].piece = '♙';
    boardArr[6][1].piece = '♙';
    boardArr[6][2].piece = '♙';
    boardArr[6][3].piece = '♙';
    boardArr[6][4].piece = '♙';
    boardArr[6][5].piece = '♙';
    boardArr[6][6].piece = '♙';
    boardArr[6][7].piece = '♙';
    boardArr[7][0].piece = '♖';
    boardArr[7][1].piece = '♗';
    boardArr[7][6].piece = '♗';
    boardArr[7][2].piece = '♘';
    boardArr[7][3].piece = '♔';
    boardArr[7][4].piece = '♕';
    boardArr[7][5].piece = '♘';
    boardArr[7][7].piece = '♖';

    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    {
                        // board letter position headers
                        [...new Array(boardWidth)].map((_, index) => (
                            <th key={index}>{String.fromCharCode('a'.charCodeAt(0) + index)}</th>
                        ))
                    }
                </tr>
                {
                    // chess board number position headers and squares
                    boardArr.map((row, index) => (
                        <tr key={index}>
                            {/* number position header */}
                            <th>{boardHeight - index}</th>
                            {/* squares */}
                            {row.map((square, index) => <StyledBoardSquare key={index} dark={square.dark}>{square.piece}</StyledBoardSquare>)}
                        </tr>
                    ))}
            </tbody>
        </table>
    )
};

export default Board;