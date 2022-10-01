import styled from "styled-components";

export const DivHeader = styled.div `
background-clor:#0ee;
position: relative;
width:100%;
height: 60px;
`

export const DivFooter = styled.div `
background-clor:#eee;
position: relative;
width:100%;
height: 60px;
`

export const DivLista = styled.div`
 
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const DivTarefa = styled.div`
    background-color : #ffb;
    border:  2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 450px;
    margin: 10px;
    position: relative;
    h2,p{padding-bottom: 10px;}
    button{position:absolute;top:10px; right:10px}

`

export const DivForm = styled.div`
    width:35%;
    height:15%;
    padding:25px;
    background-color:#093;
    form{width:100%; margin:auto; float:left;}
    form input, form textarea{padding:5px; width:98%; margin:3px; border: 1px solid rgba(0,0,0,.1);}
    form textarea{height:110px;}
    form button{padding:10px; background: #3c3; color:#fff; width:40%;}
    `

export const DivHome = styled.div`
    width:100%;
    height:85vh;
    background: #bbf;
    h1, p{padding:20px;}
    `

export const NavMenu = styled.nav`
    background: #999; height:15vh;
    display:felx; justify-content: center;
    ul{display: flex;}
    ul li{list-style: none;}
    ul li a{display: inline-block; text-decoration: none;
    padding: 20px; color: #fff; font-size: 1.5em; }
    `

export const DivApp = styled.div`
    h1{text-align: center; color: #fff};
    font-weight: bold;
    background-color: #222;
    `