export class Task {
    title: string;
    done?: boolean;
    category?: string;
    private createdAt?: Date;

    constructor(name: string, done: boolean=false, category: string='general') {
        this.title=name;
        this.done=done;
        this.category=category;
        this.createdAt=new Date();
    }
}