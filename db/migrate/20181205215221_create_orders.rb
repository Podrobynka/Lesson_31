class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :title
      t.decimal :amount
      t.decimal :price
      t.decimal :size
      t.string :path_to_image
      t.string :name
      t.integer :phone
      t.string :email
      t.string :adress
      t.integer :zip

      t.timestamps
    end
  end
end
