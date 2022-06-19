import CharacterList from "./pages/CharacterList";
import { Routes, Route } from "react-router-dom";
import Character from "./pages/Character";

function App() {
  return (
    <div>
      <h1 className=" text-red-200 ">hello</h1>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
