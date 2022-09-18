export class Task {
    constructor(name, done = false, category = 'general') {
        this.title = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
}
