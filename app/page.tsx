import getData from "../lib/getArtworks";
import Artwork from "./components/Artwork";

// render fresh
export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  // wait for search params
  const params = await searchParams;
  // get search term and page number
  const query = (params.q || "").trim();
  const page = Number(params.page) || 1;

  // fetch data from Harvard API
  // if there isn't a query, return empty results
  const data = query
    ? await getData(query, page)
    : { ok: true, records: [], totalrecords: 0 };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-1">Harvard Art Museums</h2>
      <p className="text-base text-slate-500 mb-4">
        Exploring the Harvard Art Museums collection via API
      </p>

      {/* search form */}
      <form className="flex flex-col gap-2 mb-5" method="get">
        <label htmlFor="keyword" className="text-base font-medium text-slate-700">
          Keyword
        </label>
        <div className="flex gap-2">
          <input
            id="keyword"
            name="q"
            defaultValue={query}
            className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
            placeholder="Type something and hit Search (monet, portrait, landscape...)"
          />
          <button
            type="submit"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Results</h3>

        {/* different result states */}
        {!query ? (
          // hasn't searched yet
          <p className="text-sm text-slate-400">
            Results will show up here
          </p>
        ) : !data.ok ? (
          // error from API
          <p className="text-sm text-red-500">{data.error}</p>
        ) : data.records.length === 0 ? (
          // no results found
          <p className="text-sm text-slate-400">
            No artworks found for “{query}”.
          </p>
        ) : (
          // results found
          <div className="grid gap-4 md:grid-cols-3">
            {data.records.map((art: any, index: number) => (
              <Artwork key={art.id ?? index} art={art} />
            ))}
          </div>
        )}

        {/* pagination - only when we have actual results */}
        {query && data.ok && data.records.length > 0 ? (
          <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
            {page > 1 ? (
              <a
                href={`/?q=${encodeURIComponent(query)}&page=${page - 1}`}
                className="text-slate-900 hover:underline"
              >
                ← 
              </a>
            ) : null}
            <span>Page {page}</span>
            {data.records.length >= 12 ? (
              <a
                href={`/?q=${encodeURIComponent(query)}&page=${page + 1}`}
                className="text-slate-900 hover:underline"
              >
                →
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
