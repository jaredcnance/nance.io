class WebsitesController < JSONAPI::ResourceController
  def create
    attrs = params["data"]["attributes"]
    website = Website.find_or_create_by(url: attrs['url'])
    website.title = attrs['title']
    website.save!
    website.add_visit()
    render json: JSONAPI::ResourceSerializer.new(WebsiteResource).serialize_to_hash(WebsiteResource.new(website, nil))
  end
end
