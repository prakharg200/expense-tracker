import React from 'react'
import {Segment} from 'semantic-ui-react'

const Total = ({positive,negative}) =>{
    return(
        <Segment.Group horizontal>
            <Segment style={segmentStyle}>Income <div style={plusStyle}>${positive}</div></Segment>
            <Segment style={segmentStyle}>Expense <div style={minusStyle}>${negative}</div></Segment>
        </Segment.Group>
    )
}

const segmentStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}

const plusStyle= {
    color: 'green',
    fontSize: '20px'
}

const minusStyle= {
    color: 'red',
    fontSize: '20px'
}



export default Total