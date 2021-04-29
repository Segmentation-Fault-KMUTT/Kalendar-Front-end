import { useState } from "react";

type strictValueType = string | number | boolean;

const createKeyValue = (keys: string[]) => {
  let obj: Record<string, strictValueType> = {};
  keys.forEach((key) => {
    obj[key] = "";
  });
  return obj;
};

const useKeyValue = (initKeys: string[]) => {
  const [value, setValue] = useState(createKeyValue(initKeys));
  //console.log(value);

  const updateValue = (key: string, newValue: strictValueType) => {
    if (value[key] !== undefined) {
      //console.log(newValue);
      const _tmp = { ...value };
      _tmp[key] = newValue;
      setValue(_tmp);
    } else {
      throw new Error(`Key ${key} did not exist on initialized object.`);
    }
  };

  const getValue = (key: string) => {
    //  console.log(value[key]);
    if (value[key] !== undefined) {
      return value[key];
    } else {
      throw new Error(`Key ${key} did not exist on initialized object.`);
    }
  };

  return { updateValue, value, getValue };
};

export { useKeyValue };
