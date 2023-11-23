class CreateBeds < ActiveRecord::Migration[7.0]
  def change
    create_table :beds do |t|
      t.string :bedspace_id
      t.string :occupant_firstname
      t.string :occupant_lastname
      t.string :occupant_email
      t.string :status
      t.string :occupant_campaign
      t.references :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
