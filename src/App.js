import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <BrowserRouter>
//           <Navigation />
//           <Router />
//         </BrowserRouter>
//       </div>
//     </Provider>
//   );
// }

export default App;
