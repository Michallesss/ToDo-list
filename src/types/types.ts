export type Category="general"|"work"|"home"|"hobby";
export interface Task {
    title: string;
    done: boolean;
    category?: Category// '?' means optional
};