export default class JsLoader {
  static loadFile(url: string, callBack?: () => any) {
    const script = document.createElement("script");
    script.src = url;
    script.async = false;
    document.body.appendChild(script);
    if (callBack && typeof callBack !== "undefined") {
      callBack();
    }
  }

  static loadCSS(url: string, callBack?: () => any) {
    const script = document.createElement("link");
    script.href = url;
    script.rel = "stylesheet";
    document.body.appendChild(script);
    if (callBack && typeof callBack !== "undefined") {
      callBack();
    }
  }
}
