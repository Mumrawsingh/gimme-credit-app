class PromptSerializer < ActiveModel::Serializer
  attributes :id, :description, :img_url

  has_many :choices
end
