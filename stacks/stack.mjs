export class Stack {
    #items;
    constructor(iterable = []) {
        if (!Array.isArray(iterable)) {
            throw new TypeError("Stack constructor expects an array!")
        }

        this.#items = [...iterable];
    }

    push(item) {
        this.#items.push(item);
        return this.size();
    }

    size() {
        return this.#items.length;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#items.at(-1);
    }

    isEmpty() {
        return !this.#items.length;
    }

    clear() {
        this.#items.length = 0;
    }

    toArray() {
        return [...this.#items];
    }

    toString() {
        return `Stack(${this.#items.join(", ")})`;
    }

    [Symbol.iterator]() {
        let index = this.#items.length - 1;
        const items = this.#items;

        return {
            next() {

                if (index >= 0) {

                    return {
                        value: items[index--],
                        done: false
                    }
                }

                return {
                    done: true
                }
            }
        };
    }
}
