class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.text :address
      t.integer :zip
      t.text :orders

      t.timestamps
    end
  end
end
