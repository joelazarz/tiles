class Api::BlocksController < ApplicationController

    def index 
        blocks = Block.all 

        render json: blocks
    end


    def create
        block = Block.create(photo:params[:photo],board_id:params[:board_id])
        render json: block
    end

end
