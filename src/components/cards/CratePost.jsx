import styled from "styled-components";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useSWRConfig } from "swr";
import axios from "axios";

import { createPostSchema } from "../../../modules/post/post.schema";

import H4 from "../typography/H4";
import ControledTextarea from "../input/ControledTextarea";
import Button from "../input/Button";
import useSWR from "swr";

const PostContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 20px 40px;
    @media (max-width: 500px) {
        padding: 20px;
    }
`
const Title = styled.div`
    font-weight: bold;
    text-align: center;
`
const TextContainer = styled.div`
    margin: 20px 0 ;
    width: 100%
`
const ButtomText = styled.p`
    flex: 1;
`
const BottomContainer = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 500px) {
        flex-direction: column-reverse;
        gap: 17px;
    }
`

function CreatePost ({ username }) {
    const { mutate } = useSWRConfig()
    const { control, handleSubmit, formState: { isValid }, reset } = useForm({
        resolver: joiResolver(createPostSchema), 
        mode: 'all',
    })

    const onSubmit = async (data) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, data)
        if (response.status === 201) {
            reset()
            mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
        }
    }

    return (
        <PostContainer  >
            <H4><Title>No que você está pensando, @{username}?</Title></H4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextContainer>
                    <ControledTextarea
                        placeholder="Digite sua mensagem" 
                        rows="4"
                        control={control}
                        name="text"
                        maxLength="256" 
                    />
                </TextContainer>
                <BottomContainer>
                    <ButtomText>A sua mensagem será pública.</ButtomText>
                    <Button disabled={!isValid} >Postar mensagem</Button>
                </BottomContainer>
            </form>
        </PostContainer>
    )
}

export default CreatePost