import { useState } from "react";

export default function GalleryPagination({ page, setPage, totalPages }) {

    const [edit, setEdit] = useState(false);

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

            {(!edit)
                ? (<div className="pagenumber" onClick={() =>{
                    setEdit(true);
                }}>
                    {page}
                </div>)
                : (<input className="pagenumber" type="number" name="pagenumber" id="pagenumber" value={page} onChange={e => {
                    setPage(e.target.value)
                }}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        setEdit(false)
                    }
                }} />)}

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