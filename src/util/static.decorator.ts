export function StaticInterface<T>() {
  return <U extends T>(constructor: U) => constructor;
}
