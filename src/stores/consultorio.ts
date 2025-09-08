import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface Consultorio {
  id: string;
  name: string;
  address: string;
  country: string;
  city: string;
  street: string;
  indication: string;
  country_code: string;
  phone: string;
  duration: string | number;
}

export interface ConsultorioId extends String {}

interface ConsultorioState {
  items: Consultorio[];
}

interface ConsultorioActions {
  addConsultorio: (data: Omit<Consultorio, "id">) => Consultorio;
  updateConsultorio: (
    id: ConsultorioId,
    changes: Partial<Omit<Consultorio, "id">>
  ) => boolean;
  removeConsultorio: (id: ConsultorioId) => boolean;
  setConsultorios: (items: Consultorio[]) => void;
  clear: () => void;
  getById: (id: ConsultorioId) => Consultorio | null;
}

export interface ConsultorioStore
  extends ConsultorioState,
    ConsultorioActions {}

export const useConsultorioStore = create<ConsultorioStore>()((set, get) => ({
  items: [],

  addConsultorio: (data) => {
    const newItem: Consultorio = { id: uuidv4(), ...data };
    set((state) => ({ items: [...state.items, newItem] }));
    return newItem;
  },

  updateConsultorio: (id, changes) => {
    let updated = false;
    set((state) => {
      const next = state.items.map((it) => {
        if (it.id !== id) return it;
        updated = true;
        return { ...it, ...changes };
      });
      return { items: next };
    });
    return updated;
  },

  removeConsultorio: (id) => {
    let existed = false;
    set((state) => {
      const before = state.items.length;
      const next = state.items.filter((it) => it.id !== id);
      existed = next.length !== before;
      return { items: next };
    });
    return existed;
  },

  setConsultorios: (items) => set({ items }),
  clear: () => set({ items: [] }),

  getById: (id) => get().items.find((it) => it.id === id || null) || null,
}));

export const selectConsultorios = (s: ConsultorioStore) => s.items;
export const selectConsultorioById =
  (id: ConsultorioId) => (s: ConsultorioStore) =>
    s.items.find((it) => it.id === id);
