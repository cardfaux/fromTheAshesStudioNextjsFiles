import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

import { NextSeo } from 'next-seo';
import ContactForm from '../../components/Homepage/ContactForm/ContactForm';

import PageLayout from '../../components/Layouts/PageLayout';

import {
  ServicesContainer,
  ServicesHeaderContainer,
} from '../../styles/components/ServicesPage';

export default function ServicesPage({ posts }) {
  return (
    <>
      <NextSeo
        title='Web design services for any budget'
        description='All the services for your business.'
      />
      <PageLayout>
        <ServicesHeaderContainer>
          <h1>CUSTOM WEBSITE & WEB APPLICATION DEVELOPMENT.</h1>
          <p>
            From front-end to back-end, our custom web development team makes sure
            all the project components function just as they are designed. As
            seasoned experts in content management systems, responsive design, web
            app development, and more, we`&apos;`re experienced at saying,
            “We`&apos;`ve got this.”
          </p>
          <h2>
            we offer multiple services to help you tackle anything web related!
          </h2>
          <ul>
            <li>wordpress theme development</li>
            <li>wordpress plugin development</li>
            <li>shopify theme development</li>
            <li>shopify application development</li>
            <li>headless CMS integrations</li>
          </ul>
          <ul>
            <li>custom designs</li>
            <li>custom graphics</li>
            <li>custom web application development</li>
            <li>monthly seo maintenance</li>
            <li>on page/off page seo</li>
            <li>custom ecommerce integrations</li>
          </ul>
        </ServicesHeaderContainer>
        <ServicesContainer className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-0 md:p-0'>
          {posts.map(({ slug, frontmatter }) => (
            <article
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
                    objectFit='cover'
                  />
                  <h1 className='p-4'>{frontmatter.title}</h1>
                </a>
              </Link>
            </article>
          ))}
        </ServicesContainer>
        <ContactForm />
      </PageLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('store/mdxFiles/services');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const readFile = fs.readFileSync(`store/mdxFiles/services/${fileName}`, 'utf-8');
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
