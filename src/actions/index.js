export const INCREASE= "INCREASE";
export const DECREASE = "DECREASE";
export const DIFF = "DIFF";

export function increase(){
    return {
      type: INCREASE
    };
}

export function decrease(){
    return {
      type: DECREASE
    };
}

export function setDiff(diff) {
    return {
      type: DIFF,
      diff
    };
}