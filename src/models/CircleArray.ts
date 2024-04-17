export class CircleArray<T> {
  private innerArray: T[] = [];

  public constructor(private size: number, paddingValue?: T) {
    if (typeof paddingValue !== "undefined") {
      this.innerArray = new Array(size).fill(paddingValue);
    }
  }

  public add(value: T): void {
    this.innerArray.push(value);
    if (this.innerArray.length > this.size) {
      this.innerArray.shift();
    }
  }

  public clear(): void {
    this.innerArray = [];
  }

  public get state(): T[] {
    return this.innerArray;
  }
}