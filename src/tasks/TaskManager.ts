class TaskManager {
    private tasks: Task[] = [];

    createTask(user: User, title:string, descriptiion:string){
        if(user.role !== Role.Admin && user.role !== Role.Manager){
            throw new Error('Only Admins and Managers can create tasks.');
        }

        const newTask = new Task(this.tasks.length + 1, title, descriptiion);
        this.tasks.push(newTask);
        return newTask;
    }

    deleteTask(user: User, taskId:number){
        if(user.role !== Role.Admin){
            throw new Error("Only admins can delete tasks.");
        }
        this.tasks= this.tasks.filter(task => task.id !== taskId);
    }

    listTasks(): Task[]{
        return this.tasks;
    }
}