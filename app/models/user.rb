class User < ApplicationRecord
    has_many :products
    has_secure_password
    validates :email, :username, presence: true, uniqueness: true
    # validates :password, length: { minimum: 6 }, message: 'Password must be at least 6 characters'

end
