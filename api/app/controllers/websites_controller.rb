class WebsitesController < JSONAPI::ResourceController

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

  def create
    attrs = params['data']['attributes']
    website = Website.find_or_create_by(url: attrs['url'])
    website.title = attrs['title']

    website.save!
    website.add_visit
    render json: JSONAPI::ResourceSerializer.new(WebsiteResource).serialize_to_hash(WebsiteResource.new(website, nil))
  end
end
