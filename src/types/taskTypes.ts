
export type Tasks = {
    _id: string;
    title: string;
    description: string;
    deadline: string;
    category: "personal" | "official" | "family",
    status: "complete" | "incomplete",
    isImportant: boolean;
    isDeleted: boolean;

}
export type TasksForm = {
    title: string;
    description: string;
    deadline: string;
    category: "personal" | "official" | "family",   
}