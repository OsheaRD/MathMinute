import "./App.css";
import AppRouter from "./AppRouter";
import Counter from "./components/Counter"




// All content will come from the AppRouter imported above

function App() {

  
  return (
    
    <div>
      <AppRouter />
      <Counter/>
    </div>
  );
}

export default App;