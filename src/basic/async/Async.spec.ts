import * as path from 'path';
import {sleep} from '../../util/sleep';
import {Async} from './Async.solution';
import fn = jest.fn;

describe('Async', () => {

  describe('delayExecution', () => {
    it('should call a function after a specified amount of time', async () => {
      const callback = fn();
      Async.delayExecution(() => 'test', 10, callback);
      await sleep(5);
      expect(callback).not.toHaveBeenCalled();
      await sleep(10);
      expect(callback).toHaveBeenCalledWith('test');

      const callback2 = fn();
      Async.delayExecution(() => 12345, 10, callback2);
      await sleep(5);
      expect(callback2).not.toHaveBeenCalled();
      await sleep(10);
      expect(callback2).toHaveBeenCalledWith(12345);
    });
  });

  describe('repeatExecution', () => {
    it('should repeat a function call n times within an specified interval duration', async () => {
      const callback = fn();
      const ms = 10;
      const handle = Async.repeatExecution(callback, ms);

      await sleep(ms / 2);
      expect(callback).not.toHaveBeenCalled();

      for (let i = 1; i < 5; i++) {
        await sleep(ms);
        expect(callback).toHaveBeenCalledTimes(i);
      }

      clearInterval(handle);
    });
  });

  describe('repeatExecutionNTimes', () => {
    it('should repeat a function call n times in a interval duration N times', async () => {
      const callback = fn();
      const ms = 10;
      const times = 5;

      Async.repeatExecutionNTimes(callback, ms, times);
      await sleep(ms / 2);
      expect(callback).not.toHaveBeenCalled();

      for (let i = 1; i < 10; i++) {
        await sleep(ms);
        expect(callback).toHaveBeenCalledTimes(i < times ? i : times);
      }
    });
  });

  describe('enterCallbackHell', () => {
    it('should call [asyncFn] 4 times and call [callback] with the sum of all 4 return values', async () => {
      const callback = fn();
      let index = 0;
      const asyncFn = (callback) => {
        const values = [1, 2, 3, 4];
        setTimeout(() => callback(values[index++]), 1);
      };

      Async.enterCallbackHell(asyncFn, callback);
      expect(callback).not.toHaveBeenCalled();
      await sleep(10);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(10);
    });
  });

  describe('workWithPromises', () => {
    it('should call [asyncFn] 4 times and call [callback] with the sum of all 4 return values', async () => {
      let index = 0;
      const asyncFn = () => new Promise<number>((resolve) => {
        const values = [1, 2, 3, 4];
        setTimeout(() => resolve(values[index++]), 1);
      });

      const result = await Async.workWithPromises(asyncFn);
      expect(result).toBe(10);
    });
  });

  describe('workWithAsyncAwait', () => {
    it('should call [asyncFn] 4 times and call [callback] with the sum of all 4 return values', async () => {
      let index = 0;
      const asyncFn = () => new Promise<number>((resolve) => {
        const values = [1, 2, 3, 4];
        setTimeout(() => resolve(values[index++]), 1);
      });

      const result = await Async.workWithAsyncAwait(asyncFn);
      expect(result).toBe(10);
    });
  });

  xdescribe('workWithPromiseAll', () => {
    it('should call [asyncFn] 4 times and call [callback] with the sum of all 4 return values', async () => {
      let index = 0;
      const asyncFn = () => new Promise<number>((resolve, _reject) => {
        const values = [1, 2, 3, 4];
        setTimeout(() => resolve(values[index++]), 1);
      });

      const result = await Async.workWithPromiseAll(asyncFn);
      expect(result).toBe(10);
    });
  });

  xdescribe('requestApi', () => {
    it('should request a endpoint and give back result as Json', async () => {
      const result = await Async.requestApi('https://jsonplaceholder.typicode.com/posts/42');
      expect(result).toHaveProperty('userId', 5);
      expect(result).toHaveProperty('id', 42);
      expect(result).toHaveProperty('title', 'commodi ullam sint et excepturi error explicabo praesentium voluptas');
    });
  });


  xdescribe('promisedFileRead', () => {
    it('should read a file async and return the content of the file in a Promise', async () => {
      const filePath = path.join(process.cwd(), 'package.json');
      const content = await Async.promisedFileRead(filePath);
      const json = JSON.parse(content);
      expect(json).toHaveProperty('name', 'dojo');
    });

    it('should reject the promise when there was an error', async () => {
      const filePath = path.join(process.cwd(), 'package123.json');
      try {
        await Async.promisedFileRead(filePath);
        throw new Error('Promise should be rejected!');
      } catch (err) {
        expect(err).toEqual('File could not be read');
      }
    });
  });

});

