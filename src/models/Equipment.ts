import { EquipType } from "./enums/EquipType";
import { Status } from "./enums/StatusType";

export class EquipmentModel {
  equipName: string;
  equipType: EquipType;
  status: Status;
  staffMember: string;
  fieldName: string;

  constructor(
    equipName: string,
    equipType: EquipType,
    status: Status,
    staffMember: string,
    fieldName: string
  ) {
    this.equipName = equipName;
    this.equipType = equipType;
    this.status = status;
    this.staffMember = staffMember;
    this.fieldName = fieldName;
  }
}
