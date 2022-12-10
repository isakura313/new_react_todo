import {useState} from 'react';

function Todo() {
    const [newDeal, setNewDeal] = useState('')
    const [todo, setTodo] = useState([
        {
            id: 1,
            text: 'дело первое'
        },
        {
            id: 1,
            text: 'дело второе'
        }
    ]);
    const todos = todo.map((item) => {
        return (
            <div key={item.id}>
                {item.text}
            </div>
        )
    })

    function addDeal() {
        setTodo([...todo, {id: 3, text: newDeal}])
        setNewDeal('')
    }

    function handleInput(e) {
        setNewDeal(e.target.value);
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleInput} value={newDeal}/>
                <button onClick={addDeal}> add</button>
            </div>
            {todos}
        </div>
    )
}

export default Todo;
