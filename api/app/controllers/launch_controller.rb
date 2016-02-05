class LaunchController < ApplicationController
  def index
    html = $redis.get('nance:index:default') #:current-content')
    puts "rendering"
    puts html
    render :text => html
  end
end
