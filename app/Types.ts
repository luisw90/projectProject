export type User = {
  email: string;
  username: string;
  userid: string;
};

export type Project = {
  name: string;
  users: string[];
  projectid: string;
};

export type WidgetType = {
  date: any;
  projectid: string[];
  widgetid: string;
};