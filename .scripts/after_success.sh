#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    # Initialize a new git repo in .site, and push it.
    # mkdir .site
    # cd .site
    # git init
    #
    git remote add deploy "deploytsw@teamsuccesswin.com:/var/www/tsw"
    git config user.name "Travis CI"
    git config user.email "mike@mikedettmer.com"
    
    git add .
    git commit -m "Deploy"
    git push --force deploy master
else
    echo "Not deploying, since this branch isn't master."
fi
