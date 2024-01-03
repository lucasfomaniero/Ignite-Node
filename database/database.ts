import fs from 'node:fs/promises';
const databasePath = new URL('../db.json', import.meta.url )

export default class Database {
    private database: any = {};
    
    constructor() {
     fs.readFile(databasePath,'utf8')
        .then(data => {
            this.database = JSON.parse(data)
        })
        .catch(() => {
            this.persist()
        })
    }

    private persist() {
        fs.writeFile(databasePath, JSON.stringify(this.database))
    }

    select(table: string): any {
        const data = this.database[table] ?? [];
        return data;
    }

    insert(table: string, data: any) {
        if (Array.isArray(this.database[table])) {
            this.database[table].push(data)
        } else {
            this.database[table] = [data]
        }
        this.persist()
    }
}