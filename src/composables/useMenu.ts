import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useMenuStore } from "src/store/menuStores";

const store = useMenuStore();

export const useMenu = () => {
  const menus = storeToRefs(store);

  return { menus, setMenu: store.setMenu, getMenu: store.getMenu };
};

export const useMenuState = (name: string) => {
  const { getMenuState } = store;
  return computed(() => getMenuState(name));
};
