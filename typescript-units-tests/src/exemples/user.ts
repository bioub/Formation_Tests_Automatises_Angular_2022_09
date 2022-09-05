export class User {
  constructor(public name: string) {}

  hello() {
    return `Hello my name is ${this.name}`;
  }
}