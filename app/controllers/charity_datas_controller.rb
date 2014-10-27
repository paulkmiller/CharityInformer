class CharityDatasController < ApplicationController

	def index
	  @charity_data = CharityData.all
	end

	def show
	  @charity_data = CharityData.find(params[:id])
	end
end