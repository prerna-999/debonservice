import Head from "next/head";
import BusinessOperations from "@/components/buisness-operations";

export default function BusinessOperationsPage() {
  return (
    <>
      <Head>
        <title>Business Operations | Debonaire Capital Assets</title>
        <meta
          name="description"
          content="Customer support, back-office, data operations and process automation handled by a dedicated team, so you can focus on growing your business."
        />
      </Head>
      <BusinessOperations />
    </>
  );
}
