import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Search,
  SinglePost,
  CreatePost,
  Bookmarks,
  Profile,
  Premium,
  Settings,
  SingleUser,
} from "@/pages";
import Layout from "./layouts/layout";

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
        <Route
          path="/post/:id"
          element={
            <Layout>
              <SinglePost />
            </Layout>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Layout>
              <Bookmarks />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/premium"
          element={
            <Layout>
              <Premium />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/user/:id"
          element={
            <Layout>
              <SingleUser />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
