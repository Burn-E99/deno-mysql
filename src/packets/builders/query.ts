import { replaceParams } from "../../../deps.ts";
import { BufferWriter, encode } from "../../buffer.ts";

/** @ignore */
export function buildQuery(sql: string, params: any[] = []): Uint8Array {
  const queryStr = replaceParams(sql, params);
  console.log(queryStr)
  const data = encode(queryStr);
  const writer = new BufferWriter(new Uint8Array(data.length + 1));
  writer.write(0x03);
  writer.writeBuffer(data);
  return writer.buffer;
}
