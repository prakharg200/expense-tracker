import React, {useState, useEffect} from 'react'
import './App.css'
import Transactions from './components/Transactions'
import History from './components/History'
import Total from './components/Total'
import {Container} from 'semantic-ui-react'
import Balance from './components/Balance'

const App = () =>{
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const [positive,setPositive] = useState(0)
    const [negative,setNegative] = useState(0)
    const [list,setList] = useState([])


    useEffect(()=>{
        amount > 0 ? setPositive(parseInt(positive)+parseInt(amount)) : setNegative(parseInt(negative)-parseInt(amount))
        const newList = list.concat({ text, amount });
        if(text) setList(newList);
    },[amount])

    return(
        <Container className="main-container">
            <Balance positive={positive} negative={negative}/>
            <Total positive={positive} negative={negative}/>
            <History list={list}/>
            <Transactions getText={setText} getAmount={setAmount}/>
        </Container>
    )
}

export default App