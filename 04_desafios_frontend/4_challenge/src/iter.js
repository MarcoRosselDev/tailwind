Object.entries(iterable).forEach((arr) => {
  /* console.log(arr[0], arr[1], "debugin");
  console.log(typeof arr[0], typeof arr[1]); */

  //console.log(arr[0], arr[1], "lskjdf");
  if (typeof arr[1] == "string" && arr[1].length >= 1) {
    setErrors((prev) => {
      return {
        ...prev,
        [arr[0]]: false,
      };
    });
  } else if (typeof arr[1] == "boolean" && arr[1] == true) {
    setErrors((prev) => {
      return {
        ...prev,
        [arr[0]]: false,
      };
    });
  } else {
    setErrors((prev) => {
      return {
        ...prev,
        [arr[0]]: true,
      };
    });
  }

  /* if (arr[1] == null || arr[1] == "" || arr[1] == false) {
    setErrors((prev) => {
      return {
        ...prev,
        [arr[0]]: true,
      };
    });
  } else {
    setErrors((prev) => {
      return {
        ...prev,
        [arr[0]]: false,
      };
    });
  } */
});
