import styled from "styled-components";

const StyledBoardSquare = styled.td`
    width: 2em;
    height: 2em;
    text-align: center;
    background-color: ${props => props.dark ? "#6E6E6E" : "#F3F3F3"}
`;

export default StyledBoardSquare;