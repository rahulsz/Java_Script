import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import BookList from "./BookList";
import State from "./State";
import Fetch from "./Fetch"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Fetch/>
     {/*  <State/> */}
   {/* <BookList/> */}
  {/*  <App /> */} 
  
  </StrictMode>
);
