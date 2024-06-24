import Globals from "../modules/Globals";

export default class formatParameter {
  static formatUrlParameter = (name: any) => {
    name = name
      .replace(/\n+/g, "")
      .replace(/\s+/g, "-")
      .replace(/\*+/g, "")
      .replace(/[?.:,"'’/()]/g, "")
      .toLowerCase();
    return name;
  };
}
