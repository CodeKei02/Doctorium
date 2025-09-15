import { create } from "zustand";

export interface CrudState<T> {
  items: T[];
}

export interface CrudActions<T, Id extends string | number, K extends keyof T> {
  add: (data: Omit<T, K>) => T;
  update: (id: Id, changes: Partial<Omit<T, K>>) => boolean;
  remove: (id: Id) => boolean;
  setAll: (items: T[]) => void;
  clear: () => void;
  getById: (id: Id) => T | null;
}
export interface CrudStore<T, Id extends string | number, K extends keyof T>
  extends CrudState<T>,
    CrudActions<T, Id, K> {}

export interface CreateCrudStoreOptions<
  T,
  Id extends string | number,
  K extends keyof T
> {
  idKey: K;
  generateId: () => Id;
  initialItems?: T[];
}

export function buildCrudActions<
  K extends string | number | symbol,
  Id extends string | number,
  T extends Record<K, Id>,
  S extends CrudState<T>
>(
  set: (fn: (state: S) => S | Partial<S>) => void,
  get: () => S,
  options: { idKey: K; generateId: () => Id }
): CrudActions<T, Id, K> {
  const { idKey, generateId } = options;

  return {
    add: (data) => {
      const withId = Object.assign(
        { [idKey]: generateId() } as Record<K, Id>,
        data
      ) as T;
      set(
        (state) => ({ ...(state as S), items: [...state.items, withId] } as S)
      );
      return withId;
    },
    update: (id, changes) => {
      let updated = false;
      set((state) => {
        const nextItems = state.items.map((it) => {
          if (it[idKey] !== id) return it;
          updated = true;
          return { ...it, ...changes } as T;
        });
        return { ...(state as S), items: nextItems } as S;
      });
      return updated;
    },
    remove: (id) => {
      let existed = false;
      set((state) => {
        const before = state.items.length;
        const nextItems = state.items.filter((it) => it[idKey] !== id);
        existed = nextItems.length !== before;
        return { ...(state as S), items: nextItems } as S;
      });
      return existed;
    },
    setAll: (items) => set((state) => ({ ...(state as S), items } as S)),
    clear: () => set((state) => ({ ...(state as S), items: [] } as S)),
    getById: (id) => get().items.find((it) => it[idKey] === id) ?? null,
  };
}

export function createCrudStore<
  K extends string | number | symbol,
  Id extends string | number,
  T extends Record<K, Id>
>(options: CreateCrudStoreOptions<T, Id, K>) {
  const { idKey, generateId, initialItems = [] } = options;

  return create<CrudStore<T, Id, K>>((set, get) => ({
    items: initialItems,
    ...buildCrudActions<K, Id, T, CrudState<T>>(set, () => get(), {
      idKey,
      generateId,
    }),
  }));
}

export function makeCrudSelectors<
  K extends string | number | symbol,
  Id extends string | number,
  T extends Record<K, Id>
>(idKey: K) {
  return {
    selectAll: (s: CrudState<T>) => s.items,
    selectById: (id: Id) => (s: CrudState<T>) =>
      s.items.find((it) => it[idKey] === id),
  } as const;
}
