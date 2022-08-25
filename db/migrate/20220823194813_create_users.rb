class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :image
      t.string :plate
      t.string :state
      t.integer :likes

      t.timestamps
    end
  end
end
