class WebsiteResource < JSONAPI::Resource
  attributes :url
  relationship :posts, to: :many
end
