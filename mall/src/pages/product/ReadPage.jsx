import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useParams } from 'react-router-dom';
import ReadComponent from '../../component/product/ReadComponent';
import useCustomMove from "../../hooks/useCustomMove";

const ReadPage = () => {
    const { pno } = useParams();

    return (
        <Container>
            <Header />
            <ReadComponent
                pno={pno}
            />
        </Container>
    );
}
export default ReadPage