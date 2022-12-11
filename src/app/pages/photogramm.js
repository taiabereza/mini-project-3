import { useEffect } from "react";
import { useState } from "react";
import Gallery from "../components/Gallery";

export default function Photogramm() {

	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [category, setCategory] = useState('vacation');

	// JiNsM2V93y-KpymG-HgoDurjVvhadDJggGV4HSJUBG8

	const dbURL = `https://api.unsplash.com/search/photos?page=2&per_page=12&query=${category}&client_id=JiNsM2V93y-KpymG-HgoDurjVvhadDJggGV4HSJUBG8`;

	useEffect(() => {
		setIsLoading(true);
		fetch(dbURL)
			.then(resonse => resonse.json())
			.then(data => {
				setPhotos(data.results);
				console.log(photos);
			})
		setIsLoading(false);
	}, []);

	return (
		<div className="page page-photogramm">
			<header>
				<h1>PHOTOGRAMM</h1>
				<Gallery photos={photos} isLoading={isLoading} />
			</header>


		</div>
	)
}