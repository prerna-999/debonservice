import Head from "next/head";
import ITTechnologyPage from "@/components/it-technology";
export default function ITTechnology() {
  return (
    <>
      <Head>
        <title>IT & Technology Services | Debon Service</title>
        <meta
          name="description"
          content="Websites, software, mobile apps, UI/UX, analytics and integrations built to scale with your business."
        />
      </Head>
      <ITTechnologyPage />
    </>
  );
}