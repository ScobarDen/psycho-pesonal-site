export type PathType = `/${string}`;

export type NavFieldType = {
  id: number;
  label: string;
  path: PathType;
};

export interface NavFields {
  navValue: number;
  navMenu: NavFieldType[];
  userMenu: NavFieldType[];
}
