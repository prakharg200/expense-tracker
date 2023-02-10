import React from 'react'

const Balance = ({positive,negative}) =>{
    const total = parseInt(positive)-parseInt(negative)
    return(
        <div>
            <div style={{fontSize: '15px'}}>YOUR BALANCE:</div>
            <div style={{fontSize: '30px', marginTop: '7px'}}>${total}</div>
        </div>
    )
}

export default Balance