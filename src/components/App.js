import { useEffect, useState } from "react";
import callToApi from "./services/api";
import ls from "./services/local-storage";
import PropTypes from "prop-types";
import "../styles/App.scss";
import Articles from "./Articles";
import Header from "./Header";

function App() {
  //Para los collapsables
  const [collapsable1, setCollapsable1] = useState("hidden");
  const [collapsable2, setCollapsable2] = useState("hidden");
  const [collapsable3, setCollapsable3] = useState("hidden");

  const handleCollapsable = (id) => {
    const selected = id;
    if (selected === "collapsable1") {
      setCollapsable1("");
      setCollapsable2("hidden");
      setCollapsable3("hidden");
    } else if (selected === "collapsable2") {
      setCollapsable2("");
      setCollapsable1("hidden");
      setCollapsable3("hidden");
    } else if (selected === "collapsable3") {
      setCollapsable3("");
      setCollapsable1("hidden");
      setCollapsable2("hidden");
    }
  };
  return (
    <div>
      <Header />
      <main>
        <Articles
          handleCollapsable={handleCollapsable}
          collapsable1={collapsable1}
          collapsable2={collapsable2}
          collapsable3={collapsable3}
        />
      </main>
    </div>
  );
}

export default App;
