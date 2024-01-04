// 1) Фільтрація масиву
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter(condition);
}

// 2)Узагальнений стек

class Stack<T> {
    private items: T[] = [];
    private length: number = 0;

    push(item: T): T[] {
        this.items[this.length] = item;
        this.length++;
        return this.items;
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        this.length--;
        const poppedItem = this.items[this.length];
        delete this.items[this.length];

        return poppedItem;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.length - 1];
    }

    private isEmpty(): boolean {
        return this.length === 0;
    }
}

// 3) Узагальнений словник
class Dictionary<TKey extends string | number, TValue> {
    private data: Record<TKey, TValue> = {} as Record<TKey, TValue>;

    set(key: TKey, value: TValue): void {
        this.data[key] = value;
    }

    get(key: TKey): TValue | undefined {
        return this.data[key];
    }

    has(key: TKey): boolean {
        return key in this.data;
    }
}