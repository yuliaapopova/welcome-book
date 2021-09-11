#!/usr/bin/env bash

set -eu

for f in /app/dump/*.json; do
    f_name=$(basename $f);
    c_name=${f_name%%.*};
    echo "import $f to collection $c_name";
    mongoimport --uri="$MONGODB_URI" --collection $c_name --file $f;
done
