import { Table } from "dexie";

export class BaseRepository<T, TKey> {
    protected table: Table<T, TKey>;

    protected constructor(table: Table<T, TKey>) {
        this.table = table;
    }

    async getAll(): Promise<T[]> {
        return this.table.toArray();
    }

    async get(key: TKey): Promise<T | undefined> {
        return this.table.get(key)
    }

    async upsert(entity: T): Promise<TKey> {
        return this.table.put(entity);
    }

    async delete(key: TKey): Promise<void> {
        return this.table.delete(key);
    }
}