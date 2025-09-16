import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { CrudState, buildCrudActions } from "./crud";

export interface Cita {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  start: string;
  end: string;
  patient: string;
  notes?: string;
}

interface CalendarActions {
  addCita: (data: Omit<Cita, "id">) => Cita;
  updateCita: (id: string, changes: Partial<Omit<Cita, "id">>) => boolean;
  removeCita: (id: string) => boolean;
  setCitas: (items: Cita[]) => void;
  clear: () => void;
  getById: (id: string) => Cita | null;
}

export interface CalendarStore extends CrudState<Cita>, CalendarActions {}

export const useCalendarStore = create<CalendarStore>()((set, get) => {
  const setCrud = (
    fn: (state: CrudState<Cita>) => CrudState<Cita> | Partial<CrudState<Cita>>
  ) =>
    set((state) => {
      const slice: CrudState<Cita> = { items: state.items };
      const next = fn(slice);
      const nextItems = ("items" in next ? next.items : slice.items) as Cita[];
      return { ...state, items: nextItems };
    });

  const getCrud = (): CrudState<Cita> => ({ items: get().items });

  const { add, update, remove, setAll, clear, getById } = buildCrudActions<
    "id",
    string,
    Cita,
    CrudState<Cita>
  >(setCrud, getCrud, { idKey: "id", generateId: () => uuidv4() });

  return {
    items: [],
    addCita: (data) => add(data),
    updateCita: (id, changes) => update(id, changes),
    removeCita: (id) => remove(id),
    setCitas: (items) => setAll(items),
    clear,
    getById,
  };
});

export const selectCitas = (s: CalendarStore) => s.items;
export const selectCitaById = (id: string) => (s: CalendarStore) =>
  s.items.find((it) => it.id === id);
