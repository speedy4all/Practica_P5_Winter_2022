import { useState } from "react";
import Header from "../components/Header";
import { useAppContext } from "../context/App";
import "./App.css";

function App() {
  const [inputPageText, setInputPageText] = useState("");
  const {
    title,
    pages,
    currentPage,
    showPage,
    resetTitle,
    decrementPage,
    incrementPage,
    updateTitle,
    toggleContent,
    createNewPage,
  } = useAppContext();

  return (
    <>
      <Header />
      <nav>Navigation</nav>
      <main>
        <section>
          {showPage && (
            <>
              {pages.length === 0 ? (
                <div>Loading content....</div>
              ) : (
                pages[currentPage]
              )}
              <div>
                <button onClick={decrementPage}>&lt;</button>
                <button onClick={incrementPage}>&gt;</button>
              </div>
            </>
          )}
        </section>
      </main>
      <footer>Footer</footer>
      <input
        value={title}
        onChange={(e) => {
          updateTitle(e.target.value);
        }}
      />
      <button
        onClick={() => {
          resetTitle();
        }}
      >
        Reset title
      </button>
      <div>
        <button onClick={toggleContent}>Toggle content</button>
      </div>
      <div>
        <input
          placeholder="Add new page"
          value={inputPageText}
          onChange={(e) => setInputPageText(e.target.value)}
        />
        <button
          onClick={() => {
            if (inputPageText) {
              createNewPage(inputPageText);
              setInputPageText("");
            }
          }}
        >
          Add new page
        </button>
      </div>
    </>
  );
}

export default App;
