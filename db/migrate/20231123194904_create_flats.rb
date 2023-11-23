class CreateFlats < ActiveRecord::Migration[7.0]
  def change
    create_table :flats do |t|
      t.string :flat_name
      t.string :location
      t.string :address

      t.timestamps
    end
  end
end
