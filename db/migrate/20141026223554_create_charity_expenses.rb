class CreateCharityExpenses < ActiveRecord::Migration
  def change
    create_table :charity_expenses do |t|
      t.integer :program
      t.integer :admin
      t.integer :fundraising
      t.references :charity_data
    end
  end
end
