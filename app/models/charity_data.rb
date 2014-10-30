class CharityData < ActiveRecord::Base
	has_many :charity_contributions
	has_many :charity_expenses

	def self.search(search)
	  if search
	  	@charity_data = CharityData.where("charity_name LIKE '%#{search}%'")
	  else
	  	@charity_data = CharityData.all
	  end
	end
end