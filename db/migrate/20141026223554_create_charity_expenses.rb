class CreateCharityExpenses < ActiveRecord::Migration
  def change
    create_table :charity_expenses do |t|
      t.integer :program
      t.integer :admin
      t.integer :fundraising
    end
  end
end
