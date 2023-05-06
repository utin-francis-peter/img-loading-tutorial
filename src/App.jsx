import { useEffect, useState } from "react";
import "./styles/styles.scss";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      if (typeof window !== "undefined") {
        window.addEventListener("load", () => {
          const heroImg = document.getElementsByTagName("img")[0];
          if (heroImg.complete && heroImg.naturalHeight !== 0)
            setIsLoaded(true);
        });
      }
    }
  });

  return (
    <>
      <div className="spinner" style={{ display: isLoaded ? "none" : "flex" }}>
        <ClipLoader size={70} loading={true} color="#f6921e" />
      </div>

      <div className="app" style={{ display: isLoaded ? "block" : "none" }}>
        <header className="container">
          <h3>logo</h3>

          <nav>
            <ul>
              <li>
                <a href="/">nav</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="hero container">
            <div className="hero-desc-container">
              <p>With the right mind, you will</p>
              <h1 className="fs-lg">SUCCEED</h1>
              <p className="hero-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                iusto assumenda corporis reprehenderit maxime non veniam.
              </p>
              <button className="btn-lg">BELIEVE IN YOU</button>
            </div>
            <div className="hero-img">
              <img
                src="https://media.istockphoto.com/id/1445687851/photo/portrait-of-an-adult-siblings.jpg?s=612x612&w=0&k=20&c=CtHQM49ho0qkKjIgRk9XwJJlvwSsXm_XTJ2xm6p7nKI="
                alt="img from unsplash"
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
