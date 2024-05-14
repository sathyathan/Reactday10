import React, { useReducer } from 'react';
import ReducerAction from './Reduceraction';

const Usered = () => {
    const[state,dispatch]=useReducer(ReducerAction,0)
    return (

        <div>
            <h1>UseReducerHook</h1>
            <>
            
            {state}
            </>
            <button onClick={()=>{dispatch({type:'ADD'})}}>ADD</button>
            <button onClick={()=>{dispatch({type:'SUB'})}}>SUB</button>
            
            
            
 
        </div>
    );
};

export default Usered;