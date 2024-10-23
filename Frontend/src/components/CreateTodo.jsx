import React, { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />{" "}
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              content: content,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo is added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
