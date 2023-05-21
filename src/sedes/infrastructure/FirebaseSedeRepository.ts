import type { Sede } from "../domain/Sede";
import type { SedeRepository } from "../domain/SedeRepository";
import FireBase from "src/Firebase/firebase";

export class FirebaseSedeRepository implements SedeRepository {
  private db;
  private sedesRef;

  constructor() {
    this.db = FireBase.db;
    this.sedesRef = FireBase.collection(this.db, "lugares");
  }

  async getAll(): Promise<Sede[]> {
    let sedes: Sede[] = [];
    return new Promise((resolve) => {
      FireBase.onSnapshot(this.sedesRef, (querySnapshot) => {
        sedes = querySnapshot.docs.map((doc) => doc.data())[0]
          .array_lugares as Sede[];
        resolve(sedes);
      });
    });

    // await FireBase.onSnapshot(this.sedesRef, (querySnapshot) => {
    //   sedes = querySnapshot.docs.map((doc) => doc.data())[0]
    //     .array_lugares as Sede[];
    //   //   console.log(sedes);
    // });
    // return finder;
  }

  // async get(id: string): Promise<Sede> {
  //     const doc = await this.sedes.doc(id).get();
  //     return doc.data() as Sede;
  // }

  // async add(sede: Sede): Promise<void> {
  //     const doc = this.sedes.doc();
  //     const id = doc.id;
  //     sede.id = id;
  //     await doc.set(sede);
  // }

  // async update(sede: Sede): Promise<void> {
  //     const doc = this.sedes.doc(sede.id);
  //     await doc.update(sede);
  // }

  // async delete(id: string): Promise<void> {
  //     const doc = this.sedes.doc(id);
  //     await doc.delete();
  // }
}

export const Repository = new FirebaseSedeRepository();
