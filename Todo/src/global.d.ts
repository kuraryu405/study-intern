type TodoStatus = 'InComplete' | 'InProgress' | 'Complete'| string;

type Todo = {
    id: number;
    title: string;
    status: TodoStatus;
    due: string;
  }



type CreateTodoDto = {
    title: string;
    status: TodoStatus;
    due: string;
}