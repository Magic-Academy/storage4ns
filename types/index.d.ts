
declare class Storage {

  /**
   * Create storage instance.
   * @param namespace Storage namespace
   */
  constructor(namespace: string)


  /**
   * When passed a key name, will return that key's value.
   * @param {String} key  A DOMString containing the name of the key you want to retrieve the value of.
   * @param {Any} defaultValue When the value is null, defaultValue is returned.
   * @returns {Any} A DOMString containing the value of the key. If the key does not exist, null is returned.
   */
  get(keyName: string, defaultValue: unknown): unknown


  /**
   * When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.
   * @param {String} keyName A DOMString containing the name of the key you want to create/update.
   * @param {Any} keyValue A DOMString containing the value you want to give the key you are creating/updating.
   */
  put(keyName: string, keyValue: unknown): void

  /**
   * When passed a number n, this method will return the name of the nth key in the storage.
   * @param {Number} index An integer representing the number of the key you want to get the name of. This is a zero-based index.
   * @returns {Any} A DOMString containing the name of the key. If the index does not exist, null is returned.
   */
  key(index: number): void
  
  /**
   * The length method of the Storage interface returns the number of data items stored in a given Storage object.
   * @returns {Number} The number of items stored in the Storage object.
   */
  length(): number

  /**
   * When passed a key name, will remove that key from the storage.
   * @param {String} keyName A DOMString containing the name of the key you want to remove.
   */
  remove(keyName: string): void

  /**
   * When invoked, will empty all keys out of the storage.
   */
  clear(): void
}

export default Storage;