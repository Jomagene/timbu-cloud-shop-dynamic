import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import "./styles/global.css";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
