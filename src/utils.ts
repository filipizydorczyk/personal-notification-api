/**
 * This functino will decode provided string
 * @param body string to decode
 * @returns `Buffer` if string is Buffer stringified by nestjs,
 * `JSON` if string is parsable JSON
 * and original value if string is neither JSON or Buffer
 */
export const decodeStringifiedBody = (body: string): unknown => {
  try {
    const jsonValue = JSON.parse(body);
    if (jsonValue.type === 'Buffer') {
      return Buffer.from(jsonValue);
    }
    return jsonValue;
  } catch (error) {
    return body;
  }
};

export type FileType = 'image/png' | 'image/gif' | 'image/jpeg';

/**
 * This is very basic implementation of checking type of file inside of Buffer
 * objet
 * @param buffer Buffer object to check
 * @returns what type of file it is. Will return `undefined` if fucntion
 * doesnt konw this type
 */
export const getBufferFileType = (buffer: Buffer): FileType | undefined => {
  const hex = buffer.toString('hex', 0, 4);
  switch (hex) {
    case '89504e47':
      return 'image/png';
    case '47494638':
      return 'image/gif';
    case 'ffd8ffe0':
    case 'ffd8ffe1':
    case 'ffd8ffe2':
      return 'image/jpeg';
    default:
      return undefined;
  }
};
