class Task {
    public id: number;
    public title: string;
    public descriptiion: string;
    public assignedTo: User | null;

    constructor(id:number , title:string, description:string){
        this.id = id;
        this.title = title;
        this.descriptiion = description;
        this.assignedTo = null;
    }
    assignedToUser(user: User){
        if(user.role !== Role.User){
            throw new Error("Only new Users can be assigned to tasks.");
        }
        this.assignedTo = user;
    }
}