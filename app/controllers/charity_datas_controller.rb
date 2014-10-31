class CharityDatasController < ApplicationController

	def index
	  @charity_data = CharityData.search(params[:search])
	end

	def show
	  @charity_data = CharityData.find(params[:id])
	  @charity_expenses = @charity_data.charity_expenses

		respond_to do |format|
		format.html
	  format.json { render :json => @charity_expenses }
  end
	end
end