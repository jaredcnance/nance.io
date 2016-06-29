class WebsiteResource < JSONAPI::Resource
  attributes :url, :title, :favIconUrl, :created_at
  relationship :website_visits, to: :many
  relationship :website_tags, to: :many
  has_many :tags, :through => :website_tags
end
