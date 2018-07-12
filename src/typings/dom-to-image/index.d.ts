export interface domtoimage {
  toPNG(node: Element): Promise<void>;
  toJpeg(node: Element): Promise<void>;
}
