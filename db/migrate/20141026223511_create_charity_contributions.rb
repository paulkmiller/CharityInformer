class CreateCharityContributions < ActiveRecord::Migration
  def change
    create_table :charity_contributions do |t|
      t.integer :cgg
      t.integer :fc
      t.integer :o
      t.references :charity_data
    end
  end
end
