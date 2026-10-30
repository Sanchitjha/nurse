const fs = require('fs');
const path = require('path');

function getWebpDimensions(buffer) {
  // VP8X chunk
  if (buffer.toString('ascii', 12, 16) === 'VP8X') {
    const width = 1 + buffer.readUIntLE(24, 3);
    const height = 1 + buffer.readUIntLE(27, 3);
    return { width, height, type: 'VP8X' };
  }
  // VP8 chunk
  if (buffer.toString('ascii', 12, 15) === 'VP8') {
    const width = buffer.readUInt16LE(26) & 0x3fff;
    const height = buffer.readUInt16LE(28) & 0x3fff;
    return { width, height, type: 'VP8' };
  }
  // VP8L (lossless)
  if (buffer.toString('ascii', 12, 16) === 'VP8L') {
    const b1 = buffer[21];
    const b2 = buffer[22];
    const b3 = buffer[23];
    const b4 = buffer[24];
    const width = 1 + (((b2 & 0x3f) << 8) | b1);
    const height = 1 + (((b4 & 0xf) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6));
    return { width, height, type: 'VP8L' };
  }
  return { unknown: true };
}

const dir = path.join(__dirname, 'trusbee_scenes');
fs.readdirSync(dir).forEach(file => {
  const buf = fs.readFileSync(path.join(dir, file));
  console.log(file, getWebpDimensions(buf), buf.length, 'bytes');
});
