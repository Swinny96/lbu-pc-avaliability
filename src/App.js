import "./App.css";
import Campus from "./Components/Tabs";

function App() {
  return (
    <section className="PC">
      <h2 className="PC_Title">PC Avaliability</h2>
      <div className="Tabs">
        <div className="Tab">Headingly</div>
        <div className="Tab">City Campus</div>
      </div>
      <h2 className="Campus-Title">Headingly</h2>
      <div className="Campuses">
        <Campus campus="Headingly" available="24" stock="25" />
        <Campus campus="Headingly" available="24" stock="25" />
        <Campus campus="Headingly" available="24" stock="25" />
        <Campus campus="Headingly" available="24" stock="25" />
      </div>
      <h2 className="Campus-Title">City Campus</h2>
      <div className="Campuses Secondary">
        <Campus campus="Headingly" available="24" stock="25" />
        <Campus campus="Headingly" available="24" stock="25" />
        <Campus campus="Headingly" available="24" stock="25" />
        <Campus campus="Headingly" available="24" stock="25" />
      </div>
    </section>
  );
}

export default App;
