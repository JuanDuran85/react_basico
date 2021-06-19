const initialState = [
    {
        id: 1,
        todo: "comprar comida",
        done: false
    }
];

const todoReducer = (state = initialState, actions ) => {
    if (actions?.type === 'agregar'){
        return [...state, actions.payload];
    }
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "arreglar cuarto",
    done: false
};

const agregarNewTodo = {
    type: 'agregar',
    payload: newTodo
};

todos = todoReducer(todos, agregarNewTodo);

console.log(todos);

