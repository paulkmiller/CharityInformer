class CharityDatasController < ApplicationController

	def index
	  @charity_data = CharityData.search(params[:search])
	end

	def show
	  @charity_data = CharityData.find(params[:id])
	  @charity_expenses = @charity_data.charity_expenses
	end
end