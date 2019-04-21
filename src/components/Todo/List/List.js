import React from 'react';
import './List.scss';
import TransitionGroup from 'react-transition-group/CSSTransitionGroup';
const list = (props) => {
    const todoItems = props.listItems.map((todo)=>{
        return( 
            <TransitionGroup transitionName="fade"
                transitionAppear={true}
                transitionEnterTimeout={500}
                transitionAppearTimeout={500}
                transitionLeaveTimeout={300}>

                <li className="listItem" key={todo.id} onClick={()=>props.click(todo.id)}><p>{todo.value}</p></li>
            </TransitionGroup>
        )
    })

    return (
        <ul>
            {props.listItems.length===0?'Empty!':null}
            {todoItems}
        </ul>
    );
}
 

export default list;
