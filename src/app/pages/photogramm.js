import { useEffect } from "react";
import { useState } from "react";
import Gallery from "../components/Gallery";
import GalleryFilter from "../components/GalleryFilter";

export default function Photogramm() {

	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [category, setCategory] = useState('christmas');
	const [page, setPage] = useState(1);

	// JiNsM2V93y-KpymG-HgoDurjVvhadDJggGV4HSJUBG8

	const dbURL = `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${category}&client_id=JiNsM2V93y-KpymG-HgoDurjVvhadDJggGV4HSJUBG8`;

	useEffect(() => {
		setIsLoading(true);
		fetch(dbURL)
			.then(resonse => resonse.json())
			.then(data => {
				setPhotos(data.results);
				console.log(photos);
			})
		setIsLoading(false);
	}, [category, page]);

	return (
		<div className="page page-photogramm">
			<header>
				<h1>PHOTOGRAMM</h1>
			</header>


			<GalleryFilter category={category} setCategory={setCategory} />

			
			<div className="gallery-btns">
				<button className="button" onClick={() => setPage(page - 1)}>PREV</button>
				<button  className="button" onClick={() => setPage(page + 1)}>NEXT</button>
			</div>


			<Gallery photos={photos} isLoading={isLoading} />

		</div>
	)
}