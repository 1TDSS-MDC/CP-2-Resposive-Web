import styled from "styled-components";

export const DivHeader = styled.div `
    background-color:#222;
    position: relative;
    width:100%;
    height: 80px;
    h1{text-align: center; background: #fff};
`

export const DivFooter = styled.div `
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    display: flex;
    justidy-content: center;
    background-color: #222;
    height: 90px;
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
    height: 430px;
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
    form{width:80%; margin:auto; float:left;}
    form input, form textarea{padding:5px; width:98%; margin:3px; border: 1px solid rgba(0,0,0,.1);}
    form textarea{height:110px;}
    form button{padding:10px; background: #222; color:#fff; width:40%;}
    h3{margin-left: 4px; padding:2px}
    `

export const DivHome = styled.div`
    width:100%;
    height:60px;
    background: #bbf;
    h1, p{padding:16px;}
    `

export const NavMenu = styled.nav`
    background: #999; height:15vh;
    display:flex; justify-content: center;
    ul{display: flex;}
    ul li{list-style: none;}
    ul li a{display: inline-block; text-decoration: none;
    padding: 20px; color: #fff; font-size: 1.5em; }
    `

export const DivApp = styled.div`
    text-decoration: none;
    font-size: 16px;
    background-color: #fff;
    `