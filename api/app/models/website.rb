class Website < ActiveRecord::Base
  has_many :website_visits
  has_many :website_tags
  has_many :tags, :through => :website_tags

  def add_visit
    visit = WebsiteVisit.create()
    visit.website = self
    visit.save!
  end
end
