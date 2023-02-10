import React, {useState} from 'react'
import { Header } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'

const Transactions = ({getText,getAmount}) =>{
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)

    const onFormSubmit = (e) =>{
        e.preventDefault()
        getText(text)
        getAmount(amount)
    }

    return(
        <div style={{marginTop: '20px'}}>
            <Header dividing>Add new transaction</Header>
            <Form>
                <Form.Field>
                    <label>Text</label>
                    <input type="text" onChange={e=>setText(e.target.value)} placeholder="Enter text..."/>
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <label>(negative-expense, positive-income)</label>
                    <input type="text" onChange={e=>setAmount(e.target.value)} placeholder="Enter amount..."/>
                </Form.Field>
                <Button fluid color="violet" onClick={onFormSubmit}>Add a transaction</Button>
            </Form>
        </div>
    )
}

export default Transactions