import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'c',
  'ċ',
  'd',
  'e',
  'f',
  'g',
  '̱ġ',
  'h',
  'ħ',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  '̱y',
  'z',
  'ż',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
