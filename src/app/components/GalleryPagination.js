export default function GalleryPagination({ page, setPage, totalPages }) {
    return (
        <div className="gallery-btns">
            <button
                className="button"
                disabled={(page <= 1) ? true : false}
                onClick={() => {
                    window.scrollTo(0, 0);
                    setPage(page - 1);
                    
                    console.log(page);
                    console.log(totalPages);
                    console.log(page === totalPages);
                }}
            >
                PREV
            </button>

            <button
                className="button"
                disabled={(page === totalPages) ? true : false}
                onClick={() => {
                    window.scrollTo(0, 0);
                    setPage(page + 1);
                    console.log(page);
                    console.log(totalPages);
                    console.log(page ===  totalPages);
                }}
            >
                NEXT
            </button>
        </div>
    )
}