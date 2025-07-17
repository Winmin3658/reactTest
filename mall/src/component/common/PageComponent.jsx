import React from "react";
import { Container } from "react-bootstrap";

const PageComponent = ({ serverData, moveToList }) => {
    return (
        <>
            <Container className="d-flex justify-content-center mt-4">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {serverData.prev ? (
                            <li
                                class="page-item"
                                onClick={() => moveToList({ page: serverData.prevPage })}
                            >
                                <a class="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                        ) : (
                            <></>
                        )}

                        {serverData.pageNumList.map((pageNum) => {
                            return serverData.current === pageNum ? (
                                <li key={pageNum} class="page-item" className="active">
                                    <a
                                        class="page-link"
                                        href="#"
                                        onClick={() => moveToList({ page: pageNum })}
                                    >
                                        {pageNum}
                                    </a>
                                </li>
                            ) : (
                                <li
                                    key={pageNum}
                                    class="page-item"
                                    onClick={() => moveToList({ page: pageNum })}
                                >
                                    <a class="page-link" href="#">
                                        {pageNum}
                                    </a>
                                </li>
                            );
                        })}

                        {serverData.next ? (
                            <li
                                class="page-item"
                                onClick={() => moveToList({ page: serverData.nextPage })}
                            >
                                <a class="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        ) : (
                            <></>
                        )}
                    </ul>
                </nav>
            </Container>
        </>
    );
};

export default PageComponent;
