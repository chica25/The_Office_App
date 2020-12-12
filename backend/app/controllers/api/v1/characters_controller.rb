class Api::V1::CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]

  # GET /characters
  def index
    @characters = Api::V1::Character.all

    #  render json: @characters
     render json: @characters, except: [:created_at, :updated_at]
  end


  # PATCH/PUT /characters/1
  def update
    byebug
    @character = Api::V1::Toy.find_by_id(params[:id])
    @character.update(likes: @character.likes + 1)
    render json: @character, except: [:created_at, :updated_at]
  
  end

  # DELETE /characters/1
  # def destroy
  #   @character.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def character_params
      params.require(:character).permit(:name, :image_url)
    end
end
