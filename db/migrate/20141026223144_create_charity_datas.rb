class CreateCharityDatas < ActiveRecord::Migration
  def change
    create_table :charity_data do |t|
      t.string :charity_name
      t.string :charity_logo
      t.string :charity_desc
    end
  end
end
