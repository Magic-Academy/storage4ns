/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-25 22:57:24
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-25 23:26:32
 * @FilePath: \storage4ns\src\index.js
 */
class NStorage {
    /**
     * @name: 初始化
     */
    constructor(namespace) {
        this.namespace = namespace;
    }

    /**
     * @name: 设置数据
     * @param {string} keyName
     * @param {any} keyValue
     */
    put(keyName, keyValue) {
        localStorage.setItem(
            `${this.namespace}-${keyName}`,
            JSON.stringify({
                type: typeof keyValue,
                data: keyValue
            })
        );
    }

    /**
     * @name: 获取指定的key
     * @param {string} keyName
     * @returns {any}
     */
    get(keyName, defaultValue = null) {
        const rawData = localStorage.getItem(`${this.namespace}-${keyName}`);
        if (rawData === null) {
            return defaultValue;
        } else {
            const parsed = JSON.parse(rawData);
            return parsed.data;
        }
    }

    /**
     * @name: 获取命名空间
     */
    getNamespace() {
        return this.namespace;
    }

    /**
     * @name: 获取所有的数据
     */
    getAll() {
        const allKeys = Object.keys(localStorage);
        const filteredKeys = allKeys.filter(key => key.startsWith(this.namespace));
        const parsedData = filteredKeys.map(key => {
            const rawData = localStorage.getItem(key);
            const parsed = JSON.parse(rawData);
            return {
                key: key.split('-')[1],
                type: parsed.type,
                data: parsed.data
            };
        });
        return parsedData;
    }

    /**
     * @name: 获取存储的个数
     */
    size() {
        return this.getAll().length;
    }

    /**
     * @name: 获取所有的key
     */
    keys() {
        return this.getAll().map(item => item.key);
    }

    /**
     * @name: 移除指定的key
     * @param {string} keyName
     */
    remove(keyName) {
        localStorage.removeItem(`${this.namespace}-${keyName}`);
    }

    /**
     * @name: 移除所有
     */
    clear() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = this.key(i);
            if (key.startsWith(this.namespace)) {
                localStorage.removeItem(key);
            }
        }
    }

    key(index) {
        return localStorage.key(index);
    }

    /**
     * @name: 判断是否存在
     * @param {string} keyName
     */
    has(keyName) {
        return localStorage.getItem(`${this.namespace}-${keyName}`) !== null;
    }

    /**
     * @name: 获取数量
     */
    length() {
        let length = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const key = this.key(i);
            if (key.startsWith(this.namespace)) {
                length++;
            }
        }
        return length;
    }

}

export default NStorage;