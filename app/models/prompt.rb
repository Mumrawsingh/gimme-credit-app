class Prompt < ApplicationRecord

    has_many :prompt_choices

    has_many :choices, through: :prompt_choices

    has_many :users, through: :prompt_choices


end
