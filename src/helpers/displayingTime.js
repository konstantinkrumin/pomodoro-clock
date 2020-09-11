import str_pad_left from "./strPadLeft";

export default function displayingTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;

  return str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
}
