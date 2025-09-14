import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { CrudState, buildCrudActions } from "./crud";

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

interface ConsultorioActions {
  addConsultorio: (data: Omit<Consultorio, "id">) => Consultorio;
  updateConsultorio: (
    id: string,
    changes: Partial<Omit<Consultorio, "id">>
  ) => boolean;
  removeConsultorio: (id: string) => boolean;
  setConsultorios: (items: Consultorio[]) => void;
  clear: () => void;
  getById: (id: string) => Consultorio | null;
}

export interface ConsultorioStore
  extends CrudState<Consultorio>,
    ConsultorioActions {}

export const useConsultorioStore = create<ConsultorioStore>()((set, get) => {
  const setCrud = (
    fn: (
      state: CrudState<Consultorio>
    ) => CrudState<Consultorio> | Partial<CrudState<Consultorio>>
  ) =>
    set((state) => {
      const slice: CrudState<Consultorio> = { items: state.items };
      const next = fn(slice);
      const nextItems = (
        "items" in next ? next.items : slice.items
      ) as Consultorio[];
      return { ...state, items: nextItems };
    });

  const getCrud = (): CrudState<Consultorio> => ({ items: get().items });

  const { add, update, remove, setAll, clear, getById } = buildCrudActions<
    "id",
    string,
    Consultorio,
    CrudState<Consultorio>
  >(setCrud, getCrud, { idKey: "id", generateId: () => uuidv4() });

  return {
    items: [],
    addConsultorio: (data) => add(data),
    updateConsultorio: (id, changes) => update(id, changes),
    removeConsultorio: (id) => remove(id),
    setConsultorios: (items) => setAll(items),
    clear,
    getById,
  };
});

export const selectConsultorios = (s: ConsultorioStore) => s.items;
export const selectConsultorioById = (id: string) => (s: ConsultorioStore) =>
  s.items.find((it) => it.id === id);
