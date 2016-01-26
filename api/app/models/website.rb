class Website < ActiveRecord::Base
  has_many :website_visits

  def add_visit
    visit = WebsiteVisit.create()
    visit.website = self
    visit.save!
  end
end
