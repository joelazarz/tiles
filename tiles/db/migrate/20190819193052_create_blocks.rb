class CreateBlocks < ActiveRecord::Migration[5.2]
  def change
    create_table :blocks do |t|
      t.string :description
      t.string :photo
      t.belongs_to :board, foreign_key: true

      t.timestamps
    end
  end
end
