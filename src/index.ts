import { unknownError } from './unknown-error';
import { UnpackResolved, UnpackRejected } from './unpack';

declare const __brand: unique symbol;

/**
 * Represents the completion of an asynchronous operation
 */
export interface _Promise<T, E> {
    // Brand is needed for _Promise not extending Promise
    [__brand]: any;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then(onfulfilled?: undefined | null, onrejected?: undefined | null): _Promise<T, E>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R>(
        onfulfilled: (value: T) => R,
        onrejected?: undefined | null
    ): _Promise<UnpackResolved<R>, E | UnpackRejected<R> | unknownError>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R>(
        onfulfilled: undefined | null,
        onrejected: (reason: E) => R 
    ): _Promise<T | UnpackResolved<R>, UnpackRejected<R> | unknownError>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R1, R2>(
        onfulfilled: (value: T) => R1,
        onrejected: (reason: E) => R2
    ): _Promise<UnpackResolved<R1> | UnpackResolved<R2>, UnpackRejected<R1> | UnpackRejected<R2> | unknownError>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch(
        onrejected?: undefined | null
    ): _Promise<T, E>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of the callback.
     */
    catch<R>(
        onrejected: (reason: E) => R
    ): _Promise<T | UnpackResolved<R>, UnpackRejected<R> | unknownError>;

    // TODO
    // /**
    //  * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
    //  * resolved value cannot be modified from the callback.
    //  * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
    //  * @returns A Promise for the completion of the callback.
    //  */
    // finally(onfinally?: (() => void) | undefined | null): Promise<T>
}

export interface _PromiseConstructor {
    /**
     * A reference to the prototype.
     */
    readonly prototype: Promise<any>;

    /**
     * Creates a new _Promise.
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     */
    new (executor: () => void): _Promise<unknown, never>;
    new <T, E = never>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: E) => void) => void): _Promise<T, E | unknownError>;
    
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>,
            UnpackResolved<T7>,
            UnpackResolved<T8>,
            UnpackResolved<T9>,
            UnpackResolved<T10>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6> |
        UnpackRejected<T7> |
        UnpackRejected<T8> |
        UnpackRejected<T9> |
        UnpackRejected<T10>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>,
            UnpackResolved<T7>,
            UnpackResolved<T8>,
            UnpackResolved<T9>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6> |
        UnpackRejected<T7> |
        UnpackRejected<T8> |
        UnpackRejected<T9>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8>(values: readonly [T1, T2, T3, T4, T5, T6, T7, T8]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>,
            UnpackResolved<T7>,
            UnpackResolved<T8>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6> |
        UnpackRejected<T7> |
        UnpackRejected<T8>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7>(values: readonly [T1, T2, T3, T4, T5, T6, T7]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>,
            UnpackResolved<T7>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6> |
        UnpackRejected<T7>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6>(values: readonly [T1, T2, T3, T4, T5, T6]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5>(values: readonly [T1, T2, T3, T4, T5]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4>(values: readonly [T1, T2, T3, T4]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3>(values: readonly [T1, T2, T3]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2>(values: readonly [T1, T2]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T>(values: [T]): _Promise<[
            UnpackResolved<T>
        ],
        UnpackRejected<T>
    >;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all(values: []): _Promise<[], never>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T>(values: readonly T[]): _Promise<UnpackResolved<T>[], UnpackRejected<T>>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An iterable of Promises.
     * @returns A new Promise.
     */
    all<T>(values: Iterable<T>): _Promise<UnpackResolved<T>[], UnpackRejected<T>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T>(values: readonly T[]): _Promise<UnpackResolved<T>, UnpackRejected<T>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An iterable of Promises.
     * @returns A new Promise.
     */
    race<T>(values: Iterable<T>): _Promise<UnpackResolved<T>, UnpackRejected<T>>;

    // TODO
    // /**
    //  * Creates a Promise that is resolved with an array of results when all
    //  * of the provided Promises resolve or reject.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // allSettled<T extends readonly unknown[] | readonly [unknown]>(values: T):
    //     Promise<{ -readonly [P in keyof T]: PromiseSettledResult<T[P] extends PromiseLike<infer U> ? U : T[P]> }>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all
    //  * of the provided Promises resolve or reject.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // allSettled<T>(values: Iterable<T>): Promise<PromiseSettledResult<T extends PromiseLike<infer U> ? U : T>[]>;

    // TODO
    // /**
    //  * The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.
    //  * @param values An array or iterable of Promises.
    //  * @returns A new Promise.
    //  */
    // any<T>(values: (T | PromiseLike<T>)[] | Iterable<T | PromiseLike<T>>): Promise<T>

    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    reject<T = never>(reason: T): _Promise<never, T>;
    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    reject(): _Promise<never, undefined>;

    /**
     * Creates a new resolved promise for the provided value.
     * @param value A promise.
     * @returns A promise whose internal state matches the provided promise.
     */
    resolve<P>(value: P): _Promise<
        UnpackResolved<P>,
        UnpackRejected<P>
    >;

    /**
     * Creates a new resolved promise .
     * @returns A resolved promise.
     */
    resolve(): _Promise<void, never>;
}

export const _Promise: _PromiseConstructor = Promise as any;
