import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

import PageLayout from '../../components/Layouts/PageLayout';

export default function PostPage({ frontmatter, content }) {
  return (
    <PageLayout>
      <div className='prose mx-auto'>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('store/mdFiles/services');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`store/mdFiles/services/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
