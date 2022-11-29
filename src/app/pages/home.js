import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="page page-home">
            <header>
                <h1>Домашня сторінка проєкту</h1>
            </header>
            <main>
                <div className="container">
                    <h2>
                        Виберіть міні-проєкт:
                    </h2>
                    <Navbar />
                </div>
            </main>
        </div>
    )
}