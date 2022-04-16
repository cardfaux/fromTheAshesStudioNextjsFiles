import useSWRInfinite from 'swr/infinite';
import { getBlogs, getProjects } from 'actions';

export const useGetBlogsPages = ({ filter }) => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (index === 0) {
      return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`;
    }

    if (!previousPageData.length) {
      return null;
    }

    return `/api/blogs?offset=${index * 6}&date=${filter.date.asc ? 'asc' : 'desc'}`;
  }, getBlogs);

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...result, hitEnd };
};

export const useGetProjectsPages = ({ filter }) => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (index === 0) {
      return `/api/projects?date=${filter.date.asc ? 'asc' : 'desc'}`;
    }

    if (!previousPageData.length) {
      return null;
    }

    return `/api/projects?offset=${index * 6}&date=${
      filter.date.asc ? 'asc' : 'desc'
    }`;
  }, getProjects);

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...result, hitEnd };
};
