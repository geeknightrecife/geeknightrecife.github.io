#!/bin/bash

source /opt/local/gnocci/script/build-support.sh

eval_knieval rbenv\ update\ \>\ /dev/null
eval_knieval rbenv\ download\ 2.2.0\ \&\&\ rbenv\ use\ 2.2.0\ \&\&\ rbenv\ rehash
eval_knieval export\ TZ\=America/Recife
eval_knieval sed\ -i\ \"s/twitterConsumerKey:\ \\\"\\\"/twitterConsumerKey:\ \\\"\$TWITTER_CONSUMER_KEY\\\"/g\"\ _config.yml
eval_knieval sed\ -i\ \"s/twitterConsumerSecret:\ \ \\\"\\\"/twitterConsumerSecret:\ \ \\\"\$TWITTER_CONSUMER_SECRET\\\"/g\"\ _config.yml
eval_knieval sed\ -i\ \"s/facebookAppId:\ \\\"\\\"/facebookAppId:\ \\\"\$FACEBOOK_APP_ID\\\"/g\"\ _config.yml
eval_knieval sed\ -i\ \"s/facebookAppSecret:\ \\\"\\\"/facebookAppSecret:\ \\\"\$FACEBOOK_APP_SECRET\\\"/g\"\ _config.yml
eval_knieval cd\ automation/minifying
eval_knieval ./minify_js.sh
eval_knieval cd\ ../..
eval_knieval JEKYLL_ENV\=production\ bundle\ exec\ jekyll\ build
