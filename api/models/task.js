class Task {
    constructor(name,status) {
        this.task_id=0;
        this.task_name=name;
        this.task_status=status;
    }

    getAddTaskSQL() {
        let sql = `INSERT INTO tasks(name, status,\ 
                                     created_at, updated_at) \
                   VALUES('${this.task_name}','${this.task_status}',\ 
                          NOW(), NOW())`;
        return sql;           
    }

    static getTaskByIdSQL(task_id) {
        let sql = `SELECT * FROM tasks WHERE id = ${task_id}`;
        return sql;           
    }

    static deleteTaskByIdSQL(task_id) {
        let sql = `DELETE FROM tasks WHERE id= ${task_id}`;
        return sql;           
    }

    static getAllTaskSQL() {
        let sql = `SELECT * FROM tasks`;
        return sql;           
    }    
}

module.exports = Task;
