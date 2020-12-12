class Api::V1::QuotesController < ApplicationController

  # GET /quotes
  def index
    @quotes = Api::V1::Quote.where('character_id = ?', params[:character_id])

    render json: @quotes, include: :character
  end
end
