export interface DataUpload {
  id: string;
  channelId?: string;
  bucketName: string;
  fileName: string;
  fileUrl: string;
  effectedFrom: string;
  status: string;
  uploadedBy: string;
  uploadedAt: string;
  salesCode: string;
  notes?:string
}