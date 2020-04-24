import { useState, useEffect, useRef } from "react";

export const useUpdateDeepItem = initialItem => {
  const [item, setIem] = useState(initialItem);

  const onUpdateField = e => {
    let { name, value } = e.target;
    value = value === "true" || value === "false" ? JSON.parse(value) : value;

    setIem(prevItem => ({ ...prevItem, [name]: value }));
  };

  const onUpdateItem = item => {
    setIem({ ...item });
  };

  return [item, onUpdateField, onUpdateItem];
};

export const useToggle = (initOn = false, values = [false, true]) => {
  if (initOn !== values[0] && initOn !== values[1]) {
    throw new Error(
      "the inital value must be include in array of second args!"
    );
  }

  if (values.length > 2) {
    throw new Error("the array args must contain only two choice!");
  }
  // toggleForm()  => e = null, value = null
  // toggleform(e) => e , value = null
  // toggleForm(null,value) => e = null , value
  const [on, setOn] = useState(initOn);
  return [
    () => {
      setOn(() => (on === values[0] ? values[1] : values[0]));
    },
    on,
    setOn
  ];
};

export const useKeyboardEvent = (key, elemRef, callback) => {
  //const [elemRef, setElemRef] = useState(elem);
  const setElemRef = UpdatedElem => {
    elemRef = { ...UpdatedElem };
  };

  useEffect(() => {
    const handler = e => {
      if (e.keyCode === key && callback) {
        callback();
      }
    };

    if (elemRef.current !== null) {
      elemRef.current.addEventListener("keydown", handler, false);
      return () => {
        elemRef.current.removeEventListener("keydown", handler, false);
      };
    }
  }, [elemRef, key, callback]);
  return setElemRef;
};
