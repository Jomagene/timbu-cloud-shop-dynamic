import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
