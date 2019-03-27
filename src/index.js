import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = ()=>{
    const randomNumber = Math.floor(Math.random()*1000+1);
    return randomNumber;
}

const user = {
    name: 'Jun',
    luckyNumber: luckyNumber()
}

const greeting = user=>(
    <div className="container">
        <h1>Welcome {user.name}</h1>
        <h2 className="text-muted">Your lucky number is: {user.luckyNumber}</h2>
    </div>
)

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
