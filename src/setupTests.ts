import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  // Assign NodeTextDecoder with the correct type to avoid type errors in test environment
  global.TextDecoder = NodeTextDecoder as typeof TextDecoder;
}
