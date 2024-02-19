import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Search } from "@/pages";
import Layout from "./layouts/layout";
import CreatePost from "./pages/create-post";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
        <Route
          path="/create-post"
          element={
            <Layout>
              <CreatePost />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
