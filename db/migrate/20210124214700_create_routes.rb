class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :route_name, null: false
      t.float :distance
      t.string :activity
      t.float :start_lat
      t.float :start_long
      t.float :end_lat
      t.float :end_long
      t.text :description

      t.timestamps
    end

    add_index :routes, :route_name
  end
end
