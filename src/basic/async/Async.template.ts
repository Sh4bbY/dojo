import {StaticInterface} from '../../util/static.decorator';
import {AsyncInterface} from './Async.interface';


@StaticInterface<AsyncInterface>()
export class Async {
  public static delayExecution(fn: () => void, ms: number) {
    throw new Error('Not yet implemented');
  }

  public static repeatExecution(fn: () => void, ms: number, times: number) {
    throw new Error('Not yet implemented');
  }
}
