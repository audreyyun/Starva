class EditRoute < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :athlete_id, :integer
    add_index :routes, :athlete_id
  end

end
