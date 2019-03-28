import React from 'react';
import './List.scss';

const list = (props) => {
    const todoItems = props.listItems.map((todo)=>{
        return(
            <li className="listItem" key={todo.id} onClick={()=>props.click(todo.id)}><p>{todo.value}</p></li>
        )
    })

    return (
        <ul>
            {props.empty?'Empty!':null}
            {todoItems}
        </ul>
    );
}
 

export default list;
