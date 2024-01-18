class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories, primary_key: "categories_id" do |t|
      t.string :name
      # 他のカラムの定義

      t.timestamps
    end
  end
end
