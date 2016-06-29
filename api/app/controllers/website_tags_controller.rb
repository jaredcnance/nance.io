class WebsiteTagsController < JSONAPI::ResourceController

  before_action :authenticate

  def authenticate
    if ['POST', 'PUT', 'PATCH', 'DELETE'].include? request.method
      puts request.method
      api_key = request.headers['X-Api-Key']
      @user = User.where(api_key: api_key).first if api_key

      unless @user
        head status: :unauthorized
        return false
      end
    end

  end
end
