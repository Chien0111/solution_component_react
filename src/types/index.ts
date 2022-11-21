export type Notify = {
  type: "success" | "error" | "warning" | "info";
  message: string;
  autoClose?: boolean;
};
