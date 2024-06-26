
export type Tasks = {
    email: string;
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


export interface TaskDataProps {
    data: Tasks[];
    isLoading: boolean;
    isError: boolean;
}


export interface AddModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}


export interface UpdateModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    selectedTask: Tasks | null;
}


export interface UserData {
    email: string;
    isDeleted: boolean;
    name: string;
    password: string;
    userImage: string;
}