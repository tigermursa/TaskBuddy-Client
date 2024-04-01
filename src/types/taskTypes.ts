
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

export interface FormData {
    email: string;
    password: string;
}

export interface RegistrationFormData {
    name: string;
    userImage: string;
    email: string;
    password: string;
}