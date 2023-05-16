import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";

// import icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import Minter from "./Minter";
// import Item from "./Item";

function App() {
  // const nftCanisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";

  return (
    <div className="App">
      <Header />
      {/* <Item id={nftCanisterId}></Item> */}
      <Minter/>
      <img className="bottom-space" src={homeImage} />
      <Footer />
    </div>
  );
}

export default App;
library.add(fab, fas, far);
