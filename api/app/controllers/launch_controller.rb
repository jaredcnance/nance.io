class LaunchController < ApplicationController
  def index
    html = $redis.get('nance:index:default') #:current-content')
    render :text => html
  end
end
