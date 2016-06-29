# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)
run Rails.application
use Rack::Static, :urls => ['/blog'], :index => 'index.html'
use Rack::Cors do
  # allow do
  #   origins 'localhost:3000', '127.0.0.1:3000',
  #           /^http:\/\/192\.168\.0\.\d{1,3}(:\d+)?$/
  #           # regular expressions can be used here
  # end

  allow do
    origins '*'
    resource '/public/*', :headers => :any, :methods => [:get, :post, :put, :delete, :options]
  end
end
