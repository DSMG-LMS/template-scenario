const arduino = require('arduino-node');

const arduLatest = arduino({path: 'bin'});

arduLatest.run(['--verify', './project.ino'], (err, out) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(out.stdout);
});
