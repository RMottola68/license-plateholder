class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        reviews = Review.create(review_params)
    end

    def review_params
        params.permit(:title, :content, :user_id)
    end
end
