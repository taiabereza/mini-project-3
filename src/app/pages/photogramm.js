import { useEffect } from "react";
import { useState } from "react";
import Gallery from "../components/Gallery";
import GalleryFilter from "../components/GalleryFilter";
import GalleryPagination from "../components/GalleryPagination";

export default function Photogramm() {

	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filters, setFilters] = useState({
		category: 'happy-holidays',
		orderBy: 'relevant',
		color: '',
		orientation: ''
	});
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	// JiNsM2V93y-KpymG-HgoDurjVvhadDJggGV4HSJUBG8

	const { category, orderBy, color, orientation } = filters;

	const dbURL = `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${category}&order_by=${orderBy}${(color) ? `&color=${color}` : ''}${(orientation) ? `&orientation=${orientation}` : ''}&client_id=JiNsM2V93y-KpymG-HgoDurjVvhadDJggGV4HSJUBG8`;

	useEffect(() => {
		setIsLoading(true);
		console.log(dbURL);
		fetch(dbURL)
			.then(resonse => resonse.json())
			.then(data => {
				setPhotos(data.results);
				setTotalPages(data.total_pages);
				// console.log(data.total_pages);
			})
		setIsLoading(false);
	}, [filters, page]);



	return (
		<div className="page page-photogramm">
			<header>
				<h1>PHOTOGRAMM</h1>
			</header>


			<GalleryFilter setPage={setPage} filters={filters} setFilters={setFilters} />

			{(totalPages === 0) ?
				<h2 className="no-photos-avail">NO PHOTOS AVAILABLE</h2> :
				<>
					<GalleryPagination page={page} setPage={setPage} totalPages={totalPages} />

					<Gallery photos={photos} isLoading={isLoading} />

					<GalleryPagination page={page} setPage={setPage} totalPages={totalPages} />
				</>}

		</div>
	)
}