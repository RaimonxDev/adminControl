export interface UserIsAuth {
    confirmed: boolean;
    blocked:   boolean;
    _id:       string;
    username:  string;
    email:     string;
    provider:  string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
    role:      Role;
    id:        string;
}

export interface Role {
    _id:         string;
    name:        string;
    description: string;
    type:        string;
    __v:         number;
    id:          string;
}
