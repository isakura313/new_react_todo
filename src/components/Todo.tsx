import {useState} from 'react';

function Todo() {
    const [newDeal, setNewDeal] = useState('')
    const [todo, setTodo] = useState([
        {
            id: 1,
            text: 'дело первое'
        },
        {
            id: 2,
            text: 'дело второе'
        }
    ]);
    const todos = todo.map((item) => {
        return (
            <div className="border-2 border-blue mt-4 p-2 rounded" key={item.id}>
                {item.text}
            </div>
        )
    })

    function addDeal() {
        setTodo([...todo, {id: todo[todo.length-1].id+1, text: newDeal}])
        setNewDeal('')
    }

    function handleInput(e) {
        setNewDeal(e.target.value);
    }

    return (
        <div className="flex justify-center">   
            <div className="w-3/12 flex flex-col">
            <h1 className="text-3xl font-bold text-center mb-8"> hello</h1>
                <div className="flex">
                    <input
                        className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" onChange={handleInput} value={newDeal}/>
                    <button onClick={addDeal}
                            className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> add
                    </button>
                </div>

                {todos}
            </div>
        </div>
    )
}

export default Todo;
