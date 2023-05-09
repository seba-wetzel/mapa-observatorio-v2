import type { Sede } from "./Sede";

export interface SedeRepository {
  getAll?(): Promise<Sede[]>;
  get?(id?: string): Promise<Sede>;
  add?(sede?: Sede): Promise<void>;
  update?(sede?: Sede): Promise<void>;
  delete?(id?: string): Promise<void>;
}
