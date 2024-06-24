import axios from "axios";

export default class upload {
  static uploadfile(event: any, type: string, email: any): string {
    var file = event.files[0];
    const date = new Date();
    const months = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    var formatDate =
      date.getDate() +
      "_" +
      months[date.getMonth()] +
      "_" +
      date.getFullYear() +
      "_" +
      date.getHours() +
      "_" +
      date.getMinutes() +
      "_" +
      date.getSeconds();

    var blob = file.slice(0, file.size);
    var SetFileName = new File(
      [blob],
      email.value + "_" + formatDate + "_" + type + "_" + file.name
    );
    var ReturnFileName =
      email.value + "_" + formatDate + "_" + type + "_" + file.name;

    const data = new FormData();
    data.append("file", SetFileName);
    data.append("upload_preset", "zuewljth");
    data.append("folder", "AimStartup");

    if (type == "InvestorRegister") {
      const elm: Element | null = document.querySelector("#field[100]");
      if (elm) {
        (elm as any).value = ReturnFileName;
      }
    }

    axios
      .post("https://api.cloudinary.com/v1_1/dbjzrbtu2/image/upload/", data)
      .then((response) => {
        return ReturnFileName;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      })
      .then(function () {
        // always executed
      });

    return ReturnFileName;
  }
}
