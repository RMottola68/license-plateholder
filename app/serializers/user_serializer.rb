class UserSerializer < ActiveModel::Serializer
  attributes :id, :plate, :state, :image
end
