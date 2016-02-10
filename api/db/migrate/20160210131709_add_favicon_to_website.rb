class AddFaviconToWebsite < ActiveRecord::Migration
  def change
    add_column :websites, :favIconUrl, :string
  end
end
