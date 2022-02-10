class CreatePrompts < ActiveRecord::Migration[7.0]
  def change
    create_table :prompts do |t|
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
