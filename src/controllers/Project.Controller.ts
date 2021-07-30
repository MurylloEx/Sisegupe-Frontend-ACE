import { Router, Request, Response } from "express";
import { badRequest, notFound, ok } from "../services/Response.Service";
import { createProject, deleteProjectById } from "../services/Project.Service";
import { getProjectById, getProjects } from "../services/Project.Service";
import { saveProject, updateProject } from "../services/Project.Service";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
  try{
    return res.json(ok(await getProjects()));
  } catch(e){
    return res.status(400).json(badRequest(e));
  }
});

router.get('/:projectId', async (req: Request, res: Response) => {
  try{
    return res.json(ok(await getProjectById(req.params.projectId)));
  } catch(e){
    return res.status(404).json(notFound());
  }
});

router.post('/', async (req: Request, res: Response) => {
  try{
    const newProject = await createProject(req.body);
    return res.json(ok(await saveProject(newProject)));
  } catch(e){
    return res.status(400).json(badRequest(e));
  }
});

router.put('/:projectId', async (req: Request, res: Response) => {
  try{
    const project = await getProjectById(req.params.projectId);
    if (!!project){
      const newProject = await updateProject(project, req.body);
      return res.json(ok(await saveProject(newProject)));
    } else {
      return res.status(404).json(notFound());
    }
  } catch(e){
    return res.status(400).json(badRequest(e));
  }
});

router.delete('/:projectId', async (req: Request, res: Response) => {
  try{
    return res.json(ok(await deleteProjectById(req.params.projectId)));
  } catch(e){
    return res.status(404).json(notFound());
  }
});

export default router;
