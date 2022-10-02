import React from 'react'
import { DivForm } from './style/styled'


export default function PetCadastro(props) {

    return(
        <DivForm>
            <h3>Cadastro de pets:</h3>
            <form method="post" onSubmit={props.addTarefa}>
                <div>
                    <input name='nome' placeholder='Nome do pet' 
                    value={props.tarefa.nome} onChange={props.digit} />
                </div>
                <div>
                    <input name='idade' placeholder='Idade' 
                    value={props.tarefa.idade} onChange={props.digit} />
                </div>
                <div>
                    <input name='raca' placeholder='Raça' 
                    value={props.tarefa.raca} onChange={props.digit} />
                </div>
                <div>
                    <input name='tamanho' placeholder='Tamanho' 
                    value={props.tarefa.tamanho} onChange={props.digit} />
                </div>
                <div>
                    <input name='dono' placeholder='Nome do dono' 
                    value={props.tarefa.dono} onChange={props.digit} />
                </div>
                 <div>
                    <input name='telefone' placeholder='Telefone' 
                    value={props.tarefa.telefone} onChange={props.digit} />
                </div>
                <div>
                    <input name='observacao' placeholder='Observação' 
                    value={props.tarefa.observacao} onChange={props.digit} />
                </div>
                <button type='submit'>Cadastrar Pet</button>
            </form>
        </DivForm>
    )
}