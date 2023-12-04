import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Arial;
}
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:100vh;
background-color: #176585;
`
export const Box1 = styled.div`
border: none;
border-radius: 10px;
display:flex;
align-items:center;
flex-direction: column;
height:45vh;
width:30vw;
background-color: #36cecc;


`
export const TituloImc = styled.h1`
width:28vw;
height:10vh;
font-size:30px;
text-align:center;
color: #4a4a4a;
`
//#4a4a4a

export const SubTitulo = styled.span`
height: 5vh;
color:#4a4a4a;
`

export const InputPA = styled.input`
margin-bottom:7px;
height:3vw;
border: #27b1bf solid 2px;
`

export const Btn = styled.button`
width:8vw;
height: 6vh;
border: #176585  solid 2px;
border-radius:5px;
background-color: #27b1bf;
color:white;
`

export const Mensagem = styled.h2`
color: #2e2e2e;
font-size:16px;
`