import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "첫 번째 항목" },
    { id: 2, name: "두 번째 항목" },
  ]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === "") return;
    setItems([...items, { id: Date.now(), name: input }]);
    setInput("");
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setInput(item.name);
  };

  const handleUpdate = () => {
    if (input.trim() === "") return;
    setItems(
      items.map((item) =>
        item.id === editId ? { ...item, name: input } : item
      )
    );
    setEditId(null);
    setInput("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h1>CRUD 예제</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="내용 입력"
      />
      <button onClick={editId ? handleUpdate : handleAdd}>
        {editId ? "수정하기" : "추가하기"}
      </button>

      <ul style={{ marginTop: "2rem" }}>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item)}>수정</button>
            <button onClick={() => handleDelete(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
