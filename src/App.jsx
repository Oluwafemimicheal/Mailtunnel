import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <header className="bg-white py-5 shadow fixed top-0 z-50 left-0 w-full">
          <Navbar />
        </header>
        <main className="min-h-screen lg:p-0 py-6 mt-[70px]">
          <Outlet />
        </main>
        <footer className="bg-amber-950 p-10">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
