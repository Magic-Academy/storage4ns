class NStorage {
  constructor(namespace) {
    this.namespace = namespace;
  }

  put(keyName, keyValue) {
    localStorage.setItem(
      `${this.namespace}-${keyName}`,
      JSON.stringify({
        type: typeof keyValue,
        data: keyValue
      })
    );
  }

  get(keyName, defaultValue = null) {
    const rawData = localStorage.getItem(`${this.namespace}-${keyName}`);
    if (rawData === null) {
      return defaultValue;
    } else {
      const parsed = JSON.parse(rawData);
      return parsed.data;
    }
  }

  remove(keyName) {
    localStorage.removeItem(`${this.namespace}-${keyName}`);
  }

  key(index) {
    return localStorage.key(index);
  }

  clear() {
    localStorage.clear();
  }

  length() {
    localStorage.clear();
  }
}

export default NStorage;
