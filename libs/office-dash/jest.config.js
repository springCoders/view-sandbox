module.exports = {
  name: 'office-dash',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/office-dash',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
