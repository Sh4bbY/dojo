import {StaticInterface} from '../../util/static.decorator';
import {AsyncInterface} from './Async.interface';


@StaticInterface<AsyncInterface>()
export class Async {
  /**
   * calls function [fn] after a specified amount of [ms] milliseconds and passes the result of [fn] to [callback]
   */
  public static delayExecution(fn: () => any, ms: number, callback: (result: any) => void) {
    throw new Error('Not yet implemented');
  }

  /**
   * should call a given function [fn] repetitively.
   * [ms] is the duration between each repeated function call.
   * the function should also return the interval-handle to clear the interval.
   */
  public static repeatExecution(fn: () => void, ms: number): NodeJS.Timeout {
    throw new Error('Not yet implemented');
  }

  /**
   * should call a given function [fn] repetitively for [times] times.
   * [ms] is the duration between each repeated function call.
   */
  public static repeatExecutionNTimes(fn: () => void, ms: number, times: number) {
    throw new Error('Not yet implemented');
  }


  /**
   * should call [asyncFn] 4 times and then call the callback [done] with the sum of all 4 results as parameter.
   * [asyncFn] expects a callback to be passed as parameter, which is called with the result once it is available.
   */
  public static enterCallbackHell(asyncFn: (callback: (value: number) => void) => void, done: (result: number) => void) {
    throw new Error('Not yet implemented');
  }

  /**
   * should return a Promise that calls [asyncFn] 4 times and resolves the sum of all 4 results(return values) of [asyncFn]
   * This can be done sequentially or in parallel.
   */
  public static workWithPromises(asyncFn: () => Promise<number>): Promise<number> {
    throw new Error('Not yet implemented');
  }

  /**
   * should return a Promise that calls [asyncFn] 4 times and resolves the sum of all 4 results(return values) of [asyncFn]
   * Make use of async / await syntax
   */
  public static async workWithAsyncAwait(asyncFn: () => Promise<number>): Promise<number> {
    throw new Error('Not yet implemented');
  }

  /**
   * should return a Promise that calls [asyncFn] 4 times and resolves the sum of all 4 results(return values) of [asyncFn]
   * Make use of the Promise.all() function
   */
  public static async workWithPromiseAll(asyncFn: () => Promise<number>): Promise<number> {
    throw new Error('Not yet implemented');
  }

  /**
   * should request a given url with method GET and return a Promise that resolves the response body for the requested url.
   * to perform the request, you can use axios as http client.
   */
  public static async requestApi(url: string): Promise<any> {
    throw new Error('Not yet implemented');
  }

  /**
   * should read a filePath with the asynchronous `fs.readFile` method.
   * the file should be read as text-file (utf8).
   * the response of the Function should be a Promise:
   * - which resolves the files content, if everything works out,
   * - and rejects the promise with message "File could not be read" in case there was an error.
   */
  public static async promisedFileRead(filePath: string): Promise<any> {
    throw new Error('Not yet implemented');
  }
}
