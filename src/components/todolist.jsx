import { useState } from "react";

function List(){


    const [todo, setTodo] = useState([
        {
            text:'Welcome'
        },
        {
            text:'How are you?'
        },
        {
            text:'Where are you from'
        }
    ])
    
    const[text, setText] = useState('')

    function handleChange(e){
        setText(e.target.value)
    }

    function handleBtn(){
        setTodo([
            {
                text : text
            }
        ])
    }


    return (
        <div className="container p-10">
            <input placeholder="Write log" value={text} onChange={handleChange} />
            <button onClick={handleBtn}>Add</button>

        {            
            todo.map((item, index) => {
                return (               
                 <div key={index}>
                    {item.text}
                 </div>)
            })}
        </div>


    )







}


export default List;