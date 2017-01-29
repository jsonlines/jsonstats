#!/usr/bin/env node
var streamStatistics = require('stream-statistics')
var ndjson = require('ndjson')

process.stdin
  .pipe(ndjson.parse())
  .pipe(streamStatistics())
  .pipe(ndjson.serialize())
  .pipe(process.stdout)