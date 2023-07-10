import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header title="My Application" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
