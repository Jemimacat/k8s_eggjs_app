# adminTask



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


## Project Directory

```
project
├── app
│   ├── controller
│   │   └── page.js
|   ├── public
│   │   ├── css
│   │   |   ├── app.css
│   │   |   ├── weui.css
│   │   |   ├── weuix.css
│   │   |   └── weuix.min
│   │   ├── js
│   │   └── lib
│   │       ├── dayjs.min.js
│   │       ├── jquery.serializejson.js
│   │       ├── lodash.min.js
│   │       └── nunjucks.min.js
|   ├── service
|   ├── view
|   |   └── partial
|   |       └── layout.njk
│   └── router.js
├── attachments
├── config
│   ├── config.default.js
|   ├── config.local.js
|   └── plugin.js
├── data
│   └──  development
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
