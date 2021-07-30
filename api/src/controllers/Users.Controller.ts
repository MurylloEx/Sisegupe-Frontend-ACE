import { Router, Request, Response } from "express";
import { badRequest, notFound, ok } from "../services/Response.Service";
import { getUserById } from "../services/User.Service";
import { saveUser, updateUser } from "../services/User.Service";
import { createUser, deleteUserById } from "../services/User.Service";

const router = Router();

router.get('/:userId', async (req: Request, res: Response) => {
  try{
    return res.json(ok(await getUserById(req.params.userId)));
  } catch(e){
    return res.status(404).json(notFound());
  }
});

router.post('/', async (req: Request, res: Response) => {
  try{
    const newUser = await createUser(req.body);
    return res.json(ok(await saveUser(newUser)));
  } catch(e){
    return res.status(400).json(badRequest(e));
  }
});

router.put('/:userId', async (req: Request, res: Response) => {
  try{
    const user = await getUserById(req.params.userId);
    if (!!user){
      const newUser = await updateUser(user, req.body);
      return res.json(ok(await saveUser(newUser)));
    } else {
      return res.status(404).json(notFound());
    }
  } catch(e){
    return res.status(400).json(badRequest(e));
  }
});

router.delete('/:userId', async (req: Request, res: Response) => {
  try{
    return res.json(ok(await deleteUserById(req.params.userId)));
  } catch(e){
    return res.status(404).json(notFound());
  }
});

export default router;
