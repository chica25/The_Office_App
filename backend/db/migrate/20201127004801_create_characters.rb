class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_characters do |t|
      t.string :name
      t.string :image_url

      t.timestamps
    end
  end
end
