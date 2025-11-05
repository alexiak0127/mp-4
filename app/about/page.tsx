export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">About this project</h2>
        <p className="mt-2 text-base text-slate-600">
          This mini-project is a Next.js app that lets you search the Harvard
          Art Museums API and view artworks.
        </p>
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
          What it does
        </h3>
        <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
          <li>The home page has a search bar.</li>
          <li>
            When you search, the app asks the Harvard API for objects that match your keyword.
          </li>
          <li>Results show the artwork title, artist (when available), date, and ID.</li>
          <li>There is a separate About page to explain the project.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
          About the Harvard Art Museums API
        </h3>
        <p className="text-sm text-slate-600">
          The Harvard Art Museums provide a public REST API with data about their collection. All
          requests go to their main API URL and must include an API key as a query parameter. The
          API has several endpoints, but this project uses the one that returns objects in the
          collection, because that endpoint includes fields like title, people (artists), image
          links, and dates (good to display in a UI).
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
          Tech used
        </h3>
        <p className="text-sm text-slate-600">
          Next.js App Router, TypeScript, Tailwind CSS, and the Harvard Art Museums API.
        </p>
      </section>
    </div>
  );
}
