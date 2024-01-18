class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :user_id
      t.integer :categories_id
      t.string :name
      t.integer :learning_time

      t.timestamps
    end
  end
end