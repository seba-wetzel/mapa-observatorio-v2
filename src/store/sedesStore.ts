import { defineStore } from "pinia";
import { Sede } from "src/sedes/domain/Sede";
import { getAllSedes } from "src/sedes/application/getAllSedes";

export const useSedesStore = defineStore("sedes", {
  state: () => ({
    sedes: [] as Sede[],
    filter: [] as Sede[],
  }),
  getters: {
    getSedes(): Sede[] {
      return this.sedes;
    },
    // searchSedeByName(name: string): Sede | undefined {
    //   return state.sedes.find((sede) => sede.nombre.includes(name));
    // },
    // searchSedeByName(name:string): Sede[] | null {
    //   console.log("searchSedeByName", name);
    //   return this.sedes.find((sede) => sede.nombre.includes(name));
    // },
  },
  actions: {
    setSedes(sedes: Sede[]) {
      this.sedes = sedes;
    },
    async setAllSedes() {
      this.sedes = await getAllSedes();
    },
    searchSedeByName(name: string) {
      const needle = name.toLowerCase();
      if (needle === "") {
        this.filter = this.sedes;
      }
      this.filter = this.sedes.filter(({ nombre }) =>
        nombre.toLowerCase().includes(needle)
      );
    },
  },
});

// ejemplo de store con pinia y composition api (posible reemplazo de la clase de arriba)
// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const name = ref('Eduardo')
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//       count.value++
//     }

//     return { count, name, doubleCount, increment }
//   })
