import { useMemo, useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import InComplete from "./InComplete";
import InProgress from "./InProgress";
import Complete from "./Complete";

// ステータス定数
export const STATUS = {
  INCOMPLETE: "in_complete",
  IN_PROGRESS: "in_progress",
  COMPLETE: "complete",
};

function App() {
  // ここにtodoの状態を管理するものを入れる
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ title: "", status: "", due: "" });

  // memo化することで、子コンポーネント内でのfilter処理が不要になる
  const { inCompleteTodos, inProgressTodos, completeTodos } = useMemo(() => {
    const inCompleteTodos = todos.filter(
      (todo) => todo.status === STATUS.INCOMPLETE
    );
    const inProgressTodos = todos.filter(
      (todo) => todo.status === STATUS.IN_PROGRESS
    );
    const completeTodos = todos.filter(
      (todo) => todo.status === STATUS.COMPLETE
    );

    return { inCompleteTodos, inProgressTodos, completeTodos };
  }, [todos]);

  // todo stateのオブジェクト全て利用しているので、title, status, dueを一緒に引数として渡す
  function addTodo(newTodo) {
    if (newTodo.title.trim() === "") {
      alert("タイトルを入力してください");
      return;
    }

    if (!canAddToStatus(STATUS.INCOMPLETE)) return;

    // console.log("Adding todo:", { title, status, due });
    setTodos([...todos, { id: Date.now(), ...newTodo }]);
    setTodo({ title: "", status: "", due: "" });
  }

  // 共通チェック関数
  function canAddToStatus(status) {
    const limits = {
      [STATUS.INCOMPLETE]: { max: 3, message: "タスクの上限が来ました" },
      [STATUS.IN_PROGRESS]: {
        max: 3,
        message: "進行中のタスクの上限が来ました",
      },
      [STATUS.COMPLETE]: {
        max: 3,
        message: "完了済みのタスクの上限が来ました、削除してください",
      },
    };

    const limit = limits[status];
    const count = todos.filter((todo) => todo.status === status).length;

    if (count >= limit.max) {
      alert(limit.message);
      return false;
    }
    return true;
  }

  // ステータス変更関数
  function moveTodo(id, nextStatus) {
    if (!canAddToStatus(nextStatus)) return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: nextStatus } : todo
      )
    );
  }

  // 削除
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      {/* これはtodo追加 */}
      <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <InComplete
        todos={inCompleteTodos}
        moveTodo={moveTodo}
        deleteTodo={deleteTodo}
      />
      <InProgress
        todos={inProgressTodos}
        moveTodo={moveTodo}
        deleteTodo={deleteTodo}
      />
      <Complete todos={completeTodos} deleteTodo={deleteTodo} />
      {/* ここより下は後でコンポーネント化する */}
    </>
  );
}

export default App;
