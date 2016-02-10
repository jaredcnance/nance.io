class Website < ActiveRecord::Base
  has_many :website_visits
  has_and_belongs_to_many :tags

  def add_visit
    visit = WebsiteVisit.create()
    visit.website = self
    visit.save!
  end
end
