import Link from "next/link";


export default function Home() {
  return (
    <div  className="py-80 text-center">
      <h1 className="text-5xl">Welcome to home pages</h1>
      <Link className="mx-2 text-blue-600 hover:underline" href='articles/breaking-news-123?lang=en'>Read in English</Link>
      <Link className="mx-2 text-blue-600 hover:underline" href='articles/breaking-news-123?lang=fr'>Read in French</Link>
      <Link className="mx-2 text-blue-600 hover:underline" href='articles/breaking-news-123?lang=be'>Read in Bengla</Link>
    </div>
  );
}
