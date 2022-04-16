import PageLayout from '../../components/Layouts/PageLayout';
import BlogHeader from 'components/BlogHeader';
import ProjectContent from '../../components/ProjectsPage/ProjectContent';
import { getProjectBySlug, getAllProjects } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import { urlFor } from 'lib/api';
import moment from 'moment';

const ProjectDetail = ({ project }) => {
  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={project.projectTitle}
            subtitle={project.projectSubtitle}
            coverImage={urlFor(project.coverImage).height(600).url()}
            // author={project.author}
            date={moment(project.date).format('LL')}
          />
          <hr />
          <ProjectContent content={project.content} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug);
  return {
    props: { project },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const projects = await getAllProjects();
  return {
    paths: projects?.map((project) => {
      return { params: { slug: project.slug } };
    }),
    fallback: false,
  };
}

export default ProjectDetail;
