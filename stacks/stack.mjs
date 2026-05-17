
/**
 * A Last-In-First-Out (LIFO) stack implementation
 * 
 * Support standard stack operations such as push, pop, peek, iteration and conversion utilities
 * 
 * @template T
 */
export class Stack {

    /** @type {T[]} */
    #items;

    /**
     * Creates a new Stack instance
     * 
     * @param {T[]} [iterable=[]] Initial items to populate the stack.
     * @throws {TypeError} Throws if the provided value is not an array.
     * 
     * @example
     * const stack = new Stack([1,2,3])
     * 
     */
    constructor(iterable = []) {
        if (!Array.isArray(iterable)) {
            throw new TypeError("Stack constructor expects an array!")
        }

        this.#items = [...iterable];
    }


    /**
     * Pushes an item onto the top of the stack.
     * 
     * @param {T} item Item to push. 
     * @returns {number} The new size of the stack.
     * 
     * @example
     * stack.push(10) // 1
     */
    push(item) {
        this.#items.push(item);
        return this.size();
    }

    /**
     * Returns the number of items in the stack.
     * 
     * @returns {number} Current stack size.
     * 
     * @example
     * stack.size() // 2
     */
    size() {
        return this.#items.length;
    }

    /**
     * Removes and returns the top item from the stack.
     *
     * @returns {T | null} The removed item, or `null` if the stack is empty.
     *
     * @example
     * stack.pop(); // 3
     */
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#items.pop();
    }

    /**
     * Returns the top item without removing it.
     *
     * @returns {T | null} The top item, or `null` if the stack is empty.
     *
     * @example
     * stack.peek(); // 3
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#items.at(-1);
    }

    /**
     * Checks whether the stack is empty.
     *
     * @returns {boolean} `true` if the stack has no items, otherwise `false`.
     *
     * @example
     * stack.isEmpty(); // false
     */
    isEmpty() {
        return !this.#items.length;
    }
    /**
     * Removes all items from the stack.
     *
     * @returns {void}
     *
     * @example
     * stack.clear();
     */
    clear() {
        this.#items.length = 0;
    }

    /**
     * Returns a shallow copy of the stack as an array.
     *
     * @returns {T[]} Array representation of the stack.
     *
     * @example
     * stack.toArray(); // [1, 2, 3]
     */
    toArray() {
        return [...this.#items];
    }

    /**
     * Returns a string representation of the stack.
     *
     * @returns {string} Stringified stack.
     *
     * @example
     * stack.toString(); // "Stack(1, 2, 3)"
     */
    toString() {
        return `Stack(${this.#items.join(", ")})`;
    }

    /**
     * Makes the stack iterable from top to bottom.
     *
     * @returns {Iterator<T>}
     *
     * @example
     * for (const item of stack) {
     *   console.log(item);
     * }
     */
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
