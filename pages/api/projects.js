import { getAllProjects, getPaginatedProjects } from 'lib/api';

// export default async function getProjects(req, res) {
//   const data = await getAllProjects();
//   res.status(200).json(data);
// }

export default async function getProjects(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const date = req.query.date || 'desc';
  const data = await getPaginatedProjects({ offset, date });
  res.status(200).json(data);
}
