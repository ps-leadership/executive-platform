import Navbar from "@/components/Navbar";
import FeaturedThinking from "@/components/FeaturedThinking";
import FrameworkLibrary from "@/components/FrameworkLibrary";
export default function Home() {
  return (
     <>
    <main className="min-h-screen">
      
     <section className="mx-auto max-w-6xl px-8 pt-24 pb-16">
        <h1 className="text-6xl font-bold tracking-tight">
          Priyanshu Shrivastava
        </h1>

        <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-gray-600">
          Building, Transforming & Scaling Customer Organizations.
        </p>

        <p className="mt-10 max-w-3xl text-lg leading-8 text-gray-500">
          Leadership insights, operating models, frameworks, and research from
          nearly two decades of building global customer-facing organizations.
        </p>

        <div className="mt-14 flex gap-4">
          <button className="rounded-lg bg-black px-6 py-3 text-white">
            Explore Insights
          </button>

          <button className="rounded-lg border px-6 py-3">
            Executive Profile
          </button>
        </div>
      </section>
        <FeaturedThinking />
        <FrameworkLibrary />
    </main>
    </>
  );
}