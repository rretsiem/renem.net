#!/bin/bash

for file in *.markdown; do awk '{
  if (NR == 1) { print "---"; }
  if ($1 == "date:") {
    printf("%s %sT%s+02:00\n", $1, $2, $3);
  } else {
    print $0;
  }
}' "$file" > temp.md && mv temp.md $file ; done
