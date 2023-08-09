import { object } from "joi"
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
import { urlObjectKeys } from "next/dist/shared/lib/utils"

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
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signupSchema)
    })

    const handleForm = (data) => {
        console.log(data)
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
                    <Button type="submit" disabled={Object.keys(errors).length > 0} >Cadastrar</Button>
                </Form>
                <Text>Já possui uma conta? <Link href="/login">Faça seu login</Link></Text>
            </FormContainer>
        </ImageSpace>
    )
}

export default SignupPage