class UserManager<T extends User> {
    private users: T[] =[];

    addUser(user: T){
        this.users.push(user);
    }

    getUser(id:number) : T | undefined {
        return this.users.find((user) => user.id === id);
    }

    listUser(): T[]{
        return this.users;
    }
}