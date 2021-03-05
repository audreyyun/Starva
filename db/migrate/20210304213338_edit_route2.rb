class EditRoute2 < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :route, :string, null: false
  end
end
