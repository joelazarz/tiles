class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :block_id
  has_one :block
end
