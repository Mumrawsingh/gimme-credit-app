class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :score
end
