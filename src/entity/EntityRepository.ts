import * as mysql from 'mysql'

class EntityRepository {
    protected connection

    constructor() {
        this.initializeConnection();
    }

    private initializeConnection() : void {
        this.connection = mysql.createConnection({
            host     : '192.168.99.100',
            user     : 'admin',
            password : 'admin',
            database : 'sales_tracking'
        });

        this.connection.connect((error) => { if(error) console.log(error) });
    }

    protected async query(statement : string, variables? : Array<any>) : Promise<any> {
        if(!variables) variables = []
        return new Promise((resolve, reject) => {
            this.connection.query(statement, variables, (error, results, fields) => {
                if(error) {
                    reject(error)
                }
                
                if(results.length > 1) {
                    resolve(results)
                } else {
                    resolve(results[0])
                }
            })
        })
    }
}

export default EntityRepository;