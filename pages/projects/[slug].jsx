import { useEffect, useState } from 'react';
import PageLayout from '../../components/Layouts/PageLayout';
import BlogHeader from 'components/BlogHeader';
import ProjectContent from '../../components/ProjectsPage/ProjectContent';
import { getProjectBySlug, getAllProjects, onProjectUpdate, urlFor } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { useRouter } from 'next/router';

import PreviewAlert from 'components/PreviewAlert';

const ProjectDetail = ({ project: initialProject, preview }) => {
  const router = useRouter();
  const [project, setProject] = useState(initialProject);

  useEffect(() => {
    let sub;
    if (preview) {
      sub = onProjectUpdate(project.slug).subscribe((update) => {
        setProject(update.result);
      });
    }

    return () => sub && sub.unsubscribe();
  }, []);

  // if (!router.isFallback && !blog?.slug) {
  //   return <ErrorPage statusCode="404"/>
  // }

  if (router.isFallback) {
    return <PageLayout className='blog-detail-page'>Loading...</PageLayout>;
  }

  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {preview && <PreviewAlert />}
          <BlogHeader
            title={project.projectTitle}
            subtitle={project.projectSubtitle}
            coverImage={urlFor(project.coverImage).height(600).url()}
            // author={project.author}
            date={moment(project.date).format('LL')}
          />
          <hr />
          {project.content && <ProjectContent content={project.content} />}
        </Col>
      </Row>
    </PageLayout>
  );
};

// export async function getStaticProps({ params }) {
//   const project = await getProjectBySlug(params.slug);
//   return {
//     props: { project },
//     revalidate: 1,
//   };
// }

export async function getStaticProps({ params, preview = false, previewData }) {
  const project = await getProjectBySlug(params.slug, preview);
  return {
    props: { project, preview },
    revalidate: 1,
  };
}

// export async function getStaticPaths() {
//   const projects = await getAllProjects();
//   return {
//     paths: projects?.map((project) => {
//       return { params: { slug: project.slug } };
//     }),
//     fallback: false,
//   };
// }

// TODO: Introduce fallback
export async function getStaticPaths() {
  const projects = await getAllProjects();
  const paths = projects?.map((p) => ({ params: { slug: p.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export default ProjectDetail;
