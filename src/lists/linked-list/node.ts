export class Node<T> {
  constructor(
    private readonly value: T,
    private readonly prev?: Node<T>,
    private readonly next?: Node<T>
  ) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  public toString(): string {
    return `${this.prev && `${this.prev} <- `} ${this.value || ''} ${
      this.next && ` -> ${this.next}`
    }`;
  }
}
