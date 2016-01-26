class CreateWebsiteVisits < ActiveRecord::Migration
  def change
    create_table :website_visits do |t|
      t.references :website, index: true, foreign_key: {on_delete: :cascade}
      t.timestamps null: false
    end
  end
end
