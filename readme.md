# jsonstats

install with `npm i jsonstats -g`

pipe [ndjson](https://npmjs.org/ndjson) numbers into `jsonstats` and you'll get summary statistics on `stdout` when the stream is done

## example

```
~/src/js/jsonstats 🐈  cat test.json | jsonfilter num | jsonstats 
{"max":4,"min":1,"n":4,"_geometric_mean":24,"_reciprocal_sum":2.083333333333333,"mean":2.5,"ss":5,"sum":10,"_seen_this":1,"_mode":1,"_mode_valid":true,"variance":1.25,"standard_deviation":1.118033988749895,"geometric_mean":2.2133638394006434,"harmonic_mean":1.9200000000000004,"mode":1,"_max_seen":1,"_last":4}
```