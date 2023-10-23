import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoFooter from "./components/TodoFooter/TodoFooter";

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <main>
        <Home />
      </main>
      <TodoFooter />
    </div>
  );
}

export default App;
