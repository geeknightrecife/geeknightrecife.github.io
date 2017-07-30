#!/bin/bash

# source /opt/local/gnocci/script/build-support.sh 

# move this to Travis envs
# sed\ -i\ \"s/twitterConsumerKey:\ \\\"\\\"/twitterConsumerKey:\ \\\"\$TWITTER_CONSUMER_KEY\\\"/g\"\ _config.yml
# sed\ -i\ \"s/twitterConsumerSecret:\ \ \\\"\\\"/twitterConsumerSecret:\ \ \\\"\$TWITTER_CONSUMER_SECRET\\\"/g\"\ _config.yml
# sed\ -i\ \"s/facebookAppId:\ \\\"\\\"/facebookAppId:\ \\\"\$FACEBOOK_APP_ID\\\"/g\"\ _config.yml
# sed\ -i\ \"s/facebookAppSecret:\ \\\"\\\"/facebookAppSecret:\ \\\"\$FACEBOOK_APP_SECRET\\\"/g\"\ _config.yml

rm .nojekyll

export TZ="America/Recife"

cd automation/minifying
./minify_js.sh
cd -

JEKYLL_ENV=production bundle exec jekyll build

rm .nojekyll
