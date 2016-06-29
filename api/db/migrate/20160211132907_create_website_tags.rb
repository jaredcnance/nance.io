class CreateWebsiteTags < ActiveRecord::Migration
  def self.up
    create_table :website_tags do |t|
      t.integer :website_id
      t.integer :tag_id
      t.integer :occurrences
    end

    add_index :website_tags, [:website_id, :tag_id]
  end

  def self.down
    drop_table :website_tags
  end
end
