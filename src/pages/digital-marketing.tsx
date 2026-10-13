import Head from "next/head";
import OnlineGrowth from "@/components/online-growth";

export default function OnlineGrowthPage() {
  return (
    <>
      <Head>
        <title>Online Growth Services | Debon Service</title>
        <meta
          name="description"
          content="SEO, paid ads, social media, web design and email marketing to help your business get found online and win more customers."
        />
      </Head>
      <OnlineGrowth />
    </>
  );
}
