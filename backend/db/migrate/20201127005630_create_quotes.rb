class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_quotes do |t|
      t.string :quote
      t.integer :character_id
    

      t.timestamps
    end
  end
end
