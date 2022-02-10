class CreateChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :choices do |t|
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
