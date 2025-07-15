import { Container } from 'react-bootstrap';
import Header from '../include/Header';
import button from 'react-bootstrap/Button';

const MainPage = () => {
    return (
        <>
            <Container>
                <Header />
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-outline-secondary" type="button">
                        Main Page
                    </button>
                </div>
            </Container>
        </>
    );
}

export default MainPage