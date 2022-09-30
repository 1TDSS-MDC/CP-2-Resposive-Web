import React, { useState } from 'react'
import { DivLista } from './style/styled'
import PetCadastro from './PetCadastro'
import PetTarefa from './PetTarefa'

export default function ListaDePets() {

    const [tarefa, setTarefa] = useState([{
        nome:'Pac0',
        idade:'3',
        raca:'Vira-Lata',
        tamanho:'1.50',
        dono:'Matheus',
        telefone:'22222222',
        observacao:'N',
    },

])

    const [nTarefa, setNTarefa] = useState({
        nome:'', idade:'',raca:'', tamanho:'', dono:'', telefone:'', observacao:'',
    })

    const addTarefa= e=> {
        
       e.preventDefault()

       setNTarefa({'nome':'', 'idade':'','raca':'', 'tamanho':'', 'dono':'', 'telefone':'', 'observacao':'',})
    
    setTarefa([...tarefa,nTarefa])
}

    const captura= e=>{
        const {value, name} = e.target

        if(name === 'nome') { 
            //captura no nome do pet
            setNTarefa({'nome':value, 'idade':nTarefa.idade, 'raca':nTarefa.raca, 'tamanho':nTarefa.tamanho, 'dono':nTarefa.dono, 'telefone':nTarefa.telefone, 'observacao':nTarefa.observacao})
        } else if(name === 'idade') {
            //captura a idade do pet
            setNTarefa({'nome':nTarefa.nome, 'idade':value, 'raca':nTarefa.raca, 'tamanho':nTarefa.tamanho, 'dono':nTarefa.dono, 'telefone':nTarefa.telefone, 'observacao':nTarefa.observacao})
        } else if(name === 'raca') {
            //captura o nome da raça do pet
            setNTarefa({'nome':nTarefa.nome, 'idade':nTarefa.idade, 'raca':value, 'tamanho':nTarefa.tamanho, 'dono':nTarefa.dono, 'telefone':nTarefa.telefone, 'observacao':nTarefa.observacao})
        } else if(name === 'tamanho') {
            //captura o tamanho do pet
            setNTarefa({'nome':nTarefa.nome, 'idade':nTarefa.idade, 'raca':nTarefa.raca, 'tamanho':value, 'dono':nTarefa.dono, 'telefone':nTarefa.telefone, 'observacao':nTarefa.observacao})
        } else if(name === 'dono') {
            //captura o nome do dono do pet
            setNTarefa({'nome':nTarefa.nome, 'idade':nTarefa.idade, 'raca':nTarefa.raca, 'tamanho':nTarefa.tamanho, 'dono':value, 'telefone':nTarefa.telefone, 'observacao':nTarefa.observacao})
        } else if(name === 'telefone') {
            //captura o telefone do dono
            setNTarefa({'nome':nTarefa.nome, 'idade':nTarefa.idade, 'raca':nTarefa.raca, 'tamanho':nTarefa.tamanho, 'dono':nTarefa.dono, 'telefone':value, 'observacao':nTarefa.observacao})
        } else if(name === 'observacao') {
            //inclui alguma observação do pet
            setNTarefa({'nome':nTarefa.nome, 'idade':nTarefa.idade, 'raca':nTarefa.raca, 'tamanho':nTarefa.tamanho, 'dono':nTarefa.dono, 'telefone':nTarefa.telefone, 'observacao':value})
        }
    }

    const removerTarefa = tar=>{
        let lista = tarefa
        lista = lista.filter((t)=> t!== tar)
        setTarefa(lista)
    }

  return (
    <DivLista>
        <PetCadastro addTarefa={addTarefa} tarefa={nTarefa} digit={captura}/>
            {tarefa.map((tar, i)=>(
                <PetTarefa
                key={i}
                nome={tar.nome}
                idade={tar.idade}
                raca={tar.raca}
                tamanho={tar.tamanho}
                dono={tar.dono}
                telefone={tar.telefone}
                observacao={tar.observacao}
                remove={removerTarefa.bind(this,tar)}
                />
            ))}
        </DivLista>
  )
}