export interface IApp {
  id: string;
  name: any;
  icon: string;
  abstract?: any;
  description?: any;
  developer?: any;
  languages?: string[];
  categories?: string[];
  "mime-types"?: string[];
  keywords?: string[];
  screenshots?: any[];
  links?: {};
  licenceId?: string;
  format?: number;
  isDummy?: boolean;
  releases?: [{
    applicationId: string,
    date: Date,
    files: [{
      architecture: string,
      id: string,
      releaseId: string,
      sha512checksum: string,
      size: number,
      type: number,
      url: string
    }],
    id: string
  }];
}