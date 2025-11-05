"use server";

// base endpoint
const BASE_URL = "https://api.harvardartmuseums.org/object";

export default async function getData(query: string = "", page: number = 1) {
  // read the api from env (required - x exposed)
  const API_KEY = process.env.API_KEY;
  
  // check for api key
  if (!API_KEY) {
    console.error("api key missing");
    return {
      ok: false,
      error: "API_KEY is not set in .env.local.",
      records: [],
      totalrecords: 0,
    };
  }

  // query string according to Harvard API docs
  const params = new URLSearchParams({
    apikey: API_KEY,
    size: "12",
    page: page.toString(),
  });

  // if entered a search term, add it
  if (query.trim().length > 0) {
    // keyword parameter for searching - titles, artists, description, etc.
    params.set("keyword", query.trim());
  }

  // final URL to call
  const url = `${BASE_URL}?${params.toString()}`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    // if error from Harvard API
    if (!res.ok) {
      return {
        ok: false,
        error: `Harvard API returned ${res.status}`,
        records: [],
        totalrecords: 0,
      };
    }

    const data = await res.json();

    return {
      ok: true,
      records: data.records ?? [],
      totalrecords: data.info?.totalrecords ?? 0,
    };
  } catch (err: any) {
    return {
      ok: false,
      error: err.message || "Failed to fetch from Harvard",
      records: [],
      totalrecords: 0,
    };
  }
}