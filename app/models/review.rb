class Review < ApplicationRecord
    has_many :user_reviews
    has_many :users
end
