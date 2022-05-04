import fs from 'fs';
import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { NextSeo } from 'next-seo';

import PageLayout from '../../components/Layouts/PageLayout';

import { ServicesSlugContainer } from 'styles/components/ServicesSlug';

import SyntaxHighlighter from 'react-syntax-highlighter';

import Button from '../../components/Button';
import Nav from '../../components/Nav';

const components = { Nav, Button, SyntaxHighlighter };

export default function PostPage({ frontmatter, content, mdxSource }) {
  return (
    <>
      <NextSeo title={frontmatter.metaTitle} description={frontmatter.metaDesc} />
      <PageLayout>
        <ServicesSlugContainer className='prose mx-auto'>
          <h1>{frontmatter.title}</h1>
          {/* <div dangerouslySetInnerHTML={{ __html: md().render(content) }} /> */}
          <MDXRemote {...mdxSource} components={components} />
        </ServicesSlugContainer>
      </PageLayout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('store/mdxFiles/services');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`store/mdxFiles/services/${slug}.mdx`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);

  const mdxSource = await serialize(content);
  return {
    props: {
      frontmatter,
      content,
      mdxSource,
    },
  };
}
