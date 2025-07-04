function CountButton(props) {
  return (
    <div>
      <button onClick={()=>{ props.countClickButton() }}>+</button>
    </div>
  );
}

export default CountButton;
