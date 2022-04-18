import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import PageLayout from 'components/Layouts/PageLayout';

import { getFeaturedProjects, getFeaturedBlogs } from 'lib/api';

import AboveFold from 'components/Homepage/AboveFold/AboveFold';
import WhatWeDo from 'components/Homepage/WhatWeDo/WhatWeDo';
import OurWorks from 'components/Homepage/OurWorks/OurWorks';
// import TestimonialsSection from 'components/Homepage/Testimonials/Testimonials';
import FeaturedBlogSection from 'components/Homepage/FeaturedBlog/FeaturedBlog';
import ContactForm from '../components/Homepage/ContactForm/ContactForm';

const DynamicTestimonialsWithNoSSR = dynamic(
  () => import('../components/Homepage/Testimonials/Testimonials'),
  {
    ssr: false,
  }
);

export default function Home({ projects, featuredBlogs }) {
  return (
    <>
      <NextSeo
        title='From the ashes web design agency'
        description='Making web design for your business.'
      />
      <PageLayout>
        <AboveFold />
        <WhatWeDo />
        <OurWorks projects={projects} />
        {/* <TestimonialsSection /> */}
        <DynamicTestimonialsWithNoSSR />
        <FeaturedBlogSection featuredBlogs={featuredBlogs} />
        <ContactForm />
      </PageLayout>
    </>
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
