import { useState } from "react";
import './App.css';

function App() {
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const registUser = () => {
    const user = { name, age, gender, phone };
    setUserList([...userList, user]);
    setName("");
    setAge("");
    setGender("");
    setPhone("");
  };

  const deleteUser = (index) => {
    const newList = userList.filter((_, i) => i !== index);
    setUserList(newList);
  };

  const updateUser = (index, updatedUser) => {
    const newList = [...userList];
    newList[index] = updatedUser;
    setUserList(newList);
  };

  return (
    <div className="App">
      <h1>회원 정보 출력</h1>
      <hr />
      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <User
              key={index}
              user={user}
              index={index}
              deleteUser={deleteUser}
              updateUser={updateUser}
            />
          ))}
        </tbody>
      </table>

      <div className="regist-wrap">
        <h3>회원 정보 등록</h3>
        <hr />
        <InputWrap text="이름" data={name} setData={setName} />
        <InputWrap text="나이" data={age} setData={setAge} />
        <InputWrap text="성별" data={gender} setData={setGender} />
        <InputWrap text="전화번호" data={phone} setData={setPhone} />
        <button onClick={registUser}>회원등록</button>
      </div>
    </div>
  );
}

const User = ({ user, index, deleteUser, updateUser }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEditUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUser(index, editUser);
    setIsEdit(false);
  };

  return (
    <tr>
      {isEdit ? (
        <>
          <td><input name="name" value={editUser.name} onChange={handleChange} /></td>
          <td><input name="age" value={editUser.age} onChange={handleChange} /></td>
          <td><input name="gender" value={editUser.gender} onChange={handleChange} /></td>
          <td><input name="phone" value={editUser.phone} onChange={handleChange} /></td>
          <td>
            <button onClick={handleSave}>저장</button>
            <button onClick={() => setIsEdit(false)}>취소</button>
          </td>
        </>
      ) : (
        <>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.gender}</td>
          <td>{user.phone}</td>
          <td>
            <button onClick={() => setIsEdit(true)}>수정</button>
            <button onClick={() => deleteUser(index)}>삭제</button>
          </td>
        </>
      )}
    </tr>
  );
};

const InputWrap = ({ text, data, setData }) => {
  return (
    <div className="input_wrap">
      <label>{text}</label>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
    </div>
  );
};

export default App;