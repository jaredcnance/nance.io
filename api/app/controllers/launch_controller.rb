class LaunchController < ApplicationController
  def index
    html = $redis.get('nance:index:current-content') #:current-content')
    render :text => html
  end
end
