import React from 'react'
import { DivTarefa } from './style/styled'
import {FaDog as X } from 'react-icons/fa';

export default function PetCadastrado(props) {
  return (
    <DivTarefa>
      <p>Nome: {props.nome}</p>
      <p>Idade: {props.idade}</p>
      <p>Raça: {props.raca}</p>
      <p>Tamanho: {props.tamanho}</p>
      <p>Nome do dono: {props.dono}</p>
      <p>Telefone: {props.telefone}</p>
      <p>Observação: {props.observacao}</p>
      <button onClick={props.remove}><X/></button>
    </DivTarefa>
  )
}