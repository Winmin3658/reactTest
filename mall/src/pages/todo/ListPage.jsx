import { Container } from 'react-bootstrap';
import Header from './../../include/Header';
import ListComponent from '../../component/ListComponent';
import { useSearchParams } from 'react-router';

const ListPage = () => {
    const [queryParams] = useSearchParams();
    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

    return (
        <Container>
            <Header />
            <div className="d-grid mt-3">
                {`Todo List page components page: ${page} size: ${size}`}
                <ListComponent />
            </div>
        </Container>
    );
};
export default ListPage;