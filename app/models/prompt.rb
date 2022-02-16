class Prompt < ApplicationRecord
    has_many :choices

    has_many :prompt_choices

    has_many :user_choices, through: :prompt_choices, source: :choices

    has_many :users, through: :prompt_choices


end
