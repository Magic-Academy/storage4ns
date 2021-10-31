# storage4ns.js

Graceful storage solution with namespace.

[![GitHub stars](https://img.shields.io/github/stars/tuanzisama/storage4ns)](https://github.com/tuanzisama/storage4ns/stargazers)
[![GitHub license](https://img.shields.io/github/license/tuanzisama/storage4ns)](https://github.com/tuanzisama/storage4ns/blob/master/LICENSE)
[![Rate on Openbase](https://badges.openbase.io/js/rating/storage4ns.svg)](https://openbase.io/js/storage4ns?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[![NPM](https://nodei.co/npm/storage4ns.png)](https://nodei.co/npm/storage4ns/)

[简体中文 文档](./README.ZH_CN.MD)

### Installation

``` 
npm install storage4ns --save
```

or

``` 
yarn add storage4ns
```

### DEMO

``` 
import NStorage from "storage4ns";

const nstorage = new NStorage("sys-admin");

// Put storage item
nstorage.put("access-token", "token-secret");

// Get storage item
let userName = nstorage.get("user-name");
console.log(userName);

// Remove storage item
nstorage.remove("user-name");

// Clears storage
nstorage.clear();

```
