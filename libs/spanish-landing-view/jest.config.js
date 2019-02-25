module.exports = {
  name: 'spanish-landing-view',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/spanish-landing-view',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
