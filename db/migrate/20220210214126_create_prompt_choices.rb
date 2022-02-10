class CreatePromptChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :prompt_choices do |t|

      t.string :name

      t.integer :user_id
      t.integer :prompt_id
      t.integer :choice_id

      t.timestamps
    end
  end
end
