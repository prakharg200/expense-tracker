import React from 'react'
import './History.css'
import {List, Segment} from 'semantic-ui-react'

const HistoryItem = ({item}) =>{
    const sign = item.amount>0 ? 'plus': 'minus'
    return(
        <List.Item className="list-item">
            <Segment>
                {item.text}
                <List.Content floated='right'>{item.amount}<span className={sign+` side-span`}></span></List.Content>
            </Segment>
        </List.Item>
    )
}

export default HistoryItem