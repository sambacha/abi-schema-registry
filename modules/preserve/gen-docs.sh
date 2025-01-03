#!/bin/bash

DIST_HTML=./dist/docs
DIST_JSON=./dist/api.json

BIBLIO=./docs/biblio.json
TSCONFIG=./docs/tsconfig.json
OPTIONS=./docs/typedoc.json
PRESERVE=../preserve/lib/index.ts
PRESERVE_FS=../preserve-fs/lib/index.ts
PRESERVE_TO_IPFS=../preserve-to-ipfs/lib/index.ts
PRESERVE_TO_FILECOIN=../preserve-to-filecoin/lib/index.ts
README=./docs/README.md
MEDIA=./docs/media

rm -rf $DIST_HTML $DIST_JSON

npx typedoc \
    --options $OPTIONS \
    --tsconfig $TSCONFIG \
    --out $DIST_HTML \
    --readme $README \
    --media $MEDIA \
    --json $DIST_JSON \
    --plugin typedoc-plugin-external-module-name \
  $PRESERVE $PRESERVE_FS $PRESERVE_TO_IPFS $PRESERVE_TO_FILECOIN # entrypoints to display
