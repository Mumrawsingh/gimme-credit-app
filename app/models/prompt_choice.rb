class PromptChoice < ApplicationRecord

    belongs_to :users
    belongs_to :prompts
    belongs_to :choices

end
