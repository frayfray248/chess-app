import StyledBoardSquare from "./StyledBoardSquare";

const Board = () => (
    <table>
        <tbody>
            <tr>
                <th>a</th>
                <th>b</th>
                <th>c</th>
                <th>d</th>
                <th>e</th>
                <th>f</th>
                <th>g</th>
                <th>h</th>
            </tr>
            <tr>
                <th>8</th>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
            </tr>
            <tr>
                <th>7</th>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
            </tr>
            <tr>
                <th>6</th>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
            </tr>
            <tr>
                <th>5</th>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
            </tr>
            <tr>
                <th>4</th>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
            </tr>
            <tr>
                <th>3</th>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
            </tr>
            <tr>
                <th>2</th>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
            </tr>
            <tr>
                <th>1</th>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
                <StyledBoardSquare dark={false} ></StyledBoardSquare>
                <StyledBoardSquare dark={true} ></StyledBoardSquare>
            </tr>
        </tbody>
    </table>
);

export default Board;