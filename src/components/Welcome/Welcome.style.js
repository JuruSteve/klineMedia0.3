import styled, {css} from 'styled-components';

export const Jumbotron = `
background-color:black;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    h1{
            font-size: 6em;
            border:0.2px;
            border-radius: 10px;
            background-color: rgba(5, 237, 255, 0.29);

    }


`;

export const ProgressText = styled.div`
    position: relative;
    display: inline-block;
    color: rgba(128, 128, 128, 0.25);
    ul{
        display: block;
        list-styles: none;
        li{
            list-styles: none;
            display: inline-block;
            margin-right: 10px;
        }
    }
`;

export const Progress = styled.div`
    position: absolute;
    top:0;
    left:0;
    right:0;
    color: black;
`;
/* .container {
    display: block;
    width:100%;
    align-content: center;
} */
