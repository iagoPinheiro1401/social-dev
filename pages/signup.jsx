import { useState } from "react"
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'
import styled from "styled-components"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/router"

import { signupSchema } from "../modules/user/user.schema"

import ImageSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Input from "../src/components/input/Input"
import Button from "../src/components/input/Button"

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
    const router = useRouter()
    const { control, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: joiResolver(signupSchema)
    })

    const[isLoading, setIsLoading] = useState()

    const handleForm = async (data) => {
        try{
            setIsLoading(true)
            const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
            if (status === 201) {
                router.push('/')
            }
        } catch (err) {
            setIsLoading(false)
            if (err.response.data.code === 11000) {
                setError(err.response.data.duplicatedKey, {
                    type: 'duplicated'
                })
            }
        }
    }

    return (
        <ImageSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece nomundo Dev, está aqui!</H4>
            <FormContainer>
                <H2>Crie sua conta</H2>
                <Form onSubmit={handleSubmit(handleForm)}>
                    <Input label="Nome" name="firstName" control={control} />
                    <Input label="Sobrenome" name="lastName" control={control} />
                    <Input label="Usuário" name="user" control={control} />
                    <Input label="Email" type="email" name="email" control={control} />
                    <Input label="Senha" type="passwowrd" name="password" control={control} />
                    <Button loading={isLoading} type="submit" disabled={Object.keys(errors).length > 0} >Cadastrar</Button>
                </Form>
                <Text>Já possui uma conta? <Link href="/login">Faça seu login</Link></Text>
            </FormContainer>
        </ImageSpace>
    )
}

export default SignupPage