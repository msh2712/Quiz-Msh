import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Loader from "./Component/Loader";
import Topic from "./Component/Topic";

const Home = lazy(() => import("./Component/Home"));
const Quiz = lazy(() => import("./Component/Quiz"));

const App = () => {
  return (
    <div className="w-100">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader/>}>
                <Layout Component={Home} />
              </Suspense>
            }
          />
          <Route
            path="/quiz"
            element={
              <Suspense fallback={<Loader/>}>
                <Layout Component={Quiz} />
              </Suspense>
            }
          />
           <Route
            path="/topic"
            element={
              <Suspense fallback={<Loader/>}>
                <Layout Component={Topic} />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
