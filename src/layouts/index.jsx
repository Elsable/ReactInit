import React from 'react'
import Body from './Body';
import {withRouter} from 'react-router-dom'
import Header from './Header';

export default withRouter(function Layout(props) {
    return(
        <>
        <Header/>
            <Body ruta={props.match.path}>            
            {props.children}
            </Body>
        {/**   <Footer title= {Variables[0].title}/>*/}
        </>
    )
});