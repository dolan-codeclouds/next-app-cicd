'use client';
import { useReducer } from "react";
const intialState={count:0};    
const reducer = (state,action)=>{
    switch(action.type){
        case 'Increment':
            return {count:state.count +1}
        case 'Decrement':
            return {count:state.count +1}
        default:
            return state        
    }
}
const HOC = (WrappedComponent,number) => {
    function Counter(props) {
        // const [count, setCount] = useState(0);
        const[state,dispatch] =useReducer(reducer,intialState);
        // function increment() {
        //     setCount(count + number);
        // }
        return (
            <div>
                <WrappedComponent count={state.count} increment={()=> dispatch({type:"Increment"})} {...props} />
            </div>
        );
    }
    return Counter;
}
export default HOC;