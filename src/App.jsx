import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader";

const MoviePage = lazy(() => import("./pages/MoviePage"));
const MainPage = lazy(() => import("./pages/MainPage"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
