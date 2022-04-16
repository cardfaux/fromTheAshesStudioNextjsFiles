import { FeaturedBlogSection } from './FeaturedBlogStyles';
import NewCardItem from '../NewCardItem';
import { urlFor } from 'lib/api';

import moment from 'moment';

const OurWorks = ({ featuredBlogs }) => {
  return (
    <FeaturedBlogSection className='our--works'>
      <h1>feautured blog</h1>
      <div className='works--grid'>
        {featuredBlogs.map((blog) => {
          return (
            <NewCardItem
              slug={blog.slug}
              image={blog.coverImage}
              title={blog.title}
              subTitle={blog.subtitle}
              date={blog.date}
              link={{
                href: '/blogs/[slug]',
                as: `/blogs/${blog.slug}`,
              }}
            />
          );
        })}
      </div>
    </FeaturedBlogSection>
  );
};

export default OurWorks;
