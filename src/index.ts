export class Test {
  private cachedValue: number | undefined = undefined;

  constructor(readonly add: number) {}
  value(): number {
    if (this.cachedValue === undefined) {
      this.cachedValue = 1;
    }
    return this.cachedValue + this.add;
  }
}
