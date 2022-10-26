import React,{useState} from 'react'
import styled from "styled-components";
import Button from '../Button/Button';
function FormCart({handleChekout}) {
  const [name,setName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')

  return (
    <>
    <form 
      onSubmit={(event)=>{
        event.preventDefault()
        handleChekout(name,lastName,email,phone)
      }}
      style={{width:'100%',marginLeft:'20%'}}
    >
        <ContainerInput>
            <label htmlFor="name">
              Nombre
            </label>
            <input name='name' type="text" onChange={ev=>setName(ev.target.value)} required></input>
        </ContainerInput>
        <ContainerInput>
            <label htmlFor="apellido">
              Apellido
            </label>
            <input name='apellido' type="text" onChange={ev=>setLastName(ev.target.value)} required></input>
        </ContainerInput>
        <ContainerInput>
            <label htmlFor="email">
              Email:
            </label>
            <input name='email' type="email" placeholder='example@example.com' onChange={ev=>setEmail(ev.target.value)} required></input>
            
        </ContainerInput>
        <ContainerInput>
            <label htmlFor="phone">
              Teléfono:
            </label>
            <input name='phone' type="phone" placeholder='1123456789' onChange={ev=>setPhone(ev.target.value)} required maxLength={10}></input>
        </ContainerInput>
        <div style={{width:'80%',maxWidth:'392px'}}>
        <Button title='Comprar' type='submit'></Button>
        </div>
    </form>
    
    </>
  )
}
const ContainerInput=styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin-top:1rem;
  max-width:400px;
  
  
`

export default FormCart