import http from "../api/http-common";
import directory from "../JSON/folders";
import { Directory, Treeview } from "../lib/types";


const getUserDirectories = async (): Promise<Directory[]> => {
  const resp = await http.get('/directories');
  return resp.data;
}


const getUserTreeview = async (): Promise<Treeview> => {
  const resp = await http.get('/directories/treeview');
  return resp.data;
}

const createUserDirectory = async ( owner_id: number, name: string): Promise<Directory> => {
  const resp = await http.post<any>('/directories', 
    {"owner_id": owner_id, "name": name}
  );
  return resp.data;
}

const getUserDirectory = async (directory_id: number): Promise<Directory> => {
    const resp = await http.get<any>(`/directory/${directory_id}`);
    return resp.data;
} 

const updateUserDirectory = async (directory_id: number): Promise<Directory> => {
    const resp = await http.put<any>(`/directories/${directory_id}`);
    return resp.data;
}

const deleteUserDirectory = async (directory_id: number): Promise<Directory> => {
    const resp = await http.delete<any>(`/directories/${directory_id}`);
    return resp.data;
}

const DirectoryService = {
    getUserTreeview,
    getUserDirectories,
    getUserDirectory,
    createUserDirectory,
    updateUserDirectory,
    deleteUserDirectory
}

export default DirectoryService;