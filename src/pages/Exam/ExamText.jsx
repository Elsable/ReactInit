import React,{memo} from 'react'
import Content from './Content'



export default memo(function ExamText(props){
    return(<>
<Content {...props}/>
</>)
})