import styled from 'styled-components'

export const Container = styled.div<{ left: number, top: number, size: number, sidePosition: number }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${pros => pros.sidePosition}px;
`;

export const NameBox = styled.div`

    background-color: #000;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    font-size: 10px;
    text-align: center;
    margin-top: -24px;


    &:after {
        content: "";
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #000;
        bottom: -5px;
        left: 35%;
    }
`;