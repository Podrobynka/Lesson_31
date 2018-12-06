class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :client_id, index: true
      t.integer :product_id, index: true
      t.decimal :amount
      t.decimal :price

      t.timestamps
    end
  end
end
