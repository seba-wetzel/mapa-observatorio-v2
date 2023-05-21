import { Repository } from "src/sedes/infrastructure/FirebaseSedeRepository";

export const getAllSedes = async () => await Repository.getAll();
