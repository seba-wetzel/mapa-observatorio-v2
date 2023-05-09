import { onMounted, ref } from "vue";
import { Sede } from "src/sedes/domain/Sede";
import { FirebaseSedeRepository } from "src/sedes/infrastructure/FirebaseSedeRepository";

export function useSedes() {
  const sedes = ref([] as Sede[]);
  onMounted(async () => {
    const Repository = new FirebaseSedeRepository();
    sedes.value = await Repository.getAll();
  });
  return sedes;
}
