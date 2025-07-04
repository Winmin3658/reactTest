function Button({text, color="red", children}) {
    // 이벤트 처리 핸들러 함수 (선언 표현(2: 익명 함수, 화살표 함수))
    // const onClickButton = function () {}
    // e(이벤트 객체 참조 변수): 버튼에서 이벤트를 클릭하면 클릭 당시 모든 정보를 가지고 있음
    const onClickButton = (e) => {
        console.log(e);
        alert(`text=${text} color=${color} children=${children}`);
    };
    return (
        <>
            <button type="button" style={{color: color}} onClick={onClickButton}>
                {text} - {text.toUpperCase()}
                {children}
            </button>
        </>
    )
}

export default Button;