class Choice < ApplicationRecord

    has_many :prompt_choices

    has_many :prompts, through: :prompt_choices

    has_many :users, through: :prompt_choices

end
