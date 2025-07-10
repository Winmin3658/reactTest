import { useSearchParams } from "react-router-dom";

const New = () => {
    // useState() 비슷한 기능을 url 처리하는 데 사용
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    const updateNameParam = (name, age)=>{
        setSearchParams({name:name, age:age});
    };
    return(
        <div>
            New ?{searchParams.get('name')} <br/>
            New ?{searchParams.get('age')} <br />
            <button onClick={()=>{ updateNameParam("kdj", "20"); }}>쿼리스트링 값 변경하기</button>
        </div>
    );
};
export default New;