import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <div className={styles.container}>
      <Head>
        <title>Know me better</title>
        <meta name="description" content="know me better" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* Making use of Next Auth Provider */}
          {session ? `${session.user.name}, ` : ""}
          <b className={styles.project}>Know Me Better </b>
        </h1>

        <p className={styles.description}>
          Get started by making your own Static Portfolio Website! <br />
        </p>
      </main>
    </div>
  );
}
