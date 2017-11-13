import * as mysql from 'mysql'
import * as process from 'process'

const MYSQL_HOSTNAME = process.env.DOCKER_IP || '192.168.99.100'
const MYSQL_USERNAME = process.env.MYSQL_USER || 'admin'
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'admin'
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'serp'

class EntityRepository {
    protected connection

    constructor() {
        this.initializeConnection();
    }

    private initializeConnection() : void {
        this.connection = mysql.createConnection({
            host     : MYSQL_HOSTNAME,
            user     : MYSQL_USERNAME,
            password : MYSQL_PASSWORD,
            database : MYSQL_DATABASE
        });

        this.connection.connect((error) => { 
            if(error) {
                console.log(error)
                setTimeout(this.reconnect, 3000)
            }
        });
    }

    protected reconnect() {
        console.log("attempting to reconnect..")
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