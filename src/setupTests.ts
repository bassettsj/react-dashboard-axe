import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  // Cast to any to avoid type errors in test environment
  global.TextDecoder = NodeTextDecoder as any;
}
