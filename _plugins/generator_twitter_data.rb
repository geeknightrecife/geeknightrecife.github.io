require 'twitter'
require 'yaml'

module Jekyll

  class TwitterDataGenerator < Generator
    safe true

    def generate(site)

      if ENV['JEKYLL_ENV'] != 'production' ||
        site.config['twitterConsumerKey'].empty? ||
        site.config['twitterConsumerKey'].nil? ||
        site.config['twitterConsumerSecret'].empty? ||
        site.config['twitterConsumerSecret'].nil?
        return
      end

      update_tweets(site)
    end

    def update_tweets(site)

      client = Twitter::REST::Client.new do |config|
        config.consumer_key        = site.config['twitterConsumerKey']
        config.consumer_secret     = site.config['twitterConsumerSecret']
      end

      saved_tweets = read_tweets_yml
      client.search("##{site.config['twitterHashTag']}", result_type: "recent", count: 15).take(15).collect do |tweet|
        puts tweet
        formatted_tweet = {"id" => tweet.id, "username" => tweet.user.screen_name, "tweet" => tweet.text, "date" => tweet.created_at}
        saved_tweets.push(formatted_tweet) unless saved_tweets.include?(formatted_tweet)
      end

      remove_invalid_tweets(saved_tweets, client)
      saved_tweets = remove_old_tweets(saved_tweets)

      File.open('_data/tweets.yml','w') do |f|
         f.write saved_tweets.to_yaml
      end

    end

    def read_tweets_yml
      return config = YAML.load_file('_data/tweets.yml')
    end

    def remove_old_tweets(saved_tweets)
        return saved_tweets.sort_by { |t| t['date'] }.reverse!
                           .first(10)
    end

    def remove_invalid_tweets(saved_tweets, client)
      saved_tweets.delete_if do |tweet|
        begin
          client.status(tweet['id'])
          false
        rescue
          true
        end
      end
    end

  end

end
