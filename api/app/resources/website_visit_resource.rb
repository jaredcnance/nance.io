class WebsiteVisitResource < JSONAPI::Resource
  attributes :created_at, :updated_at
  relationship :website, to: :one
end
