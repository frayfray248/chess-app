import styled from "styled-components";

const StyledBoardSquare = styled.td`
    width: 50px;
    height: 50px;
    font-size: 35px;
    padding: 0px;
    text-align: center;
    background-color: ${props => props.dark ? "#6E6E6E" : "#F3F3F3"}
`;

export default StyledBoardSquare;