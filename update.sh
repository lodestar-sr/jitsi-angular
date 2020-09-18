git pull

#!/usr/bin/env bash
rm -rf dist/*
yarn
ng build -c deploy

mkdir -p /var/www/html/jitsi-angular
rsync -a --delete dist/ /var/www/html/jitsi-angular

set +e

service nginx status
    if [ $? -eq 0 ]; then
        set -e
        service nginx reload
    fi
