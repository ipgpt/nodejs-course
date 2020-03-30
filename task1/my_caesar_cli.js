const caesarCifer = require('./caesarCifer');
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

if (!(argv.i || argv.input)) {
  throw Error;
}

if (!(argv.o || argv.output)) {
  throw Error;
}

if (!((argv.a || argv.action) && (argv.s || argv.shift))) {
  throw Error;
}

fs.readFile(argv.o || argv.output, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  fs.readFile(argv.i || argv.input, 'utf8', (_err, _data) => {
    if (_err) {
      console.log(_err);
    }
    const transformedData = caesarCifer(
      _data.toString(),
      argv.s || argv.shift,
      argv.a || argv.action
    );
    const content = `${data}\n${transformedData}`;
    fs.writeFile(argv.o || argv.output, content, __err => {
      if (__err) {
        console.log(__err);
      }
    });
  });
});
