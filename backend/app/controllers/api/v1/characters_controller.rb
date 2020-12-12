class Api::V1::CharactersController < ApplicationController
  before_action :set_character, only: [:update]

  # GET /characters
  def index
    @characters = Api::V1::Character.all

    #  render json: @characters
     render json: @characters, except: [:created_at, :updated_at]
  end


  # PATCH - /characters/:id/quotes
  def update
    @character = Api::V1::Toy.find_by_id(params[:id])
    @character.update(likes: @character.likes + 1)
    render json: @character, except: [:created_at, :updated_at]
  
  end

 
  private
      def set_character
      @character = Character.find(params[:id])
    end
end
