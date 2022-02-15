class PromptChoice < ApplicationRecord

    belongs_to :user 
    belongs_to :prompt
    belongs_to :choice

end
