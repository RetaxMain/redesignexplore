import React from "react";
import Index from "./Index";
import { getAllSchools } from "./types/school";
import { parseFiltersFromParams } from "../lib/filters";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const entries = Object.entries(searchParams ?? {}).flatMap(([key, value]) =>
    Array.isArray(value) ? value.map((v) => [key, v ?? ""]) : [[key, value ?? ""]]
  ) as [string, string][];

  const urlSearchParams = new URLSearchParams(entries);
  const filters = parseFiltersFromParams(urlSearchParams);
  const schools = await getAllSchools(filters);

  return <Index initialSchools={schools} initialFilters={filters} />;
}
