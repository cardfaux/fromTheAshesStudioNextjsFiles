import { useState } from 'react';

import { Row, Button, Col } from 'react-bootstrap';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';

import { useGetBlogsPages } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';

// import CardItem from 'components/CardItem';
import NewCardItem from '../../components/Homepage/NewCardItem';
// import CardItemBlank from 'components/CardItemBlank';
import CardListItem from 'components/CardListItem';
// import CardListItemBlank from 'components/CardListItemBlank';
import moment from 'moment';

import { BlogsPageContainer } from 'styles/components/blogs/BlogsPage';

moment.suppressDeprecationWarnings = true;

export const BlogList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((blog) =>
      filter.view.list ? (
        <Col key={`${blog.slug}-list`} md='9'>
          <CardListItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format('LL')}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      ) : (
        <Col key={blog.slug} lg='4' md='6'>
          {/* <CardItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format('LL')}
            image={blog.coverImage}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          /> */}
          <NewCardItem
            author={blog.author}
            title={blog.title}
            subTitle={blog.subtitle}
            date={moment(blog.date).format('LL')}
            image={blog.coverImage}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      )
    )
  );
};

export default function Home({ blogs, preview }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });

  return (
    <BlogsPageContainer>
      {preview && <PreviewAlert />}
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      />
      <hr />
      <Row className='mb-5'>
        <BlogList data={data || [blogs]} filter={filter} />
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          size='lg'
          variant='outline-secondary'
        >
          {/* {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'} */}
          Load More
        </Button>
      </div>
    </BlogsPageContainer>
  );
}

export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
      preview,
    },
    revalidate: 1,
  };
}
