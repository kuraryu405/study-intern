type Todo = {
    id: number;
    title: string;
    status: string;
    due: string;
  }

type TodoStatus = 'todo' | 'in_progress' | 'done';

type CreateTodoDto = {
    title: string;
    status: string;
    due: string;
}