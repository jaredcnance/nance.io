class LaunchController < ApplicationController
  def index
    html = $redis.get('nance:index:current') #:current-content')
    render :text => html
  end
end
