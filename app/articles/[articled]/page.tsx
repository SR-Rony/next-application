import Link from 'next/link';
import React from 'react';

interface ArticlesProps {
  params: { articleId: string };
  searchParams: { lang?: 'en' | 'fr' | 'be' };
}

const Articles = async ({ params, searchParams }: ArticlesProps) => {
    
  const { articleId } = params;
  const { lang = 'en' } = searchParams;

  console.log('search params', searchParams);

  return (
    <div className="py-80 text-center">
      <h1 className="text-5xl">News article {articleId}</h1>
      <p>Reading in language is {lang}</p>

      <div>
        <Link className="mx-2 text-blue-600 hover:underline" href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link className="mx-2 text-blue-600 hover:underline" href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link className="mx-2 text-blue-600 hover:underline" href={`/articles/${articleId}?lang=be`}>Bangla</Link>
      </div>
    </div>
  );
};

export default Articles;