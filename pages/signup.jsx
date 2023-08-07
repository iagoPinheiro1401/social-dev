import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"

import ImageSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Input from "../src/components/input/Input"
import Button from "../src/components/input/BUtton"

const FormContainer = styled.div`
    margin-top: 60px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 20px
`
const Text = styled.p`
    text-align: center;
`

function SignupPage () {
    const [fistName, setFirstName] = useState('')
    const [lasttName, setLastName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleForm = (event) => {
        event.preventDefault()
        console.log({
            fistName,
            lasttName,
            user,
            email,
            password,
        }
        )
    }

    return (
        <ImageSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece nomundo Dev, está aqui!</H4>
            <FormContainer>
                <H2>Crie sua conta</H2>
                <Form onSubmit={handleForm}>
                    <Input label="Nome" onChange={({ target }) =>/*com destructor */ setFirstName(target.value)} />
                    <Input label="Sobrenome" onChange={(event) =>/*sem destructor*/ setLastName(event.target.value)} />
                    <Input label="Usuário" onChange={({ target }) => setUser(target.value)} />
                    <Input label="Email" type="email" onChange={({ target }) => setEmail(target.value)}/>
                    <Input label="Senha" type="password" onChange={({ target }) => setPassword(target.value)}/>
                    <Button onClick={handleForm}>Cadastrar</Button>
                </Form>
                <Text>Já possui uma conta? <Link href="/login">Faça seu login</Link></Text>
            </FormContainer>
        </ImageSpace>
    )
}

export default SignupPage