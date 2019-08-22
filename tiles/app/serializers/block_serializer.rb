class BlockSerializer < ActiveModel::Serializer
  attributes :id, :board_id, :photo
  has_many :comments
end
