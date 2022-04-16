import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

import PageLayout from '../../components/Layouts/PageLayout';

import {
  ServicesContainer,
  ServicesHeaderContainer,
} from '../../styles/components/ServicesPage';

export default function ServicesPage({ posts }) {
  return (
    <PageLayout>
      <ServicesHeaderContainer>
        <h1>CUSTOM WEBSITE & WEB APPLICATION DEVELOPMENT.</h1>
        <p>
          From front-end to back-end, our custom web development team makes sure all
          the project components function just as they are designed. As seasoned
          experts in content management systems, responsive design, web app
          development, and more, we're experienced at saying, “We've got this.”
        </p>
      </ServicesHeaderContainer>
      <ServicesContainer className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-0 md:p-0'>
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
          >
            <Link href={`/services/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <h1 className='p-4'>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </ServicesContainer>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('store/mdFiles/services');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`store/mdFiles/services/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
