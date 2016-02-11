class Tag < ActiveRecord::Base
  has_many :website_tags
  has_many :websites, :through => :website_tags
end
