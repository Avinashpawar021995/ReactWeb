import React, { useEffect } from 'react'
import { Container, Button } from 'reactstrap';
const Home = () => {
 useEffect(()=>{
  document.title="Home Giri tech"
 },[]) 
  return (
    <>
    <h1>learncodewith giri</h1>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam quia iusto facere dolores qui eligendi totam ipsam sint! Maiores, facere iste quas consectetur minima nam excepturi incidunt corporis dolores.
        Inventore molestiae harum aliquid quis expedita aliquam rem in voluptas cum, dolor neque, architecto perspiciatis sequi vero molestias, sunt pariatur natus temporibus dolorem quas animi distinctio. Blanditiis perferendis impedit corrupti!
    </p>
    <Container>
        <Button color='primary' outline>start  using</Button>
    </Container>
    </>
  )
}

export default Home
