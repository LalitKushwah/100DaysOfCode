import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">
        Go to
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
    </div>
  );
}
