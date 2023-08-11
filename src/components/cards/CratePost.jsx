import styled from "styled-components";

import H4 from "../typography/H4";
import Textarea from "../input/Textarea"
import Button from "../input/BUtton";

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
    return (
        <PostContainer  >
            <H4><Title>No que você está pensando, @{username}?</Title></H4>
            <TextContainer>
                <Textarea placeholder="Digite sua mensagem" rows="4"/>
            </TextContainer>
            <BottomContainer>
                <ButtomText>A sua mensagem será pública.</ButtomText>
                <Button>Enviar mensagem</Button>
            </BottomContainer>
        </PostContainer>
    )
}

export default CreatePost