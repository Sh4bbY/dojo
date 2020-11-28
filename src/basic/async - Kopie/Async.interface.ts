export interface AsyncInterface {
  delayExecution(fn: () => any, ms: number, callback: (result: any) => void): void;

  repeatExecution(fn: () => void, ms: number): void

  repeatExecutionNTimes(fn: () => void, ms: number, times: number): void

  enterCallbackHell(asyncFn: (callback: (value: number) => void) => void, done: (result: number) => void);

  workWithPromises(asyncFn: () => Promise<number>): Promise<number>;

  workWithAsyncAwait(asyncFn: () => Promise<number>): Promise<number>;

  workWithPromiseAll(asyncFn: () => Promise<number>): Promise<number>;

  requestApi(method: string, url: string): Promise<any>;
}
