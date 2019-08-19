class BlockSerializer < ActiveModel::Serializer
  attributes :id, :description, :board_id, :photo
end
