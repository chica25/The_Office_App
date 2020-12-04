class AddLikesToApiV1Characters < ActiveRecord::Migration[6.0]
  def change
    add_column :api_v1_characters, :likes, :integer
  end
end
