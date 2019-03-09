module.exports = {
  name: 'office-dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/office-dashboard/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
