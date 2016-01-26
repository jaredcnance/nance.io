class WebsiteResource < JSONAPI::Resource
  attributes :url, :title, :created_at
  relationship :website_visits, to: :many
end
