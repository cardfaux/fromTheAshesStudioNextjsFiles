import { useState } from 'react';
import useSWR from 'swr';
import { Row, Col, Button } from 'react-bootstrap';
import PageLayout from '../../components/Layouts/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import ProjectsCardItem from '../../components/ProjectsPage/ProjectsCardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu, { FilteringProjectsMenu } from 'components/FilteringMenu';

import { useGetProjectsPages } from 'actions/pagination';
import { getPaginatedProjects } from 'lib/api';
import moment from 'moment';

export const ProjectList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((project) =>
      filter.view.list ? (
        <Col key={`${project.slug}-list`} md='9'>
          <CardListItem
            title={project.projectTitle}
            subtitle={project.projectSubtitle}
            date={moment(project.date).format('LL')}
            image={project.coverImage}
            link={{
              href: '/projects/[slug]',
              as: `/projects/${project.slug}`,
            }}
          />
        </Col>
      ) : (
        <Col key={project.slug} lg='4' md='6'>
          <ProjectsCardItem
            projectTitle={project.projectTitle}
            projectSubtitle={project.projectSubtitle}
            date={moment(project.date).format('LL')}
            image={project.coverImage}
            link={{
              href: '/projects/[slug]',
              as: `/projects/${project.slug}`,
            }}
          />
        </Col>
      )
    )
  );
};

export default function Projects({ projects }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetProjectsPages({ filter });

  return (
    <PageLayout>
      {/* {preview && <PreviewAlert />}
      <AuthorIntro /> */}
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      />
      <hr />
      <Row className='mb-5'>
        <ProjectList data={data || [projects]} filter={filter} />
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
    </PageLayout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const projects = await getPaginatedProjects({ offset: 0, date: 'desc' });
  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
}
