class TagResource < JSONAPI::Resource
  attribute :name
  relationship :website_tags, to: :many
  has_many :websites, :through => :website_tags
end
