import React, { useState } from "react";
import "./App.css";

function App() {
//새로운 객체(기본형) 만들기?
  const [todos, setTodos] = useState([ 
    {
      title: "react를 배워봅시다.",
    },
  ]);

  return (
    // 레이아웃으로 묶어주고 폼과 리스트 정보 전달.
    <Layout>        
      <Form todos={todos} setTodos={setTodos}></Form>
      <List todos={todos} setTodos={setTodos}></List>
    </Layout>
  );
}

// 프롭스로 연결.
function Layout(props) {
  return <div className="layout">{props.children}</div>;
}

// 기초 베이스 만들기
function Form({ todos, setTodos }) {
  // 빈 객체 만들기
  const init = {
    title: "",
  };

  //이벤트 전파 onChange는 input에서 사용 가능
  const [todo, setTodo] = useState(init);
  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // 버튼에서 onSubmit 사용 가능
  // 빈 공백 있는지 확인
  const onSubmit = () => {
    if (todo.title.trim() === "") return;
    //스프레드로 기존 객체를 가져오면서 새로운 객체 입력.
    setTodos([...todos, { ...todo }]);
    setTodo(init);
  };
  // console.log(todos);

  return (
    <div className="container">
      <div className="input-box">
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChange}
        ></input>
        <button onClick={onSubmit}>추가하기</button>
      </div>
    </div>
  );
}

function List({ todos }) {
  console.log(todos);
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="list-wrapper">
        {todos.map((todo) => (
          <Todo todo={todo}></Todo>
        ))}
      </div>
    </div>
  );
}

function Todo({ todo }) {
  return (
    <div className="todo-box">
      <h2>{todo.title}</h2>
    </div>
  );
}

export default App;