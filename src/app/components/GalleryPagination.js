import { useEffect, useRef, useState } from "react";

export default function GalleryPagination({ page, setPage, totalPages }) {

    return (
        <div className="gallery-btns">
            <button
                className="button"
                disabled={(page <= 1) ? true : false}
                onClick={() => {
                    window.scrollTo(0, 0);
                    setPage(page - 1);
                }}
            >
                PREV
            </button>

            <input
                className="pagenumber"
                type="number"
                name="pagenumber"
                id="pagenumber"
                value={page !== 0 ? page : ''}
                onChange={e => {
                    e.target.value > totalPages ? setPage(totalPages) : setPage(Number(e.target.value))
                }}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        setPage(e.target.value === '' ? 1 : Number(e.target.value))
                    }
                }} />

            /
            <div className="pagenumber">{totalPages}</div>

            <button
                className="button"
                disabled={(page === totalPages) ? true : false}
                onClick={() => {
                    window.scrollTo(0, 0);
                    setPage(page + 1);
                }}
            >
                NEXT
            </button>
        </div>
    )
}