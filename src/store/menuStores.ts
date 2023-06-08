import { ref } from "vue";
import { defineStore } from "pinia";

interface Menu {
  name: string;
  icon?: string;
  isOpen: boolean;
}
const menuMap = new Map<string, Menu>();
export const useMenuStore = defineStore("menu", () => {
  //use menuMap as ref value to avoid reactivity issues
  const menus = ref(menuMap);
  const setMenu = (value: Menu) => menus.value.set(value.name, value);
  const setMenus = (value: Menu[]) => {
    value.forEach((menu) => {
      menus.value.set(menu.name, menu);
    });
  };
  const getMenu = (name: string) => menus.value.get(name);
  const getMenuState = (name: string) => {
    const menu = menus.value.get(name);
    return menu?.isOpen;
  };
  return {
    menus,
    setMenu,
    setMenus,
    getMenu,
    getMenuState,
  };
});
