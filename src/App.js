import React from "react";
import "../src/Styles/styles.css";
import Components from "./Components/Components";
import * as Env from "./environments";
import Parse from "parse";
//import Footer from "./Components/Footer/Footer";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const App = () => {
  return <Components />;
};

export default App;

// function App() {
//   return <Components />;
// }

// export default App;

//I would like a footer on every page, could I put that here? Tried the following, but no luck.

//The below throws an error:
//useHref() may be used only in the context of a <Router> component
// const App = () => (
//   <>
//     <Components />
//     <Footer />
//   </>
// );

// export default App;

//This also errors witht the same error

// function App() {
//   return (
//     <div>
//       <Components />
//       <Footer />
//     </div>
//   );
// }
