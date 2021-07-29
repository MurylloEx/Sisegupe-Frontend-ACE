import { join } from "path";
import { Router, Request, Response } from "express";
import { badRequest, notFound, ok } from "../services/Response.Service";
import { deleteDocumentById, getDocumentById, saveDocument, updateDocument } from "../services/Document.Service";
import { Document } from "../models/Document.Model";

const router = Router();

router.get('/:fileGuid', async (req: Request, res: Response) => {
  try{
    let document = await getDocumentById(req.params.fileGuid);
    if (!!document){
      return res.sendFile(join(__dirname, 'docs/', <string>document.id), (err) => {
        return res.status(404).json(notFound());
      });
    } else {
      return res.status(404).json(notFound());
    }
  }catch(e){
    return res.status(400).json(badRequest(e));
  }
});

router.post('/:fileGuid', async (req: Request, res: Response) => {
  try{
    let document: Document = <Document>await getDocumentById(req.params.fileGuid);
    if (!document || document.isUsing){
      return res.status(404).json(notFound());
    }
    if (!req.files || Object.keys(req.files).length === 0){
      return res.status(400).json(badRequest());
    }
    let file: any = req.files.upload;
    file.mv(join(__dirname, '../../docs/', <string>document.id), async (err: any) => {
      if (err)
        return res.status(400).json(badRequest());
      let newDocument = await updateDocument(document, Document.create({ isUsing: true }));
      await saveDocument(newDocument);
      return res.json(ok(document));
    });
  }catch(e){
    return res.status(400).json(badRequest(e));
  }
});

router.delete('/:fileGuid', async (req: Request, res: Response) => {
  try{
    let document = await getDocumentById(req.params.fileGuid);
    if (!!document){
      return res.json(ok(await deleteDocumentById(<string>document.id)));
    }
    return res.status(404).json(notFound());
  }catch(e){
    return res.status(400).json(badRequest(e));
  }
});

export default router;
