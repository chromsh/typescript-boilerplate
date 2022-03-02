export class Hello {
  #text: string;
  constructor(t: string) {
    this.#text = t;
  }
  hello() {
    return this.#text;
  }
}
