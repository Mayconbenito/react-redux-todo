const initialState = {
  todos: [
    {
      id: 1,
      name: "First todo"
    },
    {
      id: 2,
      name: "Second todo"
    }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODO":
      return {
        ...state,
        todos: action.todos
      };
    case "NEW_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    default:
      return state;
  }
};
