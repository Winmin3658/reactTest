import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useParams } from 'react-router-dom';
import ReadComponent from '../../component/ReadComponent';

const ReadPage = () => {
    const { tno } = useParams();

    return (
        <Container>
            <Header />
            <ReadComponent tno={tno} />
        </Container>
    );
}
export default ReadPage