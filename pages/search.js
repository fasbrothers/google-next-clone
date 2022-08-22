import Head from "next/dist/shared/lib/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Geoogle Search</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json())
    : Response;

  return {
    props: {
      results: data,
    },
  };
}
