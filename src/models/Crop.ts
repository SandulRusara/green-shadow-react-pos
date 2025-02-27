export class CropModel {
  commonName: string;
  scientificName: string;
  category: string;
  cropImage: File | null;
  fieldId: number;

  constructor(
    commonName: string,
    scientificName: string,
    category: string,
    cropImage: File | null,
    fieldId: number
  ) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.category = category;
    this.cropImage = cropImage;
    this.fieldId = fieldId;
  }
}
