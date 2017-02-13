#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)

# Import the SSH deployment key
- openssl aes-256-cbc -K $encrypted_60611619f174_key -iv $encrypted_60611619f174_iv -in deploytsw-key.enc -out deploytsw-key -d
rm deploy-key.enc # Don't need it anymore
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa
