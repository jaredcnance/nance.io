class WebsiteResource < JSONAPI::Resource
  attributes :url, :title
  relationship :website_visits, to: :many
end
