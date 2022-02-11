class User < ApplicationRecord

    has_many :prompt_choices

    has_many :prompts, through: :prompt_choices
    
    has_many :choices, through: :prompt_choices

    has_secure_password

    validates :username, presence: true, uniqueness: true

end

# rails c
# user.prompt_choices.map{}