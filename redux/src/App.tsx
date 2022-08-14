import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLanguages, toFavorite } from "./redux/sliceLanguages";
import { useState } from "react";
import { increment, decrement } from "./redux/sliceCounter";
import { RootState } from "./redux/store";
function App() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const { languages } = useSelector((state: RootState) => state.languages);
  const [newLanguage, setNewLanguage] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <div className="App">
      <ul>
        {languages.map((values, index) => (
          <React.Fragment key={index}>
            <div>
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
          </React.Fragment>
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
      <div>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increment())}>AUMENTAR</button>
        <button onClick={() => dispatch(decrement())}>DIMINUIR</button>
      </div>
    </div>
  );
}

export default App;
