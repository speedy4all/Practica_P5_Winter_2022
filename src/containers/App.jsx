import { useState } from "react";
import Header from "../components/Header";
import "./App.css";
import useAppReducer from "./useAppReducer";

function App() {
  const [newPage, setNewPage] = useState("");

  const { title, pages, currentPage, showPage, user, dispatch } =
    useAppReducer();

  const resetTitle = () => {
    dispatch({ type: "RESET_TITLE" });
  };

  return (
    <>
      <Header />
      <nav>Navigation</nav>
      <main>
        <section>
          {showPage && (
            <>
              {pages[currentPage]}
              <div>
                <button
                  onClick={() => {
                    if (currentPage > 0) {
                      dispatch({
                        type: "SWITCH_PAGE",
                        payload: currentPage - 1,
                      });
                    }
                    //setCurrentPage(currentPage - 1);
                  }}
                >
                  &lt;
                </button>
                <button
                  onClick={() => {
                    if (currentPage < pages.length - 1) {
                      dispatch({
                        type: "SWITCH_PAGE",
                        payload: currentPage + 1,
                      });
                    }
                    //setCurrentPage(currentPage + 1);
                  }}
                >
                  &gt;
                </button>
              </div>
            </>
          )}
        </section>
      </main>
      <footer>Footer</footer>
      <input
        value={title}
        onChange={(e) => {
          dispatch({ type: "UPDATE_TITLE", payload: e.target.value });
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
        <button onClick={() => dispatch({ type: "TOGGLE_CONTENT" })}>
          Toggle content
        </button>
      </div>
      <div>
        <input
          placeholder="Add new page"
          value={newPage}
          onChange={(e) => setNewPage(e.target.value)}
        />
        <button
          onClick={() => {
            if (newPage) {
              dispatch({ type: "ADD_NEW_PAGE", payload: newPage });
              setNewPage("");
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
