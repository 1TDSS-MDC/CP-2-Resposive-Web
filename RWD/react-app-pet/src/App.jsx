import React from 'react'
import ListaDePets from './components/ListaDePets';
import { DivHome } from './components/style/styled';


export default function App(){
    return(
       <DivHome>
            <ListaDePets/>
       </DivHome>
    );
}