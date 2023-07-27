import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./data";
import "./scss/app.scss";
function App() {
  return (
    <div className="App">
      <Header />

      <Card data={data} />
      <Footer />
    </div>
  );
}

export default App;
