export interface NavbarConfigInterface {
    name: string;
    url?: string;
    dropDownMenu?: {
        id: string;
        name: string;
        url: string;
    }[];
    icon?: string;
    action?: Function;
}
