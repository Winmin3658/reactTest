import { useState } from "react";

function Register(props) {
  // 값을 입력해서 화면에 보여야 되는 곳 useState
  // 값이 계속 유지되어야 되는 곳 useState
  // 값이 변동이 되면 화면이 리렌더링 useState
    /* const [name, setName] = useState("")
    const [birth, setBirth] = useState("")
    const [country, setCountry] = useState("")
    const [bio, setBio] = useState("") */

    const [input, setInput] = useState({
        name: '', birth: '', country: '', bio: ''
    })

    /* const onChangeName = (e) => {
        // setName(e.target.value);
        setInput({ ...input, name: e.target.value});
    };
    const onChangeDate = (e) => {
        // setBirth(e.target.value);
        setInput({ ...input, birth: e.target.value});
    };
    const onChangeCountry = (e) => {
        // setCountry(e.target.value);
        setInput({ ...input, country: e.target.value});
    };
    const onChangeBio = (e) => {
        // setBio(e.target.value);
        setInput({ ...input, bio: e.target.value});
    }; */

    const onChangeMember = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value});
    };

    return (
    <div>
      <h1>회원가입</h1>
      <div>
        <div>
          <input value={input.name} name={"name"} onChange={onChangeMember}
            placeholder={"이름"} />
        </div>

        <div>
            <input value={input.birth} name={"birth"} onChange={onChangeMember} type="date" />
        </div>

        <div>
          <select value={input.country} name={"country"} onChange={onChangeMember}>
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
          </select>
          {input.country}
        </div>
        <div></div>
      </div>
      <textarea value={input.bio} name={"bio"} onChange={onChangeMember} />
    </div>
  );
}

export default Register;


