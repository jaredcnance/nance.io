class WebsiteVisitResource < JSONAPI::Resource
  relationship :website, to: :one
end
