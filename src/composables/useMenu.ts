import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useMenuStore } from "src/store/menuStores";
import type { Menu } from "src/store/menuStores";

const store = useMenuStore();

export const useMenus = () => {
  const menus = storeToRefs(store);

  return { menus, setMenu: store.setMenu, getMenu: store.getMenu };
};

export const useMenu = (name: string) => {
  const { getMenuState } = store;
  const state = computed(() => getMenuState(name));
  const open = () => {
    store.setMenu({ name, isOpen: true });
  };
  const close = () => {
    store.setMenu({ name, isOpen: false });
  };

  return { open, close, state };
};

export const useMenuState = (name: string) => {
  const { getMenuState } = store;
  return computed(() => getMenuState(name));
};

export const setMenus = (menus: Menu[]) => {
  store.setMenus(menus);
};
