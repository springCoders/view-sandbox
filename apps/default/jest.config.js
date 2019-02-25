module.exports = {
  name: 'default',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/default/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
