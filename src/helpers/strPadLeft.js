export default function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}
