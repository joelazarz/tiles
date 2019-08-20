class Api::BoardsController < ApplicationController

    def index
        boards = Board.all 

        render json: boards
    end

    def show 
        board = Board.find(params[:id])

        render json: board
    end

    def create
        board = Board.create(name:params[:name],description:params[:description])
        
        render json: board
    end

end
