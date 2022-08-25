class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :plate, :likes, :state, :image
  has_many :reviews
end
