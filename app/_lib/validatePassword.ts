export function isValidPassword(password: string = "") {
  let message;
  let i = 0;
  let strengthValues: { width: string; color: string } = {
    width: "",
    color: "",
  };
  if (password.length < 12) {
    message =
      "يجب أن يكون طول النص كلمة المرور أكبر من أو يساوي 12 حروفٍ/حرفًا";
  } else if (password.length >= 12) {
    i++;
  }
  if (!/[0-9]/.test(password)) {
    message = "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل";
  } else if (/[0-9]/.test(password)) {
    i++;
  }
  if (!/[a-z]/.test(password)) {
    message = "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل";
  } else if (/[a-z]/.test(password)) {
    i++;
  }
  if (!/[A-Z]/.test(password)) {
    message = "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل";
  } else if (/[A-Z]/.test(password)) {
    i++;
  }
  if (password.length < 1) {
    message = "كلمة المرور مطلوبة";
  } else if (password.length >= 1) {
    i++;
  }
  switch (i) {
    case 0:
      strengthValues.width = "";
      break;
    case 1:
      strengthValues = {
        ...strengthValues,
        width: "before:w-[20%]",
        color: "before:bg-[#A4090f]",
      };

      break;
    case 2:
      strengthValues = {
        ...strengthValues,
        width: "before:w-[40%]",
        color: "before:bg-[#f55157]",
      };

      break;
    case 3:
      strengthValues = {
        ...strengthValues,
        width: "before:w-[60%]",
        color: "before:bg-[#ffaf44]",
      };
      break;
    case 4:
      strengthValues = {
        ...strengthValues,
        width: "before:w-[80%]",
        color: "before:bg-[#00af6c]",
      };
      break;
    case 5:
      strengthValues = {
        ...strengthValues,
        width: "before:w-[100%]",
        color: "before:bg-[#00af6c]",
      };
      break;
  }

  return message
    ? { message, strengthValues }
    : { message: null, strengthValues };
}
