import { Container } from 'react-bootstrap';
import Header from '../include/Header';
import { Link } from "react-router-dom";
import mainImage from '../assets/main.png'

const MainPage = () => {
    return (
        <>
            <Header />
            <div className="d-grid gap-2 mt-3">
                <img
                    src={mainImage}
                    alt="Main"
                    style={{
                        width: "500px",             // 정사각형 너비
                        height: "500px",            // 정사각형 높이
                        objectFit: "contain",       // 잘리지 않게 전체 보여줌
                        borderRadius: "10px",
                        marginTop: "20px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                />
                <button className="btn btn-outline-secondary gap-2 mt-3" type="button">
                    Main Page
                </button>
            </div>
        </>
    );
};
export default MainPage;