const Walker = require('../index');

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
