import { useDispatch, useSelector } from "react-redux";
import { addLanguages, useLanguages, toFavorite } from "./redux/sliceLanguages";
import { useState } from "react";

function App() {
  const languages = useSelector(useLanguages);
  const [newLanguage, setNewLanguage] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <ul>
        {languages.map((values, index) => (
          <>
            <div key={index}>
              <span style={{ margin: "2rem" }}>
                {values.name.toUpperCase()}
              </span>
              <button
                type="button"
                onClick={() => dispatch(toFavorite(values.name))}
              >
                {values.favorite ? "Desfavoritar" : "Favoritar"}
              </button>
            </div>
          </>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
        />
        <button
          type="button"
          onClick={() => dispatch(addLanguages(newLanguage.toUpperCase()))}
        >
          Adicionar linguagem
        </button>
      </div>
    </div>
  );
}

export default App;
