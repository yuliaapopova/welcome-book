#!/usr/bin/env bash

set -eu

"${mongo[@]}" -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase "$rootAuthDatabase" "$MONGO_INITDB_DATABASE" <<-EOJS
    db.createUser({
        user: $(_js_escape "$MONGO_INITDB_USERNAME"),
        pwd: $(_js_escape "$MONGO_INITDB_PASSWORD"),
        roles: [{ role:'dbOwner', db: $(_js_escape "$MONGO_INITDB_DATABASE") }]
    });
EOJS
