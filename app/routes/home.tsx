import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
    <section className="main-section">
      <div className="page-heading">
        <h1>Track</h1>
      </div>
    </section>
}
