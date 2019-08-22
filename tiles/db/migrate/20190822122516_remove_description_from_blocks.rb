class RemoveDescriptionFromBlocks < ActiveRecord::Migration[5.2]
  def change
    remove_column :blocks, :description, :string
  end
end
