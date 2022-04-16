import PageLayout from 'components/Layouts/PageLayout';

import { getFeaturedProjects, getFeaturedBlogs } from 'lib/api';

import AboveFold from 'components/Homepage/AboveFold/AboveFold';
import WhatWeDo from 'components/Homepage/WhatWeDo/WhatWeDo';
import OurWorks from 'components/Homepage/OurWorks/OurWorks';
import TestimonialsSection from 'components/Homepage/Testimonials/Testimonials';
import FeaturedBlogSection from 'components/Homepage/FeaturedBlog/FeaturedBlog';
import ContactForm from '../components/Homepage/ContactForm/ContactForm';

export default function Home({ projects, featuredBlogs }) {
  return (
    <PageLayout>
      <AboveFold />
      <WhatWeDo />
      <OurWorks projects={projects} />
      <TestimonialsSection />
      <FeaturedBlogSection featuredBlogs={featuredBlogs} />
      <ContactForm />
    </PageLayout>
  );
}

// this function is ran during the build (build time)
// Provides props to your page
// It will create a static page
export async function getStaticProps() {
  const projects = await getFeaturedProjects();
  const featuredBlogs = await getFeaturedBlogs();
  return {
    props: {
      projects,
      featuredBlogs,
    },
    revalidate: 1,
  };
}
