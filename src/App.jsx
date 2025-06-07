import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Chart as ChartJS } from "chart.js";

function App() {
  return (
    <>
      <div>
        <header className="bg-white py-3 shadow fixed top-0 z-50 left-0 w-full">
          <Navbar />
        </header>
        <main className="min-h-screen lg:p-0 py-6 mt-[70px]">
          <Outlet />
        </main>
        <footer className="bg-[#1e1e1e] p-10">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
