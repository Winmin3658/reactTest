function Bulb({light, lightClickButton}) {
  return (
    <div>
      <button onClick={() => {lightClickButton()}}>
        {light}
      </button>
    </div>
  );
}

export default Bulb;
