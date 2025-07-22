import { Container } from 'react-bootstrap';
import Header from './../../include/Header';
import AddComponent from '../../component/product/AddComponent';
const AddPage = () => {
    return (
        <Container>
            <Header />
            <div className="d-grid mt-5">
                <AddComponent />
            </div>
        </Container>
    );
};
export default AddPage;