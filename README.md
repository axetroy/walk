## Walk the dir

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/walk.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/axetroy/walk.svg?branch=master)](https://travis-ci.org/axetroy/walk)
![License](https://img.shields.io/badge/license-Apache-green.svg)

## Usage

```bash
npm install @axetroy/walk
```

```javascript
const Walker = require('@axetroy/walk');

async function main() {
  const walker = new Walker('./');

  walker.on('file', function(filepath, stat) {
    console.log(filepath);
  });

  walker.on('directory', function(filepath, stat) {
    console.log(filepath);
  });

  walker.on('error', function(err) {
    console.error('something go wrong ' + err.toString());
  });

  await walker.walk();
}

main()
  .then(() => {
    console.log('all done');
  })
  .catch(function(err) {
    console.error(err);
  });

```

## Contributing

[Contributing Guid](https://github.com/axetroy/walk/blob/master/CONTRIBUTING.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/walk/commits?author=axetroy) [🐛](https://github.com/axetroy/walk/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faxetroy%2Fwalk.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Faxetroy%2Fwalk?ref=badge_large)
