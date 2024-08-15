import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationComponent({ totalPages, currentPage, onPageChange }) {
    let items = [];

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => onPageChange(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return <Pagination>{items}</Pagination>;
}

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // Por ejemplo, si tienes 5 páginas en total

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="App">
            <PaginationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default App;
