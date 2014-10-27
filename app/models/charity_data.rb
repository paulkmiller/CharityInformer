class CharityData < ActiveRecord::Base
	has_many :charity_contributions
	has_many :charity_expenses
end