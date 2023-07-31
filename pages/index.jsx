import styled from "styled-components"

import Navbar from "../src/components/layout/Navbar"
import Container from "../src/components/layout/Container"
import CreatePost from "../src/components/cards/CratePost"
import H3 from "../src/components/typography/H3"
import Post from "../src/components/cards/Post"

const Content = styled.div`
    margin: 50px 0;
`
const LastPostText = styled(H3)`
    padding: 20px 0;
`
const RefreshPosts = styled.span`
     font-weight: bold;
     color: ${props => props.theme.primary};
     cursor: pointer;
`

const RefreshPostContainer = styled.div`
    text-align: center;
`
const PostContainer = styled.div`
     display: flex;
     flex-direction: column;
     gap: 20px;
     margin-top: 20px;
`

function HomePage () {
  
  return (
    <>
      <Navbar />
      <Content>
        <Container>
          <CreatePost />
          <LastPostText>Últimas postagens:</LastPostText>
          <RefreshPostContainer>
            <RefreshPosts>Carregar novas postagens</RefreshPosts>
          </RefreshPostContainer>
          <PostContainer>
            <Post />
            <Post />
            <Post />
          </PostContainer>
        </Container>
      </Content>
    </>
  )
}

export default HomePage