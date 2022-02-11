class PromptChoiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :prompt_id, :choice_id
end
