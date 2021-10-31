# storage4ns.js

优雅的、含命名空间的 LocalStorage 解决方案.

[![GitHub stars](https://img.shields.io/github/stars/tuanzisama/storage4ns)](https://github.com/tuanzisama/storage4ns/stargazers)
[![GitHub license](https://img.shields.io/github/license/tuanzisama/storage4ns)](https://github.com/tuanzisama/storage4ns/blob/master/LICENSE)
[![Rate on Openbase](https://badges.openbase.io/js/rating/storage4ns.svg)](https://openbase.io/js/storage4ns?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[![NPM](https://nodei.co/npm/storage4ns.png)](https://nodei.co/npm/storage4ns/)

[English Doc](./README.MD)

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

// 存
nstorage.put("access-token", "token-secret");

// 取
let userName = nstorage.get("user-name");
console.log(userName);

// 删
nstorage.remove("user-name");

// 清
nstorage.clear();

```
