import './App.css';
import About from "./Components/Aboutme"
import Navi from "./Components/Navigation"
import Proj from "./Components/Projects"
import Cont from "./Components/Contacts"
import Foot from "./Components/Footer";
function App() {
  return (<>
   <Navi/>
   <About/>
   <Proj/>
   <Cont/>
   <Foot/>
   </>
  );
}

export default App;
