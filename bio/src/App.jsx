import "./App.css";
import BioCard from "./components/bioCard";
import bgImage from "./assets/racing.jpg";

function App() {
   return (
      <div className="bio-container">
         <div
            className="bio-background"
            style={{ backgroundImage: `url(${bgImage})` }}
         ></div>
         <BioCard />
      </div>
   );
}

export default App;
