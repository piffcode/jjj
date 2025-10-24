import Layout from "./Layout.jsx";

import Home from "./Home";

import Music from "./Music";

import Contact from "./Contact";

import Press from "./Press";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGE_CONFIG = [
  { name: "Home", component: Home, basePaths: ["/", "/home", "/Home"] },
  { name: "Music", component: Music, basePaths: ["/music", "/Music"] },
  { name: "Contact", component: Contact, basePaths: ["/contact", "/Contact"] },
  { name: "Press", component: Press, basePaths: ["/press", "/Press"] },
];

const pathToPageName = new Map();
PAGE_CONFIG.forEach(({ name, basePaths }) => {
  basePaths.forEach((path) => {
    pathToPageName.set(normalizePath(path), name);
  });
});

function normalizePath(pathname) {
  if (!pathname) {
    return "/";
  }
  const [pathOnly] = pathname.split('?');
  const trimmed = pathOnly.replace(/\/+$/, "");
  const normalized = trimmed || "/";
  return normalized.toLowerCase();
}

const ROUTE_ELEMENTS = PAGE_CONFIG.flatMap(({ name, component: Component, basePaths }) => {
  const paths = new Set();

  basePaths.forEach((basePath) => {
    const normalizedBase = basePath === "/" ? "/" : basePath.replace(/\/+$/, "");
    paths.add(normalizedBase);
    if (normalizedBase !== "/") {
      paths.add(`${normalizedBase}/*`);
    }
  });

  return Array.from(paths).map((path) => (
    <Route key={`${name}:${path}`} path={path} element={<Component />} />
  ));
});

function _getCurrentPage(url) {
  return pathToPageName.get(normalizePath(url)) || "Home";
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);

    return (
        <Layout currentPageName={currentPage}>
            <Routes>
                {ROUTE_ELEMENTS}
                <Route path="*" element={<Home />} />
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}
