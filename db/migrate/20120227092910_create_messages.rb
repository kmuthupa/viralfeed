class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :title
      t.string :name
      t.string :message, :limit => 3000
      t.timestamps
    end
  end
end
