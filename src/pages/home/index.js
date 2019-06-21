import React from 'react'
import { Container } from '../../styles/Utils';
import HomeIndex from './components/index'
export default function Home(match){
    return(
        <Container>
            <div className="jumbotron container" >
                <HomeIndex {...match}/>
            </div>
        </Container>
    )
}