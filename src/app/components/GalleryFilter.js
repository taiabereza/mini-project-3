export default function GalleryFilter({ filters, setFilters, setPage }) {
    return (
        <div className="gallery-filter">
            <select name="category" id="category"
                value={filters.category}
                onChange={(e) => {
                    setPage(1);
                    setFilters({
                        ...filters,
                        category: e.target.value
                    })
                }}
            >
                <option value="happy-holidays">
                    Holidays
                </option>

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

                <option value="summer-vacation">
                    Summer vacation
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

            <select name="orderBy" id="orderBy"
                value={filters.orderBy}
                onChange={(e) => {
                    setPage(1);
                    setFilters({
                        ...filters,
                        orderBy: e.target.value
                    })
                }}
            >
                <option value="relevance">
                    Relevance
                </option>

                <option value="latest">
                    Latest
                </option>

            </select>

            <select name="color" id="color"
                value={filters.color}
                onChange={(e) => {
                    setPage(1);
                    setFilters({
                        ...filters,
                        color: e.target.value
                    })
                }}
            >
                <option value="">
                    Color (optional)
                </option>

                <option value="black_and_white">
                    Black & White
                </option>

                <option value="black">
                    Black
                </option>

                <option value="white">
                    White
                </option>

                <option value="yellow">
                    Yellow
                </option>

                <option value="orange">
                    Orange
                </option>

                <option value="red">
                    Red
                </option>

                <option value="purple">
                    Purple
                </option>

                <option value="magenta">
                    Magenta
                </option>

                <option value="green">
                    Green
                </option>

                <option value="teal">
                    Teal
                </option>

                <option value="blue">
                    Blue
                </option>

            </select>

            <select name="orientation" id="orientation"
                value={filters.orientation}
                onChange={(e) => {
                    setPage(1);
                    setFilters({
                        ...filters,
                        orientation: e.target.value
                    })
                }}
            >

                <option value="">
                    Orientation (optional)
                </option>

                <option value="landscape">
                    Landscape
                </option>

                <option value="portrait">
                    Portrait
                </option>

                <option value="squarish">
                    Squarish
                </option>

            </select>
        </div>
    )
}