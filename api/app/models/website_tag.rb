class WebsiteTag < ActiveRecord::Base
  belongs_to :website
  belongs_to :tag
end
