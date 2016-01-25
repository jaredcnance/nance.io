class WebsiteResource < JSONAPI::Resource
  attributes :url
  relationship :website_visits, to: :many
end
