class WebsiteTagResource < JSONAPI::Resource
  attribute :occurrences
  relationship :website, to: :one
  relationship :tag, to: :one
end
