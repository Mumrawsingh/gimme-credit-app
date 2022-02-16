class Choice < ApplicationRecord
    belongs_to :prompt

    has_many :prompt_choices

    has_many :subject_prompts, through: :prompt_choices

    has_many :users, through: :prompt_choices

end
