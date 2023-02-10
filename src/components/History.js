import React from 'react'
import HistoryItem from './HistoryItem'
import {Header, List} from 'semantic-ui-react'

const History = ({list}) =>{
    const renderedList = list.map((item)=>{
        return <HistoryItem key={item.text} item={item} />
    })

    return(
        <div>
            <Header dividing>History</Header>
            <List>  
                {renderedList}
            </List>
        </div>
    )
}

export default History