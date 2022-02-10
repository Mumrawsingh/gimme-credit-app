class User < ApplicationRecord

    has_many :prompt_choices

    has_secure_password

    validates :username, presence: true, uniqueness: true

end
