class TagResource < JSONAPI::Resource
    attribute :name
    relationship :websites, to: :many
end
