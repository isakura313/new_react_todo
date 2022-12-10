import {useState} from 'react';
// import { BeakerIcon } from '@heroicons/react/solid/Be


function Todo() {
    const [newDeal, setNewDeal] = useState('')
    const [todo, setTodo] = useState([
        {
            id: 1,
            text: 'дело первое'
        },
    ]);
    const todos = todo.map((item) => {
        return (
            <div className="border-2 border-blue mt-4 p-2 rounded flex justify-between" key={item.id}>
                {item.text}
                <div onClick={()=>deleteItem(item.id)} className="hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

                </div>
            </div>
        )
    })

    function addDeal() {
        const id = todo[todo.length-1]?.id+1 | 0;
        setTodo([...todo, {id, text: newDeal}])
        setNewDeal('')
    }
    function deleteItem(id:number){
        const filteredTodo = todo.filter((item)=> item.id !== id)
        setTodo(filteredTodo);
    }

    function handleInput(e) {
        setNewDeal(e.target.value);
    }
    function onKeyDown(e){
     if(e.code === 'Enter'){
         addDeal()
     }
    }

    return (
        <div className="flex justify-center">
            <div className="w-3/12 flex flex-col">
            <h1 className="text-3xl font-bold text-center mb-8"> hello</h1>
                <div className="flex">
                    <input
                        className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" onChange={handleInput} value={newDeal} onKeyDown={onKeyDown}/>
                    <button onClick={addDeal}
                            disabled={!newDeal}
                            className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> add

                    </button>
                </div>


                {todos}
            </div>
        </div>
    )
}

export default Todo;
