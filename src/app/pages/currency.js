import Converter from "../components/Converter";

export default function Currency() {
	return (
		<div className="page page-currency">
			<header>
				<h1>КОНВЕРТЕР ВАЛЮТ</h1>
			</header>

			<main>
				<div className="container">
					<Converter />
				</div>
			</main>
		</div>
	)
}