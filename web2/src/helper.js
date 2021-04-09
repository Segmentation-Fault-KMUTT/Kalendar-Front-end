const getMatch = (i = "", set = [{ i: "", o: "" }]) => {
  try {
    return set.find((v) => i === v.i).o;
  } catch {
    return undefined;
  }
};

export { getMatch };
