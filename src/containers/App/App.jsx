import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import LoadingMask from "../../components/LoadingMask";
import { useAppContext } from "../../context/App";
import routes from "../routes";
import "./App.css";

function App() {
  const [inputPageText, setInputPageText] = useState("");
  const [userRights] = useState([]);

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

  const navigate = useNavigate();

  return (
    <>
      <main>
        <Header />
        <section>
          {showPage && (
            <>
              {pages.length === 0 ? (
                <LoadingMask />
              ) : (
                <>
                  <Routes>
                    {routes
                      .filter(
                        (route) =>
                          (route.rights &&
                            userRights.some((ur) =>
                              route.rights?.includes(ur)
                            )) ||
                          !route.rights
                      )
                      .map(({ element, path, children }) => (
                        <Route key={path} path={path} element={element}>
                          {children && (
                            <Route
                              path={children.path}
                              element={children.element}
                            />
                          )}
                        </Route>
                      ))}
                  </Routes>
                  <div className="navigation-buttons-container">
                    <button onClick={() => navigate(-1)}>Back</button>
                    <button onClick={() => navigate("/dashboard")}>
                      Dashboard
                    </button>
                    <button onClick={() => navigate("/about")}>About</button>
                    <button
                      onClick={() => navigate("/contact", { state: { pages } })}
                    >
                    </button>
                    <button onClick={() => navigate(1)}>Fwd</button>
                  </div>
                </>
              )}
            </>
          )}
        </section>
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
        <footer>Footer</footer>
      </main>
    </>
  );
}

export default App;
