import { getSession, useSession } from "next-auth/client";

function Blog({ data }) {
  const [session] = useSession();
  console.log({ session });

  return <h1>Blog page - {data}</h1>;
}

export default Blog;
//Server Side Authentication to Render This page at Server side
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        //Securing Pages Server Side
        //TO use a env variable to redirect url here instead of hard coding
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: "List of 100 personalized blogs",
      session,
    },
  };
}
