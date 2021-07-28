import { getRepository } from "typeorm";
import { Project } from "../models/Project.Model";


export async function getProjects(){
  return await getRepository(Project).find();
}

export async function getProjectById(id: string){
  return await getRepository(Project).findOne({id});
}

export async function createProject(project: Project){
  return await getRepository(Project).create(project);
}

export async function saveProject(project: Project){
  return await getRepository(Project).save(project);
}

export async function updateProject(project: Project, updatedProject: Project){
  return await getRepository(Project).merge(project, updatedProject);
}

export async function deleteProjectById(id: string){
  return await getRepository(Project).delete({id});
}