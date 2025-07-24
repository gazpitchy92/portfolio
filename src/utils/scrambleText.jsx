const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz| '

export default function scrambleText(target, frame) {
  return target
    .split('')
    .map((char, i) =>
      i > frame ? characters[Math.floor(Math.random() * characters.length)] : char
    )
    .join('')
}