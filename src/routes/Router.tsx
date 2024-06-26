import Layout from "@/components/Layout";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage"));
const TestPage = lazy(() => import("@/pages/TestPage"));

export default function Router() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}
