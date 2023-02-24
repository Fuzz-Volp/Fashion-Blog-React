import React, { useState } from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom"
import { Article, Footer, Header, Nav } from "./components";
import { ArticleData } from "./data"

console.log(ArticleData);
 
function App() {
 

  return (
    <div className="App border-l-8 border-0">
      <Header />
      <Nav />
      <Article articles={ArticleData}/>
      <Footer />
    </div>
  );
};

export default App;
