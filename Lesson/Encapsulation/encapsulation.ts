export default class EncapsulationExample {
  private secretValue: string;
  private secretMethod(): void {
    console.log("This is a private method!");
  }

  public value: string;
  public setValue(newValue: string): void {
    this.value = newValue;
  }
  public getValue(): string {
    return this.value;
  }
}

let obj = new EncapsulationExample();
obj.setValue("Hello World!");
console.log(obj.getValue());
// Output: "Hello World!"

// obj.secretMethod();
