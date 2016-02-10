class CreateTagsWebsitesJoinTable < ActiveRecord::Migration
  def self.up
    create_table :tags_websites, :id => false do |t|
      t.integer :website_id
      t.integer :tag_id
    end

    add_index :tags_websites, [:website_id, :tag_id]
  end

  def self.down
    drop_table :website_tags
  end
end
