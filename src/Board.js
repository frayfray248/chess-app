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
                    return rowIndex % 2 !== 0
                } else {
                    return rowIndex % 2 === 0
                }
            }))
    })();

    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    {
                        // board letter position headers
                        [...new Array(boardWidth)].map((_, index) => (
                            <th>{String.fromCharCode('a'.charCodeAt(0) + index)}</th>
                        ))
                    }
                </tr>
                {
                    // chess board number position headers and squares
                    boardArr.map((row, index) => (
                        <tr>
                            {/* number position header */}
                            <th>{boardHeight - index}</th>
                            {/* squares */}
                            {row.map(dark => <StyledBoardSquare dark={dark} />)}
                        </tr>
                    ))}
            </tbody>
        </table>
    )
};

export default Board;