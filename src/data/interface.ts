export interface LoginType {
    Password: string;
    Email: string;
}

export interface RegisterType {
    Password: string;
    Email: string;
    DisplayName: string;
    Birthday: string;
    Role: string;
    Company: string;
    Industry: string;
    Location: string;
    DateCreated: string;
    LastLogin: string;
    Group: string;
    Authority: string;
}

export interface ImagesOverviewType {
    Title?: string;
    Description: string;
    CoverPhotoURL: string;
}