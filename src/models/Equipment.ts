export class Equipment {
    name: string;
    type: string;
    status: string;
    field: string;
    staff: string;


    constructor(name: string, type: string, status: string, field: string, staff: string) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.field = field;
        this.staff = staff;
    }
}