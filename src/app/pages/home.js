import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="page page-home">
            <header>
                <h1>HOME PAGE</h1>
            </header>
            <main>
                <div className="container">
                    <Navbar />
                </div>
            </main>
        </div>
    )
}