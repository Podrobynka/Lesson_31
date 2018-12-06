class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :name
      t.integer :phone
      t.string :email
      t.string :adress
      t.integer :zip

      t.timestamps
    end
  end
end
