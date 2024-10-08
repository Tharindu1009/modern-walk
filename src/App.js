import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { pageRoutes } from "./routes/index"

function App() {
  // setup routes
  const routes = (
    <Routes>
      {pageRoutes.map((route, key) => {
        return <Route key={key} exact path={route.path} element={<route.component />} />;
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;
