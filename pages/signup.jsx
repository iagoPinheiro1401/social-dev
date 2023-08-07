import { useState } from "react"
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'
import styled from "styled-components"
import Link from "next/link"

import { signupSchema } from "../modules/user/user.schema"

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
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signupSchema)
    })

    const handleForm = (data) => {
        console.log(data)
    }

    console.log(errors)

    return (
        <ImageSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece nomundo Dev, está aqui!</H4>
            <FormContainer>
                <H2>Crie sua conta</H2>
                <Form onSubmit={handleSubmit(handleForm)}>
                    <Input label="Nome" {...register('firstName')} />
                    <Input label="Sobrenome" {...register('lastName')}/>
                    <Input label="Usuário" {...register('user')}/>
                    <Input label="Email" {...register('email')}/>
                    <Input label="Senha" {...register('password')}/>
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <Text>Já possui uma conta? <Link href="/login">Faça seu login</Link></Text>
            </FormContainer>
        </ImageSpace>
    )
}

export default SignupPage