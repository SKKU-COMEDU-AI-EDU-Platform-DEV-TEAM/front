export const checkIsValid = (Reg: RegExp, input: string) => {
  if (Reg.test(input)) {
    return false;
  } else {
    return true;
  }
};
export const AREA_WIDTH = 900;
export const AREA_HEIGHT = 260;
export const AREA_MARGIN = {
  top: 10,
  right: 40,
  bottom: 20,
  left: 40
};
export const LEVEL = 10;
