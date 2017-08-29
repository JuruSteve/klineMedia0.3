import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 10vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    font-size: 3em;

`;

export const ProgressText = styled.div`
    position: relative;
    display: inline-block;
    color: rgba(128, 128, 128, 0.25);
`;

export const Progress = styled.div`
    position: absolute;
    top:0;
    left:0;
    right:0;
    color: black;
`;