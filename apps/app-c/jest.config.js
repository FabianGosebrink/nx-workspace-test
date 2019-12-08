module.exports = {
  name: 'app-c',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-c',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
