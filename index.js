const fs = require('fs-extra');
const path = require('path');
const { EventEmitter } = require('events');

class Walker extends EventEmitter {
  constructor(dir) {
    super();
    this.dir = dir;
  }
  walk() {
    return new Promise((resolve, reject) => {
      this.__walk(this.dir)
        .then(() => {
          this.emit('done');
          resolve();
        })
        .catch(() => {
          this.emit('done');
          resolve();
        });
    });
  }
  __walk(dir) {
    return fs
      .readdir(dir)
      .then(files => {
        const promiseList = [];
        while (files.length) {
          const filename = files.shift();
          const filepath = path.join(dir, filename);
          const p = fs.stat(filepath).then(stat => {
            if (stat.isDirectory()) {
              this.emit('directory', filepath, stat);
              return this.__walk(filepath);
            } else {
              this.emit('file', filepath, stat);
            }
          });
          promiseList.push(p);
        }
        return Promise.all(promiseList);
      })
      .catch(err => {
        this.emit('error', err);
      });
  }
}

module.exports = Walker;
module.exports.default = Walker;
