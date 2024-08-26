import { type ITodo } from "./typings";

function groupTodosByDate(todos: ITodo[]) {
  return todos.reduce((groupedTodos, todo) => {
    const date = todo.date;
    if (!groupedTodos[date]) {
      groupedTodos[date] = [];
    }
    groupedTodos[date].push(todo);
    return groupedTodos;
  }, {} as any);
}

export default groupTodosByDate;
