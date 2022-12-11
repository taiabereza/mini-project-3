export default function GalleryFilter({ category, setCategory }) {
    return (
        <div className="gallery-filter">
            <select name="category" id="category"
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value)
                }}
            >
                <option value="new-year-eve">
                    New Year's Day
                </option>

                <option value="valentines-day">
                    Valentine's Day
                </option>

                <option value="st-patrick-day">
                    St. Patrick's Day
                </option>

                <option value="easter">
                    Easter
                </option>

                <option value="halloween">
                    Halloween
                </option>

                <option value="thanksgiving">
                    Thanksgiving
                </option>

                <option value="christmas">
                    Christmas
                </option>
            </select>
        </div>
    )
}