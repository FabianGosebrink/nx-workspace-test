module.exports = {
  name: 'app-d',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-d',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
