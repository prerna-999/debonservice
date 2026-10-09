import Head from "next/head";
import CorporateSupport from "@/components/corporate-support";

export default function CorporateSupportPage() {
  return (
    <>
      <Head>
        <title>Corporate Support Services | Debonaire</title>
        <meta
          name="description"
          content="Company registration, accounting, HR, admin and documentation support from one dependable team."
        />
      </Head>
      <CorporateSupport />
    </>
  );
}
